import { getImages, getImageUrl } from '@/api/image-api';
import { ImageType } from '@/types/image';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ModalPopupImage } from './ModalPopupImage';
import Loading from './Loading';

interface GalleryInfiniteScrollState {
  items: ImageType[];
  page: number;
  pageSize: number;
  hasMore: boolean;
  showPopup: boolean;
  popupImage: ImageType;
}

interface GalleryInfiniteScrollProps {
  setShowHeader: (arg: boolean) => void;
}

class GalleryInfiniteScroll extends React.Component<
  GalleryInfiniteScrollProps,
  GalleryInfiniteScrollState
> {
  constructor(props: GalleryInfiniteScrollProps) {
    super(props);
    this.state = {
      items: [],
      page: 1,
      pageSize: 8,
      hasMore: true,
      showPopup: false,
      popupImage: {} as ImageType
    };
  }

  fetchMoreData = () => {
    setTimeout(() => {
      console.log('fetchMoreData');
      getImages(this.state.page, this.state.pageSize).then((images) => {
        this.setState({
          items: this.state.items.concat(images),
          page: this.state.page + 1,
          hasMore: images.length > 0
        });
      });
    }, 1000);
  };

  handleClickImage = (
    e: React.MouseEvent<HTMLAnchorElement>,
    image: ImageType
  ) => {
    e.preventDefault();
    this.props.setShowHeader(false);
    this.setState({
      showPopup: true,
      popupImage: image
    });
  };

  closeModalAction = () => {
    this.props.setShowHeader(true);
    this.setState({
      showPopup: false
    });
  };

  render(): React.ReactNode {
    return (
      <>
        <div id="gallery" className="gallery-box">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="title-box">
                  <h2>Gallery</h2>
                  <p>A place to cherish memories.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <InfiniteScroll
                dataLength={this.state.items.length}
                next={this.fetchMoreData}
                hasMore={this.state.hasMore}
                loader={<Loading />}
              >
                <ul className="popup-gallery clearfix">
                  {this.state.items?.map((item: ImageType) => (
                    <a
                      href={getImageUrl(item.url)}
                      onClick={(e) => this.handleClickImage(e, item)}
                      key={item.id}
                    >
                      <img
                        className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                        style={{ height: '600px' }}
                        src={getImageUrl(item.url)}
                        alt="single image"
                      />
                    </a>
                  ))}
                </ul>
              </InfiniteScroll>
            </div>
          </div>
        </div>
        {this.state.showPopup && (
          <ModalPopupImage
            image={getImageUrl(this.state.popupImage.url)}
            closeModal={this.closeModalAction}
          />
        )}
      </>
    );
  }
}

export default GalleryInfiniteScroll;

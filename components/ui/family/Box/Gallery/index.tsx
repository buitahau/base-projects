import React from 'react';
import { ModalPopupImage } from './ModalPopupImage';
import useShowHideTopHeader from '@/hooks/useShowHideTopHeader';

interface ImageType {
  id: number;
  image: string;
}

export default function GalleryBox() {
  const [images, setImages] = React.useState<ImageType[]>();
  const [showPopup, setShowPopup] = React.useState<boolean>(false);
  const { setShowHeader } = useShowHideTopHeader();
  const [popupImage, setPopupImage] = React.useState<ImageType>({
    id: 1,
    image: 'images/family/tin/gallery/image1.jpg'
  });
  React.useEffect(() => {
    setImages([
      {
        id: 1,
        image: 'images/family/tin/gallery/image1.jpg'
      },
      {
        id: 2,
        image: 'images/family/tin/gallery/image2.jpg'
      },
      {
        id: 3,
        image: 'images/family/tin/gallery/image3.jpg'
      },
      {
        id: 4,
        image: 'images/family/tin/gallery/image4.jpg'
      },
      {
        id: 5,
        image: 'images/family/tin/gallery/image5.jpg'
      },
      {
        id: 6,
        image: 'images/family/tin/gallery/image6.jpg'
      },
      {
        id: 7,
        image: 'images/family/tin/gallery/image7.jpg'
      },
      {
        id: 8,
        image: 'images/family/tin/gallery/image8.jpg'
      },
      {
        id: 9,
        image: 'images/family/tin/gallery/image9.jpg'
      }
    ]);
  }, []);

  const handleClickImage = (
    e: React.MouseEvent<HTMLAnchorElement>,
    image: ImageType
  ) => {
    e.preventDefault();
    setShowHeader(false);
    setPopupImage(image);
    setShowPopup(true);
  };

  const closeModalAction = () => {
    console.log('close');
    setShowHeader(true);
    setShowPopup(false);
  };

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
          <div className="row">
            <ul className="popup-gallery clearfix">
              {images?.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.image}
                    onClick={(e) => handleClickImage(e, item)}
                  >
                    <img
                      className="img-fluid"
                      src={item.image}
                      alt="single image"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {showPopup && (
        <ModalPopupImage
          image={popupImage.image}
          closeModal={closeModalAction}
        />
      )}
    </>
  );
}

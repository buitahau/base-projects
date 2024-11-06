import { FolderType } from '@/types/folder';
import { ImageType } from '@/types/image';
import {
  getImagesByFolderId,
  countImages,
  deleteImage,
  getImageUrl
} from '@/api/image-api';
import React from 'react';
import { Pagination } from './Pagination';
import Link from 'next/link';
import ModalDeleteConfirmation from '@/components/ui/common/Modal/ModalDeleteConfirmation';
import { deleteFile } from '@/api/upload-api';
import Image from 'next/image';

interface ListGalleryProps {
  folder_id: string;
}

interface ListGalleryState {
  folders: FolderType[];
  images: ImageType[];
  currentPage: number;
  pageSize: number;
  totalPages: number;
  showConfirmationModal: boolean;
  imageToDelete?: ImageType;
  selectedImages: ImageType[];
}

class ListGallery extends React.Component<ListGalleryProps, ListGalleryState> {
  constructor(props: ListGalleryProps) {
    super(props);
    this.state = {
      folders: [],
      images: [],
      currentPage: 1,
      pageSize: 10,
      totalPages: 0,
      showConfirmationModal: false,
      selectedImages: []
    };
  }
  componentDidMount(): void {
    this.fetchImages(this.state.currentPage);
    this.countTotalPages();
  }

  countTotalPages = async () => {
    const totalImages = await countImages();
    const totalPages = Math.ceil(totalImages / this.state.pageSize);
    this.setState({ totalPages });
  };

  fetchImages = async (pageNumner: number) => {
    const images = await getImagesByFolderId(
      this.props.folder_id,
      pageNumner,
      this.state.pageSize
    );
    this.setState({ images, currentPage: pageNumner });
  };

  deleteImage = async (image: ImageType) => {
    this.setState({ showConfirmationModal: true });
    this.setState({ imageToDelete: image });
  };

  confirmDelete = async () => {
    try {
      if (this.state.imageToDelete) {
        await deleteFile(this.state.imageToDelete.url);
        await deleteImage(this.state.imageToDelete.id as string);
        this.setState({ showConfirmationModal: false });
        console.log(this.state.currentPage);
        this.fetchImages(this.state.currentPage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleCheckboxChange = (image: ImageType) => {
    this.setState((prevState) => ({
      selectedImages: prevState.selectedImages.includes(image)
        ? prevState.selectedImages.filter((img) => img.id !== image.id)
        : [...prevState.selectedImages, image]
    }));
  };

  render() {
    return (
      <>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th></th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Name
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Url
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Show in slider
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Show in gallery
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.images.map((image) => (
              <tr key={image.id}>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => this.handleCheckboxChange(image)}
                  />
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <Image
                    src={getImageUrl(image.url)}
                    alt={image.name}
                    width={50}
                    height={50}
                  />
                  <h5 className="font-medium text-black dark:text-white">
                    <Link
                      className="hover:text-primary"
                      href={`/dashboard/family/gallery/edit/${image.id}`}
                    >
                      {image.name}
                    </Link>
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <h5 className="font-medium text-black dark:text-white">
                    {getImageUrl(image.url)}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <input
                    type="checkbox"
                    defaultChecked={image.show_in_slider}
                    className="checkbox-disabled"
                  />
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <input
                    type="checkbox"
                    defaultChecked={image.show_in_gallery}
                    className="checkbox-disabled"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <Pagination
          total={this.state.totalPages}
          onPageChange={this.fetchImages}
        /> */}
        {this.state.showConfirmationModal && (
          <ModalDeleteConfirmation
            title="Delete Image"
            message="Are you sure you want to delete this image?"
            onConfirm={this.confirmDelete}
            onCancel={() => this.setState({ showConfirmationModal: false })}
          />
        )}
      </>
    );
  }
}

export default ListGallery;

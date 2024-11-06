'use client';

import Breadcrumb from '@/components/ui/dashboard/Breadcrumb/Breadcrumb';
import UploadImage from '@/components/ui/dashboard/Family/Gallery/Add/UploadImage';
import AddFolder from '@/components/ui/dashboard/Family/Gallery/Add/AddFolder';
import { FolderType } from '@/types/folder';
import { ImageType } from '@/types/image';
import React from 'react';
import Search from '@/components/ui/dashboard/Family/Gallery/List/filter-and-search/Search';
import GalleryProvider from '@/components/ui/dashboard/Family/Gallery/GalleryProvider';
import ListImage from '@/components/ui/dashboard/Family/Gallery/List/ListImage';
import FilterImage from '@/components/ui/dashboard/Family/Gallery/List/filter-and-search/Filter';

interface GalleryProps {
  folder_id: string;
}

interface GalleryState {
  images: ImageType[];
  currentFolder: FolderType;
  isAddImage: boolean;
  isAddFolder: boolean;
}

const ROOT_FOLDER = '-1';

class Gallery extends React.Component<GalleryProps, GalleryState> {
  constructor(props: GalleryProps) {
    super(props);
    this.state = {
      images: [],
      currentFolder: {
        id: props.folder_id ? props.folder_id : ROOT_FOLDER,
        name: '',
        description: '',
        parent_id: ''
      },
      isAddImage: false,
      isAddFolder: false
    };
  }

  handleAddImage = () => {
    this.setState({ isAddImage: true, isAddFolder: false });
  };

  handleAddFolder = () => {
    this.setState({ isAddFolder: true, isAddImage: false });
  };

  handleClose = () => {
    this.setState({ isAddImage: false, isAddFolder: false });
  };

  render() {
    return (
      <>
        <Breadcrumb pageName="Gallery" pageUrl="/dashboard/family/gallery" />
        <div className="flex flex-col gap-10">
          <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-semibold text-black dark:text-white">
                Gallery
              </h4>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 rounded bg-danger py-2 px-4.5 font-medium text-white hover:bg-opacity-80">
                  <svg
                    className="fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                      <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Delete Images
                </button>
                <button
                  onClick={this.handleAddFolder}
                  className="flex items-center gap-2 rounded bg-success py-2 px-4.5 font-medium text-white hover:bg-opacity-80"
                >
                  <svg
                    className="fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 7H9V1C9 0.4 8.6 0 8 0C7.4 0 7 0.4 7 1V7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H7V15C7 15.6 7.4 16 8 16C8.6 16 9 15.6 9 15V9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7Z"
                      fill="white"
                    />
                  </svg>
                  Add Folder
                </button>
                <button
                  onClick={this.handleAddImage}
                  className="flex items-center gap-2 rounded bg-primary py-2 px-4.5 font-medium text-white hover:bg-opacity-80"
                >
                  <svg
                    className="fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 7H9V1C9 0.4 8.6 0 8 0C7.4 0 7 0.4 7 1V7H1C0.4 7 0 7.4 0 8C0 8.6 0.4 9 1 9H7V15C7 15.6 7.4 16 8 16C8.6 16 9 15.6 9 15V9H15C15.6 9 16 8.6 16 8C16 7.4 15.6 7 15 7Z"
                      fill="white"
                    />
                  </svg>
                  Upload Images
                </button>
              </div>
            </div>
            <GalleryProvider>
              <div className="max-w-full overflow-x-auto">
                {this.state.isAddImage ? (
                  <UploadImage
                    folder_id={this.state.currentFolder.id}
                    onClose={this.handleClose}
                  />
                ) : this.state.isAddFolder ? (
                  <AddFolder folder_id={this.state.currentFolder.id} />
                ) : (
                  <>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex-shrink-0">
                        <FilterImage />
                      </div>
                      <div className="flex-shrink-0">
                        <Search />
                      </div>
                    </div>
                    <ListImage folder_id={this.state.currentFolder.id} />
                  </>
                )}
              </div>
            </GalleryProvider>
          </div>
        </div>
      </>
    );
  }
}

export default Gallery;

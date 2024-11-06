import { FolderType } from '@/types/folder';
import React from 'react';

interface AddFolderProps {
  folder_id?: string;
}

interface AddFolderState {
  folders: FolderType[];
}

class AddFolder extends React.Component<AddFolderProps, AddFolderState> {
  constructor(props: AddFolderProps) {
    super(props);
    this.state = {
      folders: []
    };
  }
  render() {
    return (
      <>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Add Folder
            </h3>
          </div>
        </div>
      </>
    );
  }
}

export default AddFolder;

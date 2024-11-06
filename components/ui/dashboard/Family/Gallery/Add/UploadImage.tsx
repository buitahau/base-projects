import React, { useState } from 'react';
import { motion } from 'framer-motion';
import uploadImage from '@/api/upload-api';
import { createImage } from '@/api/image-api';
import { ImageType } from '@/types/image';
import { showToastError, showToastSuccess } from '@/utils/toast-helpers';

interface UploadImageProps {
  folder_id: string;
  onClose: () => void;
}

interface FileWithPreview {
  file: File;
  preview: string;
}

const UploadImage: React.FC<UploadImageProps> = ({ folder_id, onClose }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileWithPreview[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles: FileWithPreview[] = Array.from(files).map((file) => ({
        file,
        preview: URL.createObjectURL(file)
      }));
      setSelectedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => {
      const newFiles = [...prev];
      URL.revokeObjectURL(newFiles[index].preview);
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFiles.length === 0) return;

    try {
      setIsUploading(true);
      let successCount = 0;

      for (const fileData of selectedFiles) {
        try {
          const uploadedData = await uploadImage(fileData.file);

          if (uploadedData) {
            const imageData: ImageType = {
              name: fileData.file.name,
              url: uploadedData.fullPath,
              folder_id: folder_id
            };
            await createImage(imageData);
            successCount++;
          }

          setUploadProgress((successCount / selectedFiles.length) * 100);
        } catch (error) {
          console.error(`Failed to upload ${fileData.file.name}:`, error);
        }
      }

      if (successCount === selectedFiles.length) {
        showToastSuccess('All files uploaded successfully!');
      } else if (successCount > 0) {
        showToastSuccess(
          `Uploaded ${successCount} of ${selectedFiles.length} files`
        );
      } else {
        showToastError('Failed to upload files');
      }
    } catch (error) {
      console.error('Upload failed:', error);
      showToastError('Upload failed.');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
      selectedFiles.forEach((file) => URL.revokeObjectURL(file.preview));
      setSelectedFiles([]);
      onClose();
    }
  };

  return (
    <div className="p-6.5">
      <form onSubmit={handleSubmit}>
        <div className="mb-4.5">
          <label className="mb-2.5 block text-black dark:text-white">
            Upload Images
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>

        {selectedFiles.length > 0 && (
          <div className="mb-4.5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {selectedFiles.map((file, index) => (
              <div key={index} className="relative">
                <img
                  src={file.preview}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg shadow-md"
                />
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="absolute -top-2 -right-2 bg-danger text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-opacity-80"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {isUploading && (
          <div className="mb-4.5">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-primary h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Uploading: {Math.round(uploadProgress)}%
            </p>
          </div>
        )}

        <div className="flex gap-4">
          <motion.button
            type="submit"
            disabled={selectedFiles.length === 0 || isUploading}
            className={`flex w-full justify-center rounded bg-primary p-3 font-medium text-white transition
              ${isUploading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-opacity-90'}`}
            whileHover={!isUploading ? { scale: 1.02 } : {}}
            whileTap={!isUploading ? { scale: 0.98 } : {}}
          >
            {isUploading ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Uploading...
              </div>
            ) : (
              `Upload ${selectedFiles.length} Image${selectedFiles.length !== 1 ? 's' : ''}`
            )}
          </motion.button>
          <button
            type="button"
            onClick={onClose}
            className="rounded bg-secondary p-3 font-medium text-gray hover:bg-opacity-90 px-6"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadImage;

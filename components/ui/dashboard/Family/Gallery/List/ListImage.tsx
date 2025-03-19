import { getImageUrl } from '@/api/image-api';
import useGalleryContext from '@/hooks/image/useGalleryContext';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { Pagination } from './Pagination';
import { ImageType } from '@/types/image';

const ListImage = ({ folder_id }: { folder_id: string }) => {
  const { result, processSearch, selectedImageIds, setSelectedImageIds } =
    useGalleryContext();

  const handleCheckboxChange = (image: ImageType) => {
    if (!image.id) return;

    const imageId = image.id;
    if (selectedImageIds.includes(imageId)) {
      setSelectedImageIds(selectedImageIds.filter((img) => img !== imageId));
    } else {
      setSelectedImageIds([...selectedImageIds, imageId]);
    }
  };

  useEffect(() => {
    processSearch();
  }, []);

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
          {result.map((image) => (
            <tr key={image.id}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(image)}
                  checked={selectedImageIds.includes(image.id ?? '')}
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
      <Pagination />
    </>
  );
};

export default ListImage;

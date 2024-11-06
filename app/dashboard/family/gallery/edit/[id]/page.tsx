'use client';

import {
  generateDefaultImage,
  getImageById,
  getImageUrl,
  updateImage
} from '@/api/image-api';
import Breadcrumb from '@/components/ui/dashboard/Breadcrumb/Breadcrumb';
import { ImageType } from '@/types/image';
import { showToastError, showToastSuccess } from '@/utils/toast-helpers';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function EditImage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [image, setImage] = useState<ImageType>(generateDefaultImage());

  useEffect(() => {
    const fetchImage = async () => {
      const image = await getImageById(params.id);
      setImage(image);
    };
    fetchImage();
  }, [params.id]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await updateImage(image);
      showToastSuccess('Update successful!');
    } catch (error) {
      console.log(error);
      showToastError('Error when updating image!');
    }
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setImage((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: { target: { name: any; checked: any } }) => {
    const { name, checked } = e.target;
    setImage((prevData) => ({
      ...prevData,
      [name]: checked
    }));
  };

  return (
    <>
      <Breadcrumb pageName="Gallery" pageUrl={`/dashboard/family/gallery`} />
      <div className="grid grid-cols-1 gap-9">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Edit Image
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-6.5 xl:w-2/3 inline-block align-top">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      name="name"
                      id="name"
                      value={image.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Url
                    </label>
                    <input
                      type="text"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      id="url"
                      value={getImageUrl(image.url)}
                      disabled
                    />
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full">
                    <input
                      type="checkbox"
                      className="rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      id="show-in-slider"
                      name="show_in_slider"
                      checked={image.show_in_slider}
                      onChange={handleCheckboxChange}
                    />
                    <label className="text-sm font-medium text-black dark:text-white p-3">
                      Show in slider
                    </label>
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <input
                      type="checkbox"
                      className="rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      id="show-in-gallery"
                      name="show_in_gallery"
                      checked={image.show_in_gallery}
                      onChange={handleCheckboxChange}
                    />
                    <label className="text-sm font-medium text-black dark:text-white p-3">
                      Show in gallery
                    </label>
                  </div>
                </div>
                <div className="w-full flex justify-center space-x-4">
                  <button
                    className="rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                    type="submit"
                  >
                    Submit
                  </button>
                  <button
                    className="rounded bg-secondary p-3 font-medium text-gray hover:bg-opacity-90"
                    type="button"
                    onClick={() => router.push('/dashboard/family/gallery')}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              <div className="xl:w-1/3 inline-block justify-center items-center p-5">
                <Image
                  src={getImageUrl(image.url)}
                  alt={image.name}
                  width={400}
                  height={400}
                  className="mx-auto"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

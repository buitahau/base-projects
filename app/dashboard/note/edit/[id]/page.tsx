'use client';

import Breadcrumb from '@/components/ui/dashboard/Breadcrumb/Breadcrumb';
import { useEffect, useState } from 'react';
import { updateNote, getNoteById } from '@/api/note-api';
import { showToastSuccess, showToastError } from '@/utils/toast-helpers';

export default function EditNote({ params }: { params: { id: string } }) {
  const [noteFormData, setNoteFormData] = useState({
    id: '',
    title: ''
  });

  useEffect(() => {
    const fetchNode = async () => {
      if (params.id) {
        const note = await getNoteById(params.id);
        if (note) {
          setNoteFormData({
            id: note.id,
            title: note.title
          });
        }
      }
    };

    fetchNode();
  }, [params.id]);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setNoteFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { data, error } = await updateNote(noteFormData);
    if (error) {
      showToastError('Error when updating note!');
    } else {
      showToastSuccess('Update successful!');
    }
  };

  return (
    <>
      <Breadcrumb pageName="Note" pageUrl="/dashboard/note" />
      <div className="grid grid-cols-1 gap-9">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                {noteFormData.id ? 'Edit' : 'Add'} Note
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Title
                    </label>
                    <input
                      type="text"
                      placeholder="Enter title"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      name="title"
                      id="title"
                      value={noteFormData.title}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

import useGalleryContext from '@/hooks/image/useGalleryContext';

const DeleteImages = () => {
  const { selectedImageIds } = useGalleryContext();

  const handleDeleteImages = () => {
    console.log(selectedImageIds);
  };

  return (
    <button
      onClick={handleDeleteImages}
      className={`flex items-center gap-2 rounded bg-danger py-2 px-4.5 font-medium text-white hover:bg-opacity-80 ${
        selectedImageIds.length === 0
          ? 'opacity-50 cursor-not-allowed hover:bg-danger'
          : ''
      }`}
      disabled={selectedImageIds.length === 0}
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
          d="M13 1L1 13M1 1L13 13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Delete Images
    </button>
  );
};

export default DeleteImages;

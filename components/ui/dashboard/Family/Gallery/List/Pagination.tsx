import React from 'react';
import { IconButton, Typography } from '@material-tailwind/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import useGalleryContext from '@/hooks/image/useGalleryContext';

export function Pagination() {
  const { total, changePage, pageNumber } = useGalleryContext();

  const next = () => {
    changePage(pageNumber + 1);
  };

  const prev = () => {
    changePage(pageNumber - 1);
  };

  return (
    total > 1 && (
      <div className="flex items-center gap-8 justify-end py-3">
        <IconButton
          size="sm"
          variant="outlined"
          onClick={prev}
          disabled={pageNumber === 0}
          placeholder={undefined}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
        <Typography
          color="gray"
          className="font-normal"
          placeholder={undefined}
        >
          Page <strong className="text-gray-900">{pageNumber + 1}</strong> of{' '}
          <strong className="text-gray-900">{total}</strong>
        </Typography>
        <IconButton
          size="sm"
          variant="outlined"
          onClick={next}
          disabled={pageNumber === total - 1}
          placeholder={undefined}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
      </div>
    )
  );
}

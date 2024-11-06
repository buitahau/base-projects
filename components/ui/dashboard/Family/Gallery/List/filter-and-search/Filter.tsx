import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import useGalleryContext from '@/hooks/image/useGalleryContext';

/**
 * Filter component
 */
export default function FilterImage() {
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const { setFilter } = useGalleryContext();
  const [showInSlider, setShowInSlider] = useState(false);
  const [showInGallery, setShowInGallery] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      filterRef.current &&
      !filterRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const executeFilter = () => {
    setFilter(showInSlider, showInGallery);
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={filterRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-4 py-2 text-m font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none transition-colors duration-200"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <path
            d="M1.33331 2H14.6666L9.33331 8.30667V12.6667L6.66665 14V8.30667L1.33331 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Filter
      </button>
      {isOpen && (
        <div className="filter-section absolute">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-[#2C2F3E] text-white p-6 rounded-2xl shadow-lg w-96"
          >
            <div className="space-y-4">
              <div>
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      name="showInSlider" 
                      id="showInSlider"
                      className="w-4 h-4 rounded border-gray-500 text-blue-600 focus:ring-blue-500"
                      checked={showInSlider}
                      onChange={() => setShowInSlider(!showInSlider)}
                    />
                    <label htmlFor="showInSlider" className="text-sm text-gray-300">
                      Show in slider
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      name="showInGallery" 
                      id="showInGallery"
                      className="w-4 h-4 rounded border-gray-500 text-blue-600 focus:ring-blue-500"
                      checked={showInGallery}
                      onChange={() => setShowInGallery(!showInGallery)}
                    />
                    <label htmlFor="showInGallery" className="text-sm text-gray-300">
                      Show in gallery
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition"
              >
                Cancel
              </button>
              <Button
                className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg"
                onClick={() => executeFilter()}
              >
                Apply Filters
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

import { useEffect, useState } from 'react';

const useShowHideTopHeader = () => {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const invisibleClass = 'invisible';
    const headerElement = document.querySelector('header');

    if (headerElement) {
      if (showHeader === false) {
        headerElement.classList.add(invisibleClass);
      } else {
        headerElement.classList.remove(invisibleClass);
      }
    }
  }, [showHeader]);

  return { showHeader, setShowHeader };
};

export default useShowHideTopHeader;

import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage('color-theme', 'light');

  useEffect(() => {
    const dardClass = 'dark';
    const bodyClass = window.document.body.classList;

    colorMode === 'dark'
      ? bodyClass.add(dardClass)
      : bodyClass.remove(dardClass);
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;

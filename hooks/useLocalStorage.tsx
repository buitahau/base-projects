'use client';

import { useEffect, useState } from 'react';

type SetValue<T> = T | ((val: T) => T);

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: SetValue<T>) => void] {
  // state to store out value
  // pass initial state function to useState so logic is only executed once

  const [storedValue, setStoredValue] = useState(() => {
    try {
      // get from local storage by key
      if (typeof window !== 'undefined') {
        // browser code
        const item = window.localStorage.getItem(key);
        // parse stored json or if none return initiavalue
        return item ? JSON.parse(item) : initialValue;
      }
    } catch (error) {
      // if error also reutnr initialValue
      console.log(error);
      return initialValue;
    }
  });

  // useEffect to update local storage when the state changed
  useEffect(() => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        typeof storedValue === 'function'
          ? storedValue(storedValue)
          : storedValue;
      // Save state
      if (typeof window !== 'undefined') {
        // browser code
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (err) {
      console.log(err);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;

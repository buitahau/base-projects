import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedTextHook = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'frontend development',
        'backend development',
        'web designing',
        'web development'
      ],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return <span ref={el} />;
};

export default TypedTextHook;

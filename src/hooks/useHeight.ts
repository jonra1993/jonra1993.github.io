import { useEffect, useState } from 'react';

const useHeight = (): number => {
  const [height, setHeight] = useState<number>(typeof window !== 'undefined' ? window.innerHeight * (window.visualViewport?.scale || 1) : 0);

  useEffect(() => {
    const handleResize = (): void => {
      setHeight(window.innerHeight * (window.visualViewport?.scale || 1));
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return height;
};

export default useHeight;

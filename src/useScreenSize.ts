import { useState } from 'react';
import { useMount } from './useMount';

export const useScreenSize = () => {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const calculate = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (size.width !== width || size.height !== height) {
      setSize({
        width,
        height,
      });
    }
  };

  useMount(() => {
    calculate();
    window.addEventListener('resize', () => {
      calculate();
    });
  });

  return { size };
};

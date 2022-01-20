import { useState } from 'react';
import { useMount } from '../src/useMount';

export const UseMountExample = () => {
  const [mounted, setMounted] = useState(false);

  useMount(() => {
    setMounted(true);
  });
  return mounted ? 'Mounted' : 'Not Mounted';
};

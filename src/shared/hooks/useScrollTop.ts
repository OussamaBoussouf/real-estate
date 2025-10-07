import { useEffect } from 'react';


export const useScrollTop = (deps: any[] = []) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, deps);
};

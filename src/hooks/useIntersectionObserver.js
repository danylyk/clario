import { useEffect, useMemo, useRef } from 'react';

export function useIntersectionObserver(callback, options) {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      callback(entries);
    }, options);

    observerRef.current = observer;

    return () => {
      observer.disconnect();
    };
  }, []);

  return useMemo(() => ({
    observe: (target) => {
      if (observerRef.current) {
        observerRef.current.observe(target);
      }
    },
    unobserve: (target) => {
      if (observerRef.current) {
        observerRef.current.unobserve(target);
      }
    },
  }), []);
}

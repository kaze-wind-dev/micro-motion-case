import { useEffect } from "react";

interface ObserverOptions {
  threshold?: number;
  rootMargin?: string;
}

interface UseInviewProps<T extends HTMLElement> {
  ref: React.RefObject<T | null>;
  setInview: (inview: boolean) => void;
  options?: ObserverOptions;
  once?: boolean;
}

const defaultOptions = {
  threshold: 0,
  rootMargin: "0px 0px 0px 0px"
} as ObserverOptions

export const useInview = <T extends HTMLElement>({
  ref,
  setInview,
  options = defaultOptions,
  once = true,
}: UseInviewProps<T>) => {
  useEffect(() => {
    const target = ref.current;
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (once) {
        if (entry.isIntersecting) {
          observer.disconnect();
          setInview(true);
        }
      } else {
        setInview(entry.isIntersecting);
      }
    },options);
    observer.observe(target);
    return () => observer.disconnect();
  }, [ref, setInview, options, once]);
};

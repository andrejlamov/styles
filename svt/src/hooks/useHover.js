import { useState, useRef, useEffect } from "react";

export default function useHover() {
  const [isHover, setHover] = useState(false);
  const ref = useRef(null);

  const mouseOver = () => setHover(true);
  const mouseOut = () => setHover(false);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      el.addEventListener("mouseover", mouseOver);
      el.addEventListener("mouseout", mouseOut);
      return () => {
        el.removeEventListener("mouseover", mouseOver);
        el.removeEventListener("mouseout", mouseOut);
      };
    }
  }, [ref.current]);
  return [ref, isHover];
}

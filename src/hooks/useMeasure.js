import { useLayoutEffect, useState, useRef } from 'react';
const useMeasure = deps => {
  const [rect, setRect] = useState({});
  const localRef = useRef();

  useLayoutEffect(() => {
    setRect(localRef.current.getBoundingClientRect());
  }, deps);

  return [rect, localRef];
};

export default useMeasure;

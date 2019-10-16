import { useLayoutEffect, useState, useRef } from 'react';
const useMeasure = deps => {
  const [rect, setRect] = useState({});
  const localRef = useRef();
  
  // Get sone information from DOM nodes
  // When all the effects have been performed
  useLayoutEffect(() => {
    setRect(localRef.current.getBoundingClientRect());
  }, [deps]);

  return [rect, localRef];
};

export default useMeasure;

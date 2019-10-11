import { useRef } from 'react';

const useCountRenders = (el) => {
  const renders = useRef(0);
  console.log(`renders element${el}`, renders.current++);
};
export default useCountRenders;

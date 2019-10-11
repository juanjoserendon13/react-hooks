import React, { useRef, useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const Child = () => {
  const renders = useRef(0);
  // console.log('renders:', renders.current++);

  const [count, setCount] = useState(() => {
    // This way calling a function in a useState is a lazy initial state
    // When there is a complex computation process
    // This will be called just once and return the initial state
    const local = JSON.parse(localStorage.getItem('count'));
    return local ? local : 0;
  });
  const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
    // This values is a dependency array, every it changes
    // the useEffect will be called again
  }, [count]);

  return (
    <div>
      <div>{!data ? 'Loading...' : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
};

export default Child;

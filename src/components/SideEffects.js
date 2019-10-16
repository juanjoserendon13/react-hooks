import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import useMeasure from '../hooks/useMeasure';

const Child = () => {

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

  const [rect, divRef] = useMeasure(data);
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div ref={divRef}>{!data ? 'Loading...' : data}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
};

export default Child;

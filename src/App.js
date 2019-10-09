import React, { useState, useEffect } from 'react';

import useForm from './hooks/useForm';
import useFetch from './hooks/useFetch';

function App() {
  const [values, handleChange] = useForm({ email: "", password: "" });
  /* useEffect(() => {
    const onMouseMove = e => {
      console.log(e);
    }
    window.addEventListener('mousemove', onMouseMove);
    // This is a clean up return function, wich is called
    // when the component gets unmounted
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, []); */
  const [count, setCount] = useState(() => {
    // This way calling a function in a useState is a lazy initial state
    // When there is a complex computation process
    // This will be called just once and return the initial state
    const local = JSON.parse(localStorage.getItem('count'))
    return local ? local : 0;
  });
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
    // This values is a dependency array, every it changes
    // the useEffect will be called again
  }, [count]);

  return (
    <div className="App">
      <div>{!data ? 'Loading...' : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <input
        type="text"
        name="email"
        value={values.email}
        onChange={handleChange} />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange} />
    </div>
  );
}

export default App;

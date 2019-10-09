import React, { useState } from 'react';

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
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  console.log(data)
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

import React, { useState, useLayoutEffect, useRef } from 'react';
import Child from './components/Child';

import useForm from './hooks/useForm';
import useFetch from './hooks/useFetch';

function App() {
  const [values, handleChange] = useForm({ email: '', password: '' });
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

  const inputRef = useRef();
  const [showChild, setShowChild] = useState(true);

  // Get sone information from DOM nodes
  // When all the effects have been performed
  useLayoutEffect(() => {
    // console.log(inputRef.current.getBoundingClientRect());
  }, []);

  return (
    <div className="App">
      <button onClick={() => setShowChild(!showChild)}>toggle</button>
      {showChild && <Child />}
      <input
        ref={inputRef}
        type="text"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus
      </button>
    </div>
  );
}

export default App;

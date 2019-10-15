import React, { useState, useRef, useCallback, useMemo } from 'react';
import Child from './components/Child';
import Item from './components/Item';

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
  const [count, setCount] = useState(0);
  const { data } = useFetch('https://api.kanye.rest/ajzbc/kanye.rest/master/quotes.json')
  const items = [10, 20, 30];

  // Use callback to pass returned callback as a prop to child components
  // (avoiding function recreation) to use in events like onClick, onChange, etc.
  const increment = useCallback(
    n => {
      setCount(c => c + n);
    },
    [setCount]
  );

  const computeLongestWord = (sentence) => {
    console.log('computed');
    if (!sentence) {
      return [];
    }
    let longestWord = '';
    JSON.parse(sentence).quote.split(' ').forEach(w => {
      if (w.length > longestWord.length) {
        longestWord = w;
      }
    });
    return longestWord;
  };

  // Use memo for expensive calculations in the current component
  const longestWord = useMemo(() => computeLongestWord(data), [data]);

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
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus
      </button>
      <div>count useCallBack: {count}</div>
      {items.map(n => {
        return <Item increment={increment} n={n} key={n} />;
      })}
      <div>Computed sentence: {longestWord}</div>
    </div>
  );
}

export default App;

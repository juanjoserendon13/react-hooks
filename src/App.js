import React, { useState, useRef, useCallback } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SideEffects from './components/SideEffects';
import Item from './components/Item';
import ReducerSection from './components/ReducerSection';
import UseMemoSection from './components/UseMemoSection';

// Pages
import Home from './pages/Home';
import About from './pages/About';

import UserContext from './UserContext'

import useForm from './hooks/useForm';

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
  const items = [10, 20, 30];

  // Use callback to pass returned callback as a prop to child components
  // (avoiding function recreation) to use in events like onClick, onChange, etc.
  const increment = useCallback(
    n => {
      setCount(c => c + n);
    },
    [setCount]
  );

  const [context, setContext] = useState('context');

  return (
    <div className="App">
      <button onClick={() => setShowChild(!showChild)}>toggle</button>
      {showChild && <SideEffects />}
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
      <UseMemoSection />
      <ReducerSection />
      <Router>
        <div>
          <nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </nav>
          <UserContext.Provider value={{ context, setContext }}>
            <Route path="/" exact component={Home} />
            <Route path="/about/" exact component={About} />
          </UserContext.Provider>
        </div>
      </Router>
    </div>
  );
}

export default App;

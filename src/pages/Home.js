import React, { useContext } from 'react';
import UserContext from '../UserContext';
import login from '../lib/login';

const Home = () => {
  const { context, setContext } = useContext(UserContext);
  console.log('rendered home');
  return (
    <div>
      <h2>Home</h2>
      <pre>{JSON.stringify(context, null, 2)}</pre>
      {context
        ? <button onClick={() => setContext(null)}>Logout</button>
        : <button onClick={async (e) => {
          const user = await login();
          setContext(user);
        }
        }>Login</button>}

    </div>
  )
}

export default Home;

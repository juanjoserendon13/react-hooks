import React, { useContext } from 'react';
import UserContext from '../UserContext';

const Home = () => {
  const { context, setContext } = useContext(UserContext);
  return (
    <div>
      <h2>Home</h2>
      <p>{context}</p>
    </div>
  )
}

export default Home;

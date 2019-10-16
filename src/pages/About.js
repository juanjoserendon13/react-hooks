import React, { useContext } from 'react';
import UserContext from '../UserContext';

const About = () => {
  const { context, setContext } = useContext(UserContext);
  return (
    <div>
      <h2>About</h2>
      <pre>{JSON.stringify(context, null, 2)}</pre>
    </div>
  )
}

export default About;

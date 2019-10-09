import React, { useState } from 'react';

import useForm from './hooks/useForm';

function App() {
  const [values, handleChange] = useForm({ email: "", password: "" });
  return (
    <div className="App">
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

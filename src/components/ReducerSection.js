import React, { useState, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD-TODO':
      return { ...state, todos: [...state.todos, { text: action.payload, completed: false }] };
    case 'TOGGLE-TODO':
      return { todos: state.todos.map((t, i) => i === action.payload ? { ...t, completed: !t.completed } : t) };
    default:
      return state;
  }
}

const ReducerSection = () => {
  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] });
  const [text, setText] = useState('');
  return (
    <div>
      <p>useReducer section</p>
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: 'ADD-TODO', payload: text })
        setText('');
      }}>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
      </form>
      {todos.map((t, i) =>
        <div key={t.text}
          onClick={() => dispatch({ type: 'TOGGLE-TODO', payload: i })}
          style={{ textDecoration: t.completed ? 'line-through' : '' }}>
          {t.text}
        </div>)}
    </div>
  )
}

export default ReducerSection

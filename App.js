import React, { useReducer } from 'react';

function appleReducer(state = 3, action) {
  switch (action.type) {
    case 'ADD_APPLE':
      return state + 1;
    case 'EAT_APPLE':
      return state - 1;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(appleReducer, 3);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: 'darkorange' }}>APPLE Counter</h1>
      <p style={{color: 'bule' }}> Number of APPLES: {state}</p>
      <button
        onClick={() => dispatch({ type: 'ADD_APPLE' })}
        style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '10px 20px',
          margin: '10px',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
        }}
      >
        ADD APPLE
      </button>
      <button
        onClick={() => dispatch({ type: 'EAT_APPLE' })}
        style={{
          backgroundColor: 'green',
          color: 'black',
          padding: '10px 20px',
          margin: '10px',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
        }}
      >
        EAT APPLE
      </button>
    </div>
  );
}

export default App;
import React from 'react';
import Greeting from './Greeting';

function App() {
  const isLoggedIn = true;

  return (
    <div className="App">
      <Greeting isLoggedIn={isLoggedIn} />
      <FruitList />
    </div>
  );
}

const FruitList = () => {
  const fruits = ['apple', 'cherry', 'orange'];

  return (
    <div>
      <h1>Fruits List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

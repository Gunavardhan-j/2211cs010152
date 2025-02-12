import React, { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

const Parent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(c => c + 1);
  };

  return (
    <div>
      <ChildA />
      <ChildB count={count} increment={increment} />
    </div>
  );
};

export default Parent;

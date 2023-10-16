import { useState } from 'react';

const Test = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const decrement = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  };

  return (
    <div className='counter'>
      <button
        type='button'
        className='counter-button'
        onClick={increment}
      >
        +
      </button>
      <div className='counter-number'>{count}</div>
      <button
        type='button'
        className='counter-button'
        onClick={decrement}
      >
        -
      </button>
    </div>
  );
};

export default Test;

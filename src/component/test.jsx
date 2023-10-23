import { useState } from 'react';
import Count from './count';

const Test = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  };

  const decrement = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  console.log('render Test');

  return (
    <div className='counter'>
      <button
        type='button'
        className='counter-button'
        onClick={increment}
      >
        -
      </button>
      <Count number={count} />
      <button
        type='button'
        className='counter-button'
        onClick={decrement}
      >
        +
      </button>
    </div>
  );
};

export default Test;

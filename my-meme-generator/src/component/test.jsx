import { useState } from 'react';
import Count from './count';

const Test = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const minus = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className='counter'>
      <button
        className='counter-minus'
        onClick={minus}
      >
        -
      </button>
      <Count number={count} />
      <button
        onClick={plus}
        className='counter-plus'
      >
        +
      </button>
    </div>
  );
};

export default Test;

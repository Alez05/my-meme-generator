import { useState } from 'react';
import WindowTracker from './windowtraker';

const Api = () => {
  const [show, setShow] = useState(true);

  const handleEvent = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div>
      <button onClick={handleEvent}>Toggle window tracker</button>
      {show && <WindowTracker />}
    </div>
  );
};

export default Api;

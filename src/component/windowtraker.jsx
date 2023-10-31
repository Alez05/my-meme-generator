import { useEffect, useState } from 'react';

const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWidth() {
      console.log('window resized');
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', watchWidth);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', watchWidth);
    };
  }, []);

  return <h1>Window width: {windowWidth} </h1>;
};

export default WindowTracker;

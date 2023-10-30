import { useEffect, useState } from 'react';

const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', function () {
      console.log('window resized');
      setWindowWidth(window.innerWidth);

      return () => {
        this.window.removeEventListener('resive', () => {
          console.log('window unmounted');
        });
      };
    });
  }, []);

  return <h1>Window width: {windowWidth} </h1>;
};

export default WindowTracker;

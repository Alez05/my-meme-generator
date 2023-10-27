import { useState } from 'react';

const Api = () => {
  const [starData, setStarData] = useState();

  // fetch('https://swapi.dev/api/starships/')
  //   .then((res) => res.json())
  //   .then((data) => setStarData(data));

  return (
    <div>
      <pre>{JSON.stringify(starData, null, 2)}</pre>
    </div>
  );
};

export default Api;

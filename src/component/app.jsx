import Header from './header';
import Meme from './meme';
// import Test from './test';
// import SignUp from './signup';
const App = () => {
  return (
    <>
      <Header />
      <Meme />
      {/* <Test /> */}
      {/* <SignUp /> */}
    </>
  );
};

export default App;

// import { useState } from 'react';
// import boxes from './boxes';
// import { Box } from './box';

// const App = () => {
//   const [squares, setSquares] = useState(boxes);

//   const toggle = (id) => {
//     setSquares((prevSquare) => {
//       return prevSquare.map((square) => {
//         return square.id === id ? { ...square, on: !square.on } : square;
//       });
//     });
//   };

//   const squareElements = squares.map((square) => (
//     <Box
//       key={square.id}
//       on={square.on}
//       handleClick={() => toggle(square.id)}
//     />
//   ));

//   return <>{squareElements}</>;
// };

// export default App;

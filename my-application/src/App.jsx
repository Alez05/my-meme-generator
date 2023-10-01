import { useState } from 'react';

// make the state logic reusable
const useToggle = () => {
  const [isOn, setIsOn] = useState(true);

  const click = () => {
    setIsOn((s) => !s);
  };

  return [isOn, click];
};

const getLabelAndStyle = (bool) => {
  const label = bool ? 'ON' : 'OFF';
  const color = bool ? 'blue' : 'red';
  const style = { cursor: 'pointer', color };

  return { label, style };
};

const Toggle = () => {
  const [isOn, click] = useToggle();

  const { style,  label} = getLabelAndStyle(isOn);

  return (
    <button
      style={style}
      onClick={click}
    >
      {label}
    </button>
  );
};

export default Toggle;

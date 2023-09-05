const Text = ({ color, fontSize, elementType, text }) => {
  const textStyle = {
    color: color || 'black',
    fontSize: fontSize || '1rem',
  };

  const TElement = elementType || 'p';

  return <TElement style={textStyle}>{text}</TElement>;
};

export default Text;

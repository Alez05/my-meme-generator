import { SText } from './text.style';
import { TText } from './text.type';

const Text = ({ elementType, text }) => {
  const elementComponents = {
    p: 'p',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
  };
  const TElement = elementComponents[elementType] || 'p';

  return (
    <SText>
      <TElement>{text}</TElement>
    </SText>
  );
};

Text.propTypes = TText;

export default Text;

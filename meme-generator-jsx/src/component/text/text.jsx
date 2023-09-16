import { SH1, SH2, SH3, SP, SText } from './text.style';
import { TText } from './text.type';

const Text = ({ elementType, text, lineheight, weight, color, fontSize }) => {
  const elementComponents = {
    p: SP, // 'p' is the default
    h1: SH1,
    h2: SH2,
    h3: SH3,
  };

  const TElement = elementComponents[elementType] || SP;

  return (
    <SText>
      <TElement
        color={color}
        weight={weight}
        fontSize={fontSize}
        lineheight={lineheight}
      >
        {text}
      </TElement>
    </SText>
  );
};

Text.propTypes = TText;

export default Text;

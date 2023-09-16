import { SBox, SBoxContainer } from './box.style';
import { TBox } from './box.type';

const Box = ({ children }) => {
  return (
    <SBox>
      <SBoxContainer>{children}</SBoxContainer>
    </SBox>
  );
};

Box.propTypes = TBox;

export default Box;

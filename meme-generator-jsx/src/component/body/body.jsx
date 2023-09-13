import { SBody, SBodyContainer } from './body.style';
import { TBody } from './body.type';

const Body = ({ children }) => {
  return (
    <SBody>
      <SBodyContainer>{children}</SBodyContainer>
    </SBody>
  );
};

Body.propTypes = TBody;

export default Body;

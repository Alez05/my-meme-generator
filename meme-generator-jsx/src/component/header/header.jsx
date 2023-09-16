import {
  SHeader,
  SHeaderContainer,
  SIconContainer,
  SImg,
} from './header.style';
import { THeader } from './header.type';

import trollface from '../../assets/images/trollface.png';

const Header = ({ children }) => {
  return (
    <SHeader>
      <SHeaderContainer>
        <SIconContainer>
          <SImg
            src={trollface}
            alt='troll face'
          />{' '}
        </SIconContainer>
        {children}
      </SHeaderContainer>
    </SHeader>
  );
};

Header.propTypes = THeader;

export default Header;

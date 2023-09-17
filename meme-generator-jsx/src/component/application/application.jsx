import { BInput } from '..';
import { Box } from '../box';
import { Global } from '../global';
import { Header } from '../header';
import Text from '../text/text';

const MyApp = () => {
  return (
    <>
      <Box>
        <Global />
        <Header>
          <Text
            text='Meme Generator'
            elementType={'h1'}
          />
        </Header>
        <BInput />
      </Box>
    </>
  );
};

export default MyApp;

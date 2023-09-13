import { Body } from '../body';
import Text from '../text/text';

const MyApp = () => {
  return (
    <Body>
      <h1>muist 1</h1>
      <h1>muist 2</h1>
      <Text
        text='ceva frumos '
        elementType={'h1'}
      />
    </Body>
  );
};

export default MyApp;

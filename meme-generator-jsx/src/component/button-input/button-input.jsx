import {
  SButton,
  SInput,
  SInputContainer,
  SInputForm,
  SText,
} from './button-input.style';

const BInput = () => {
  return (
    <SInputContainer>
      <SInputForm>
        <SInput
          type='text'
          placeholder='First Text'
        />
        <SInput
          type='text'
          placeholder='Second Text'
        />
        <SButton>
          <SText>Get a new meme image 🖼</SText>
        </SButton>
      </SInputForm>
    </SInputContainer>
  );
};

export default BInput;

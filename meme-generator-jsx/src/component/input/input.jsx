import { SInput, SInputContainer, SInputForm } from './input.style';

const Input = () => {
  return (
    <SInputContainer>
      <SInputForm>
        <SInput type='text' />
        <SInput type='text' />
      </SInputForm>
    </SInputContainer>
  );
};

export default Input;

import { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    isChecked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    return setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === '') {
      console.log('please enter an email');
    } else {
      console.log('email is valid');
    }
    if (formData.password === formData.confirmPassword) {
      console.log('Passwords Match');
    } else {
      console.log('Passowrd do not match');
    }

    if (formData.password.length < 8) {
      console.log('password must be at least 8 characters');
    } 

    if (formData.isChecked) {
      console.log('user wants to join the newsletter');
    } else {
      console.log('user does not want to join the news letter');
    }
  };

  return (
    <div className='form-container'>
      <form
        className='form__holder'
        onSubmit={handleSubmit}
      >
        <input
          type='email'
          placeholder='email adress'
          className='form__email'
          name='email'
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type='password'
          placeholder='password'
          className='form__password'
          name='password'
          onChange={handleChange}
          value={formData.passowrd}
        />
        <input
          type='password'
          placeholder='confirm password'
          className='form__confirm'
          name='confirmPassword'
          onChange={handleChange}
          value={formData.confirmPassword}
        />
        <div className='form__marketing'>
          <input
            type='checkbox'
            className='form__checkbox'
            id='isChecked'
            name='isChecked'
            onChange={handleChange}
            checked={formData.isChecked}
          />
          <label
            htmlFor='isChecked'
            className='form__label'
          >
            I want to join the newsletter
          </label>
        </div>

        <button className='form__button'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

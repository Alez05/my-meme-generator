// import { useState } from 'react';
// import Count from './count';

import { useState } from 'react';

// const Test = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount((prevCount) => {
//       return prevCount - 1;
//     });
//   };

//   const decrement = () => {
//     setCount((prevCount) => {
//       return prevCount + 1;
//     });
//   };

//   console.log('render Test');

//   return (
//     <div className='counter'>
//       <button
//         type='button'
//         className='counter-button'
//         onClick={increment}
//       >
//         -
//       </button>
//       <Count number={count} />
//       <button
//         type='button'
//         className='counter-button'
//         onClick={decrement}
//       >
//         +
//       </button>
//     </div>
//   );
// };

// export default Test;

// export default function Test() {
//   const [messages, setMessages] = useState(['a']);

//   return (
//     <div>
//       {messages.length === 0 ? (
//         <h1>You are all caught up!</h1>
//       ) : (
//         <h1>
//           You have {messages.length} unread{' '}
//           {messages.length > 1 ? 'messages' : 'message'}
//         </h1>
//       )}
//     </div>
//   );
// }

export default function Test() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
    isChecked: false,
    employmentStatus: '',
    favColor: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  // console.log(formData.favColor);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='First Name'
        onChange={handleChange}
        name='firstName'
        value={formData.firstName}
      />
      <br />
      <input
        type='text'
        placeholder='Last Name'
        onChange={handleChange}
        name='lastName'
        value={formData.lastName}
      />
      <br />
      <input
        type='email'
        placeholder='Email'
        onChange={handleChange}
        name='email'
        value={formData.email}
      />
      <br />
      <textarea
        value={formData.comments}
        placeholder='Comments'
        onChange={handleChange}
        name='comments'
      />
      <br />
      <input
        type='checkbox'
        id='isChecked'
        name='isChecked'
        checked={formData.isChecked}
        onChange={handleChange}
      />
      <label htmlFor='isChecked'>Are you Alex?</label>
      <br />
      <br />
      <fieldset>
        <legend>Current Employment Status</legend>

        <input
          type='radio'
          id='unemployed'
          name='employmentStatus'
          value='unemployed'
          onChange={handleChange}
          checked={formData.employmentStatus === 'unemployed'}
        />
        <label htmlFor='unemployed'>Unemployed</label>
        <br />
        <input
          type='radio'
          id='part-time'
          name='employmentStatus'
          value='part-time'
          onChange={handleChange}
          checked={formData.employmentStatus === 'part-time'}
        />
        <label htmlFor='part-time'>Part-Time</label>
        <br />
        <input
          type='radio'
          id='full-time'
          name='employmentStatus'
          value='full-time'
          onChange={handleChange}
          checked={formData.employmentStatus === 'full-time'}
        />
        <label htmlFor='full-time'>FullTime</label>
      </fieldset>
      <br />
      <label htmlFor='favColor'> Whats your favourite color? </label>
      <br />
      <select
        id='favColor'
        value={formData.favColor}
        onChange={handleChange}
        name='favColor'
      >
        <option value=''>--- Choose ---</option>
        <option value='blue'>Blue</option>
        <option value='green'>Green</option>
        <option value='yellow'>Yellow</option>
        <option value='brown'>Brown</option>
      </select>
      <br />
      <button>Submit</button>
    </form>
  );
}

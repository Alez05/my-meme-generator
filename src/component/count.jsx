import PropTypes from 'prop-types';

const Count = ({ number }) => {
  console.log('render Count');
  return <div className='counter-number'>{number}</div>;
};

Count.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Count;

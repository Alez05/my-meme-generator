export const Box = (props) => {
  const styles = {
    backgroundColor: props.on ? 'blue' : 'pink',
  };

  return (
    <div
      className='thebox'
      style={styles}
      onClick={props.handleClick} // Use props.handleClick to call the toggle function
    ></div>
  );
};

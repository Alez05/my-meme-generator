const Header = () => {
  const handleOnMouseOver = () => {
    // console.log('Hovered over the header');
  };
  return (
    <header className='header'>
      <img
        onMouseOver={handleOnMouseOver}
        src='http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png'
        alt='troll face'
        className='header--img'
      />
      <h2 className='header--title'>Meme Generator</h2>
    </header>
  );
};

export default Header;

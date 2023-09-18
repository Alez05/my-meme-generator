import { useState } from 'react';
import memedata from '../data/memedata';

const Meme = () => {
  // const [memeImage, setMemeImage] = useState('');

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImg: 'https://i.imgflip.com/1h7in3.jpg',
  });

  const [allMemeImage, setAllMemeImage] = useState(memedata);

  const getMemeImage = () => {
    const memeArray = allMemeImage.data.memes;
    const randomIndex = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomIndex].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImg: url,
      };
    });
  };
  return (
    <main className='main'>
      <form className='form'>
        <input
          className='form--input'
          type='text'
          placeholder='Top Text'
        ></input>
        <input
          className='form--input'
          type='text'
          placeholder='Bottom Text'
        ></input>
        <button
          type='button'
          className='form--button'
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </form>
      <img
        src={meme.randomImg}
        className='meme--img'
      />
    </main>
  );
};

export default Meme;

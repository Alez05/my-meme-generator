import { useState } from 'react';
import memedata from '../data/memedata';

const Meme = () => {
  // const [memeImage, setMemeImage] = useState('');

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImg: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  const getMemeImage = () => {
    const memeArray = memedata.data.memes;
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
          name='topText'
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className='form--input'
          type='text'
          placeholder='Bottom Text'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button
          type='button'
          className='form--button'
          onClick={getMemeImage}
        >
          Get a new meme image 🖼
        </button>
      </form>
      <div className='meme'>
        <img
          src={meme.randomImg}
          className='meme--img'
        />
        <h2 className='text__top'>{meme.topText}</h2>
        <h2 className='text__bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;

import { useEffect, useState } from 'react';

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImg: '',
  });
  const [allMeme, setAllMeme] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.imgflip.com/get_memes');
      const data = await res.json();
      setAllMeme(data.data.memes);
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  const getMemeImage = () => {
    const randomIndex = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[randomIndex].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImg: url,
    }));
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
          alt='Random Meme'
        />
        <h2 className='text__top'>{meme.topText}</h2>
        <h2 className='text__bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;

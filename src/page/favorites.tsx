import React, { useEffect, useState } from 'react'
import { GifState } from '../context/gif-context';
import { Gif } from '../components/gif';

const Favorites = () => {

  const [favoritesGIFs, setFavoritesGIFs] = useState([]);
  const {gf, favorites} = GifState();

  const fetchFavoritesGIFs = async () =>{
    const {data: gifs} = await gf.gifs(favorites);
    setFavoritesGIFs(gifs);
   };

   useEffect(()=>{
    fetchFavoritesGIFs();
   }, []);
  

  return (
    <div className='mt-2'>
      <span className='faded-text'>My Favorite</span>
      <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2 mt-2'>
        {favoritesGIFs.map((gif)=>(
          <Gif gif={gif} key={gif} />
        ))}
      </div>
    </div>
  )
}

export default Favorites
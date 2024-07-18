import { useEffect, useState } from "react";
import { GifState } from "../context/gif-context";
import { Gif } from "../components/gif";
import React from "react";
import { FilterGif } from "../components/filter-gif";

function Home() {
  const { gf,  filter } = GifState();
  const [gifs, setGifs] = useState([]);

  const fetchTrendingGIFs = async () => {
    const {data: gifs} = await gf.trending({
      limit: 20,
      type: filter,
      rating: "g",
    });
    setGifs(gifs);
  };

  useEffect(() => {
    fetchTrendingGIFs();
  }, [filter]);

  return (
    <div className="">
      <img
        src="/banner.png"
        alt="earth banner"
        className="mt-2 rounded w-full"
      />

      <FilterGif showTrending />

      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {gifs.map((gif:any) => (
          <Gif gif={gif} key={gif.id}/>
        ))}
      </div>
    </div>
  );
}

export default Home;  
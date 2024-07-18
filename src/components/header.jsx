import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { GifState } from '../context/gif-context';
import {GifSearch} from '../components/gif-serach'

export const Header = () => {
    const [categories, setcategories] = useState([]);
    const [showcategories, setshowcategoies] = useState(false);

    const {gf, favorites } = GifState();

    const fetchGifCategories = async () => {
        const {res} = await ("/categories.json");
        const { data } = await gf.categories();
        setcategories(data);
    };

    useEffect(() => {
        fetchGifCategories();
    }, []);

    return <nav>
        <div className='relative flex gap-4 justify-between item-center mb-2'>
            <Link to={"/"} className='flex gap-2 '>
                <img src="/logo.png" className='w-8' alt="" />
                <h1 className="text-5xl font-bold tracking-tight cursor-pointer" >GIPHY</h1>
            </Link>

            {/* render categories */}
            <div className='font-bold text-md flex gap2 items-center'>
            {categories?.slice(0, 5)?.map((category) => {
                return (
                    <Link 
                        className='px-4 transition ease-in-out py-1 hover:gradient border-b-4 hidden lg:block'
                        key={category.name}
                        to={`/${category.name_encoded}`}
                    >
                        {category.name}
                    </Link>
                );
            })}

            <button onClick={() => setshowcategoies(!showcategories)} >
                <HiEllipsisVertical size={35} className={` hover:gradient ${showcategories ? "gradient" : ""} border-b-4 cursor-pointer hidden lg:block`} />
            </button>

            
            {favorites?.length > 0 && (
            <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
              <Link to="/favorites">Favorite GIFs</Link>
            </div>
          )}
          

            <button>
                <HiMiniBars3BottomRight className='text-sky-400 block lg:hidden' size={30} />
            </button>
            </div>
            {showcategories && (
                <div className='absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20'>
                    <span className='text-3xl font-extrabold'>Categories</span>
                    <hr className='bg-gray-100 opacity-50 my-5'/>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-col-4 lg:grid-col-5 xl:grid-col-6 gap-4">

                        {categories?.map((category) => {
                        return ( 
                        <Link 
                            onClick={()=> setshowcategoies(false)}
                            className='transition ease-in-out font-bold'
                            key={category.name}
                            to={`/${categories.name_encoded}`}
                        >
                        {category.name}
                        </Link>
                            );
                        })};
                    </div>
                </div>)}
        </div>

        {/* searching */}
        <GifSearch />
    </nav>;
}

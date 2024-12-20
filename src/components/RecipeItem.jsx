import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { GlobalContex } from '../Context/GlobalState';

export const RecipeItem = ({ item }) => {
  const { HandleFavouriteItem, FavouriteList } = useContext(GlobalContex);

  // Check if the item is in the favorites list
  const isFavorite = FavouriteList && FavouriteList.findIndex(content => content.id === item.id) !== -1;

  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white shadow-lg gap-4 rounded-2xl border border-gray-200 transform transition duration-500 hover:scale-105">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.image_url} alt="recipe item" className="block w-full object-cover rounded-xl" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-cyan-700 font-medium">
          {item?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-gray-800">
          {item?.title}
        </h3>
        <div className='flex flex-row justify-between items-center mt-4'>
          <NavLink
            to={`/recipe-item/${item?.id}`}
            className="text-sm p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 transition duration-300"
          >
            Recipe Details
          </NavLink>
          <button onClick={() => HandleFavouriteItem(item)} className="focus:outline-none">
            {isFavorite ? (
              <FaHeart className='text-red-500 text-2xl transition duration-300 transform hover:scale-125' />
            ) : (
              <FaRegHeart className='text-gray-500 text-2xl transition duration-300 transform hover:scale-125' />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
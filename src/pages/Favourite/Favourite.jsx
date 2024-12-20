import React from 'react'
import { useContext } from 'react'
import { GlobalContex } from '../../Context/GlobalState'
import { RecipeItem } from '../../components/RecipeItem'

export const Favourite = () => {
  const { FavouriteList } = useContext(GlobalContex);


  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {FavouriteList && FavouriteList.length > 0 ? (
        FavouriteList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing Added to Favorite List...
          </p>
        </div>
      )}
    </div>
  );
}

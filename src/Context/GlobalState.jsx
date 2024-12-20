import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const GlobalContex = createContext(null)



export const GlobalState = ({ children }) => {


    const [searchParam, setSearchParam] = useState('')
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDeatailsData, setRecipeDetailsData] = useState(null);
    const [FavouriteList, setFavouriteList] = useState([]);

    const HandleFavouriteItem = (content) => {
        console.log(content, 'recepi fac item');
        let copyFavoriteList = [...FavouriteList];
        const index = copyFavoriteList.findIndex(item => item.id == content.id)
        if (index === -1) {
            copyFavoriteList.push(content)
        }
        else {
            copyFavoriteList.splice(index, 1)
        }
        setFavouriteList(copyFavoriteList)
    }

    console.log(FavouriteList, 'favoritesList');

    async function HandleSubmit(event) {
        event.preventDefault();
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
            const data = await res.json();
            console.log(data);
            if (data?.data?.recipes) {
                setRecipeList(data?.data?.recipes);
            }
            setLoading(false);
            setSearchParam("");

        } catch (error) {
            console.log(error);
            setLoading(false);
            setSearchParam("");
        }

    }

    return (
        <GlobalContex.Provider value={{ searchParam, setSearchParam, HandleSubmit, loading, recipeList, recipeDeatailsData, setRecipeDetailsData, HandleFavouriteItem, FavouriteList }}>
            {children}
        </GlobalContex.Provider>
    )
}

import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContex } from '../Context/GlobalState'

export const Navbar = () => {
    const {searchParam,setSearchParam,HandleSubmit}=useContext(GlobalContex)
    const handleSearch=(e)=>{
        setSearchParam(e.target.value);
        console.log(searchParam)
    }
    return (
        <div className='rounded-2xl flex justify-between items-center py-6 mx-auto container bg-orange-700 flex-col lg:flex-row gap-5 lg-0'>
            <h1 className='text-2xl mx-4 font-semibold'><NavLink to={"/"}>Food Recipe</NavLink></h1>
            <form onSubmit={HandleSubmit}>
                <input
                    className='bg-white/75 p-3 text-black px-8 lg:px-16 rounded-full outline-dashed outline-black shadow-lg
             shadow-rose-950 '
                    type="text" name="search" value={searchParam} onChange={handleSearch} placeholder='Enter Items....' />
            </form>
            <ul className='flex mx-2 gap-8'>
                <li><NavLink to={"/"} className=" text-black hover:text-gray-800">Home</NavLink></li>
                <li><NavLink to={"/fav"} className="text-black hover:text-gray-800">Favourites</NavLink></li>
               
            </ul>
        </div>
    )
}

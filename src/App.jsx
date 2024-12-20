import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { Favourite } from './pages/Favourite/Favourite'
import { Details } from './pages/Details/RecipeDetails'
import { ErrorPage } from './pages/ErrorPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen p-6 rounded-sm bg-slate-500 text-white text-lg'>
        <Navbar />
        <Routes>
          <Route
            path='/Food-Recipe-Using-React'
            element={
              <Home />
            }
          />
          <Route path='/fav' element={<Favourite />} />
          <Route
            path='/recipe-item/:id'
            element={
              <Details />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>

    </>
  )
}

export default App

import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar'
import Home from './pages/home';
import WatchList from './pages/watchlist';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/> 
      <div className="bg-slate-900 w-full h-screen mt-3"></div>
      <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/watchlist' element={<WatchList/>}/>
      </Routes>
    </main>
    </div>
  )
}

export default App

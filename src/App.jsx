import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <div className='min-h-[calc(100vh-136px)]'>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>


    </div>
  )
}

export default App

import { Route , Routes } from 'react-router-dom'
import Home from "../src/pages/home"
import Chat from "../src/pages/chat"
import './App.css'


function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/chat' element={<Chat/>}/>
     </Routes>
    </>
  )
}

export default App

import Login from './components/Login';
import Signup from './components/Signup'
import Upload from './components/Upload';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from './components/Protected';

function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-slate-400'>
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/upload' element={<Protected/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App

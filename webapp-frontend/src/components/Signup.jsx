import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const [data,setData] = useState({});
  const [error,setError] = useState('');
  const submitHandler = async (e) =>{
    e.preventDefault(); //whyy
    console.log(data);
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/signup`,data);
    console.log(response);
    } catch (error) {
      console.log(error);
    }
    setData({});
    
  }
  return (
    <div  className=" bg-green-300 items-center flex flex-col">
     <h3 className='text-center text-xl'>Sign Up</h3>
     <div className='grid grid-cols-1'>
      <form onSubmit={submitHandler}>
        <input className='m-2 p-2 grid grid-rows-1' type="email" required placeholder='enter email' onChange ={(e)=>{
          setData({...data,email:e.target.value});
        }}/>
        <input className='m-2 p-2 grid grid-rows-1' type="password" required placeholder='enter password' onChange ={(e)=>{
          setData({...data,password:e.target.value});
        }}/>
        <input className='m-2 p-2 grid grid-rows-1' type="password" required placeholder='re-enter password'/>
        <button className='rounded-lg border-2 border-rose-500 bg-red-400 justify-center' type='submit'>Sign Up</button>
      </form>
      </div>
      <p>Already have an account? <Link to='/'><u>Log In</u></Link></p>
    </div>
  )
}

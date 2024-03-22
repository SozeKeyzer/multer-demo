import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Login() {
    const [data,setData] = useState({});
    const nevigate = useNavigate();
    const submitHandler = async (e)=>{
        e.preventDefault();
        const response = await axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/login`,data);
        const res = response.data;
        if(res.token){
            window.localStorage.setItem('token',res.token);
            nevigate('/upload');
        }
        setData({});
    }
  return (
    <div className=" bg-green-300 items-center">
        <h3 className='text-center text-xl'>Log In</h3>
        <div className='grid grid-cols-1'>
       <form onSubmit={submitHandler} >
       <input className='m-2 p-2 grid grid-rows-1' type="email" required placeholder='enter email' onChange ={(e)=>{
          setData({...data,email:e.target.value});
        }}/>
        <input className='m-2 p-2 grid grid-rows-1' type="password" required placeholder='enter password' onChange ={(e)=>{
          setData({...data,password:e.target.value});
        }}/>
        <button  className='rounded-lg border-2 border-rose-500 bg-red-400' type='submit'>Log In</button>
      </form> 
      </div>
      <p>Don't have an account? <Link to='/signup'><u>Sign Up</u></Link></p>
    </div>
  )
}

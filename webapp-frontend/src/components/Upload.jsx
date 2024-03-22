import React,{useState} from 'react'
import axios from 'axios';

export default function Upload() {
    const [file,setFile] = useState(null);
    const submitHandler = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('image',file);
        const response = await axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/upload`,formData,
        {
            headers: {
              'Content-Type': 'multipart/form-data',
              'authorization' : `Bearer ${window.localStorage.getItem('token')}`
            }
          });
    }
  return (
    <div  className=" bg-green-300 items-center flex flex-col">
      <h3 className='text-center text-xl'>Upload Image</h3>
      <div className='grid grid-cols-1'>
    <form onSubmit={submitHandler}>
        <input className='m-2 p-2 grid grid-rows-1'
          onChange={(e)=>{
           setFile(e.target.files[0]);
          }} 
          type="file" 
          accept="image/*"
        ></input>
        <button className='rounded-lg border-2 border-rose-500 bg-red-400 self-center' type="submit">Upload</button>
      </form>
      </div>
      </div>
  )
}

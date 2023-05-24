
import { useEffect, useState } from 'react';
import './App.css';
import NavScrollExample from './Component/NavBar';
import axios from 'axios';
import Card from './Component/Card';

function App() {
  const [data,setData] =useState([]);
  useEffect(()=>{
    const fetch_data = async()=>{
      const response= await axios('https://fakestoreapi.com/products');
      // console.log(response.data);
      setData(response.data)
    }
    fetch_data()
    
 
  },[])
  return (
    <div className="App">
      <NavScrollExample/>
      <h1 className='text-light mt-3'>Welcome to fakeStoreApi 👋</h1>
    <hr className='text-white' />

    <div className="cardcontainer">
    {
      data.map((val)=>{
        return <Card pro_data={val} />
      })
    }
    </div>
    


    </div>
  );
}

export default App;
// promise: then, catch and <pending>
// wait for data 
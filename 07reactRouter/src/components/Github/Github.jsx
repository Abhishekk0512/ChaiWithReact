import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const[data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Abhishekk0512')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    // },[])
  return (
    <div className='bg-gray-600 text-center text-3xl text-white m-4 p-4 max-w-screen-xl'>Followers: {data.followers} 
    <img className='text-center' src={data.avatar_url} alt='Git Picture' width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async function(){
    const response = await fetch('https://api.github.com/users/Abhishekk0512')
    return response.json()
}
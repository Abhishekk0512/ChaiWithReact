import React, { useContext, useState } from 'react'
import UserContext from '../context/UserConext'

function Login() {

    const[username, setUserName] = useState(' ')
    const[password, setPassword] = useState(' ')
    
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username, password})
    }


  return (
    <div className='flex gap-4'>
        <input
        className='border border-black'
        type='text'
        placeholder='username'
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        />
         <input
         className='border border-black'
        type='text'
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button
        onClick={handleSubmit}
        >Submit</button>
    </div>
  )
}

export default Login
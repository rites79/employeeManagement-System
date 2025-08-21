
import React, { useState } from 'react'

const Login = ( {handleLogin}) => {

 
const [email, setEmail] = useState(' ')
const [password, setpassword] = useState('')

    const submitHandler=(e)=>{
      e.preventDefault()
     console.log("email is",email)
     console.log("password is",password)
     handleLogin(email,password)
     setEmail("")
    setpassword("")
    }
     

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>
         <input 
         value={email}
         onChange={(e)=>{
           setEmail(e.target.value)
         }}
         required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400'  type="email" placeholder='Enter Your email'    />
         <input 
         value={password}
         onChange={(e)=>{
           setpassword(e.target.value)
         }}
         required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 mt-4' type="password" placeholder='Enter Password' />
         <button className='mt-5 text-white  outline-none border-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white'>Login</button>
        </form>

        </div>
    </div>
  )
}

export default Login
 
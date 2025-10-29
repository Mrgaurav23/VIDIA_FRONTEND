import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='p-7 bg-black w-full h-screen' >
      <img className='w-22' src="src/assets/vidia-logo.png" alt="" />
        <form className='mb-5'>
            <h3 className='text-xl font-medium mb-2 text-white'>What's Your Email</h3>
            <input className='bg-[#eeeeee] mb-7 px-4 py-2 rounded border text-lg w-full placeholder:text-lg' required type="email" placeholder='email@example.com' />
            <h3 className='text-xl mb-2 font-medium text-white'>Password</h3>
            <input className=' bg-[#eeeeee] mb-7 px-4 py-2 rounded border text-lg w-full' required type="password" placeholder='password' />
            <Link to='/home' className='flex justify-center mb-7 px-4 py-2 w-full rounded border bg-[#C46630] text-black font-semibold'>Login</Link>
            <p className='text-center text-white'>New Here - <Link to='/Signup' className='text-blue-600 text-sm font-medium'>Create your Account</Link></p>
        </form>
    </div>
  )
}

export default Login
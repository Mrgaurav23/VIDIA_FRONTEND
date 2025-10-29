import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1534484374439-6b8cd79be97c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687)] h-screen pt-4 flex justify-between flex-col w-full'>
        <img className='w-22 ml-5' src="src/assets/vidia-logo.png" alt="" />
        <div className='bg-black pb-8 py-4 px-4'>
          <h2 className='text-[30px] text-white font-semibold'>Get Started with VIDIA</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-white text-black py-3 rounded-lg mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
import { Link } from "react-router-dom"

function Signup() {
  return (
    <div className='px-7 py-4 bg-black w-full  min-h-screen' >
      <img className='w-22' src="src/assets/vidia-logo.png" alt="" />
        <form className='mb-5 h-screen'>
            <h3 className='text-xl font-medium mb-2 text-white'>Fullname</h3>
            <input className='bg-[#eeeeee] mb-7 px-4 py-2 rounded border text-lg w-full placeholder:text-lg' required type="text" placeholder='Fullname' />
            <h3 className='text-xl font-medium mb-2 text-white'>username</h3>
            <input className='bg-[#eeeeee] mb-7 px-4 py-2 rounded border text-lg w-full placeholder:text-lg' required type="text" placeholder='username' />
            <h3 className='text-xl font-medium mb-2 text-white'>What's Your Email</h3>
            <input className='bg-[#eeeeee] mb-7 px-4 py-2 rounded border text-lg w-full placeholder:text-lg' required type="email" placeholder='email@example.com' />
            <h3 className='text-xl mb-2 font-medium text-white'>Password</h3>
            <input className=' bg-[#eeeeee] mb-7 px-4 py-2 rounded border text-lg w-full' required type="password" placeholder='password' />
            <h3 className='text-xl mb-2 font-medium text-white'>Avatar</h3>
            <input className=' bg-[#eeeeee] mb-7 px-4 py-2 rounded border text-lg w-full' required type="file" placeholder='upload avatar' />
            <h3 className='text-xl mb-2 font-medium text-white'>Cover Image</h3>
            <input className=' bg-[#eeeeee] mb-7 px-4 py-2 rounded border text-lg w-full' required type="file" placeholder='upload avatar' />
            <button className='mb-7 px-4 py-2 w-full rounded border bg-[#A897F2] text-black font-semibold'>Create Account</button>
            <p className=" text-white text-center text-lg font-medium">Already Account Exist's - <Link to='/login' className="text-blue-700">Login</Link></p>
        </form>
    </div>
  )
}

export default Signup
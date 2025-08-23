import React from 'react'
import { Link } from 'react-router'
import LoginWithGoogle from '../SocialLogin/LoginWithGoogle'

function Register() {
  return (
    <div className="w-full max-w-md p-8 space-y-3 ">
      <h1 className="text-3xl lg:text-4xl font-bold">Create an Account Profast</h1>
      <p className='pb-4 font-semibold'>Register with Profast</p>
      <form  className="space-y-4 lg:space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block dark:text-gray-600 font-semibold">Name</label>
          <input  type="text" name="name" id="name" placeholder="name" className="w-full px-4 py-3 rounded-md border border-gray-200 dark:text-gray-800 focus:dark:border-violet-600" />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-600 font-semibold">Email</label>
          <input  type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md border border-gray-200 dark:text-gray-800 focus:dark:border-violet-600" />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-600 font-semibold">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-gray-200 dark:text-gray-800 focus:dark:border-violet-600" />
        </div>
        
        <button type='submit' className="block w-full p-[10px] text-center rounded-sm font-semibold bg-[#CAEB66]">Sign up</button>
      </form>

      <p className="dark:text-gray-600 font-semibold">Already have an account? <Link to="/login" className='underline'>Login</Link></p>
      <div className="divider dark:text-gray-600 font-semibold mt-6">OR</div>
      <div>
        <LoginWithGoogle name={"Register"}></LoginWithGoogle>
      </div>
    </div>
  )
}

export default Register
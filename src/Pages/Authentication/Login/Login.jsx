import React from 'react'
import { Link } from 'react-router'
import LoginWithGoogle from '../SocialLogin/LoginWithGoogle'

function Login() {
  return (
    <div className="w-full max-w-md p-8 space-y-3 ">
      <h1 className="text-3xl lg:text-4xl font-bold">Welcome Back Profast</h1>
      <p className='pb-4 font-semibold'>Login with Profast</p>
      <form className="space-y-4 lg:space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-600 font-semibold">Email</label>
          <input type="text" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md border border-gray-200 dark:text-gray-800 focus:dark:border-violet-600" />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-600 font-semibold">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-gray-200 dark:text-gray-800 focus:dark:border-violet-600" />
          <div className="flex mt-2 underline dark:text-gray-600 font-semibold">
            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
          </div>
        </div>
        <button type='submit' className="block w-full p-[10px] text-center rounded-sm font-semibold bg-[#CAEB66]">Log in</button>
      </form>

      <p className="dark:text-gray-600 font-semibold">Don't have an account? <Link to="/register" className='underline'>Register</Link></p>
      <div className="divider dark:text-gray-600 font-semibold mt-6">OR</div>
      <div>
        <LoginWithGoogle name={"Login"}></LoginWithGoogle>
      </div>
    </div>
  )
}

export default Login
import React, { use } from 'react'
import { Link, NavLink} from 'react-router'
import ProfastLogo from '../ProfastLogo/ProfastLogo'
import AuthContext from '../../../Context/AuthContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {

  const { user, logOut } = use(AuthContext)

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Log Out!", {
        position: "top-right"
      });
    }).catch(error => {
      toast.error(error.message, {
        position: "top-right"
      });
      console.log(error)
    })
  }


const navItem = <>
  <li><NavLink to="/"></NavLink></li>
  <li><NavLink to="/services" className={`text-base text-base-200 lg:mx-4 ${({ isActive }) => isActive ? "bg-primary rounded-full font-semibold" : ""}`}>Services</NavLink></li>
  <li><NavLink to="/coverage" className={`text-base text-base-200 lg:mx-4 ${({ isActive }) => isActive ? "bg-primary rounded-full font-semibold" : ""}`}>Coverage</NavLink></li>
  <li><NavLink to="/about" className={`text-base text-base-200 lg:mx-4 ${({ isActive }) => isActive ? "bg-primary rounded-full font-semibold" : ""}`}>About Us</NavLink></li>
  <li><NavLink to="/pricing" className={`text-base text-base-200 lg:mx-4 ${({ isActive }) => isActive ? "bg-primary rounded-full font-semibold" : ""}`}>Pricing</NavLink></li>
  <li><NavLink to="/rider" className={`text-base text-base-200 lg:mx-4 ${({ isActive }) => isActive ? "bg-primary rounded-full font-semibold" : ""}`}>Be a Rider</NavLink></li>
</>

return (
  <div className="navbar sticky top-0 z-50 rounded-2xl md:px-4 lg:px-8 lg:py-4 bg-white">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          {navItem}
        </ul>
      </div>
      <div>
        <ProfastLogo></ProfastLogo>
      </div>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        {navItem}
      </ul>
    </div>
    <div className="navbar-end">

      {user ? <button onClick={handleLogOut} className='btn bg-white border border-stone-300'>Log Out</button> : <Link to="/login" className='btn bg-white border border-stone-300'>Sign In</Link>}
    </div>
    <ToastContainer />
  </div>
)
}

export default Navbar
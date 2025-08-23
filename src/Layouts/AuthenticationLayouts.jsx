import React from 'react'
import ProfastLogo from '../Pages/Shared/ProfastLogo/ProfastLogo'
import { Outlet } from 'react-router'
import authImg from "../assets/authImage.png"

function AuthenticationLayouts() {
    return (
        <div className='bg-white'>
            <div className='p-2 md:p-9'>
                <ProfastLogo></ProfastLogo>
            </div>
            <div className='flex items-center flex-col md:flex-row '>
                <div className='flex-1 justify-items-center'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1 justify-items-center'>
                    <img src={authImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AuthenticationLayouts
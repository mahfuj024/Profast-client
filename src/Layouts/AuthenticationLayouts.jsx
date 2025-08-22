import React from 'react'
import ProfastLogo from '../Pages/Shared/ProfastLogo/ProfastLogo'
import { Outlet } from 'react-router'
import authImg from "../assets/authImage.png"

function AuthenticationLayouts() {
    return (
        <div className='bg-white'>
            <ProfastLogo></ProfastLogo>
            <div className='flex items-center justify-center'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1'>
                    <img src={authImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AuthenticationLayouts
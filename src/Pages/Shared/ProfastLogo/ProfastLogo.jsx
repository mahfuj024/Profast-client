
import { useNavigate } from 'react-router'
import profastImg from "../../../assets/logo.png"

function ProfastLogo() {

  const navigate = useNavigate()

  return (
    <div onClick={() => navigate("/")} className='cursor-pointer flex'>
        <div>
            <img className='h-10 md:h-11 lg:h-12' src={profastImg} alt="" />
        </div>
        <div className='mt-3 lg:mt-4 ml-[-14px]'>
            <h1 className='text-2xl md:text-3xl lg:text-[32px] font-bold'>Profast</h1>
        </div>
    </div>

  )
}

export default ProfastLogo
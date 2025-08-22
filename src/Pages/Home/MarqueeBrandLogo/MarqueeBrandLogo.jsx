import Marquee from "react-fast-marquee";
import amazon from "../../../assets/brands/amazon.png"
import casio from "../../../assets/brands/casio.png"
import moonstar from "../../../assets/brands/moonstar.png"
import randstad from "../../../assets/brands/randstad.png"
import start from "../../../assets/brands/start.png"

function MarqueeBrandLogo() {
    return (
       <div className='p-2 mt-8 md:mt-12 lg:mt-24'>
        <h1 className='text-center text-2xl md:text-3xl font-bold text-base-300'>We've helped thousands of sales teams</h1>

        <div className="mt-10">
            <Marquee>
                <img className="ml-8 md:ml-16 lg:ml-40  h-5 md:h-6 lg:h-7" src={amazon} alt="" />
                <img className="ml-8 md:ml-16 lg:ml-40  h-5 md:h-6 lg:h-7" src={casio} alt="" />
                <img className="ml-8 md:ml-16 lg:ml-40  h-5 md:h-6 lg:h-7" src={moonstar} alt="" />
                <img className="ml-8 md:ml-16 lg:ml-40  h-5 md:h-6 lg:h-7" src={randstad} alt="" />
                <img className="ml-8 md:ml-16 lg:ml-40  h-5 md:h-6 lg:h-7" src={start} alt="" />
            </Marquee>
        </div>

        
    </div>
    )
}

export default MarqueeBrandLogo
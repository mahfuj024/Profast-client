import bookImg from "../../../assets/bookingIcon.png"

function Works() {
    return (
        <div className="max-w-[1282px] mx-auto mt-4 md:mt-8 lg:mt-14 p-3">
            <h1 className='text-2xl text-center lg:text-start md:text-3xl font-bold text-base-300 '>How it Works</h1>

            <div className="mt-4 lg:mt-8 grid justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-y-14 lg:gap-y-0 lg:gap-6">

                <div className='rounded-4xl bg-white p-8 max-w-[300px]'>
                    <img src={bookImg} alt="" />
                    <h2 className="text-lg mt-6 font-semibold text-base-300">Booking Pick & Drop</h2>
                    <p className="mt-4 text-base-200">From personal packages to business shipments — we deliver on time, every time.</p>
                </div>

                <div className='rounded-4xl bg-white p-8 max-w-[300px]'>
                    <img src={bookImg} alt="" />
                    <h2 className="text-lg mt-6 font-semibold text-base-300">Cash On Delivery</h2>
                    <p className="mt-4 text-base-200">From personal packages to business shipments — we deliver on time, every time.</p>
                </div>

                <div className='rounded-4xl bg-white p-8 max-w-[300px]'>
                    <img src={bookImg} alt="" />
                    <h2 className="text-lg mt-6 font-semibold text-base-300">Delivery Hub</h2>
                    <p className="mt-4 text-base-200">From personal packages to business shipments — we deliver on time, every time.</p>
                </div>

                <div className='rounded-4xl bg-white p-8 max-w-[300px]'>
                    <img src={bookImg} alt="" />
                    <h2 className="text-lg mt-6 font-semibold text-base-300">Booking SME & Corporate</h2>
                    <p className="mt-4 text-base-200">From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </div>
    )
}

export default Works
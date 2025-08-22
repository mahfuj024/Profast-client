import bookImg from "../../../assets/bookingIcon.png"

function Works() {
    return (
        <div className="max-w-[1282px] mx-auto mt-4 md:mt-8 lg:mt-14 p-3">
            <h1 className='text-2xl md:text-3xl font-bold text-base-300'>How it Works</h1>

            <div className="mt-4 lg:mt-8 grid ">

                <div className='rounded-4xl bg-white p-8 max-w-[300px]'>
                    <img src={bookImg} alt="" />
                    <h2 className="text-lg mt-6 font-semibold text-base-300">Booking Pick & Drop</h2>
                    <p className="mt-4 text-base-200">From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </div>
    )
}

export default Works
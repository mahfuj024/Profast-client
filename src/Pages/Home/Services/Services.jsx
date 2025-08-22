import service from "../../../assets/service.png"

function Services() {
    return (
        <div className='mt-6 md:mt-12 lg:mt-24 bg-[#03373D] rounded-2xl lg:rounded-4xl py-10 px-4 md:p-12 lg:p-24'>
            <h1 className='text-center text-white text-2xl md:text-3xl lg:text-4xl font-bold'>Our Services</h1>
            <p className='text-center text-white mt-4'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>

            {/* card */}
            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                <div className="card p-4 bg-[#FFFFFF] max-w-[410px] h-[346px]  hover:bg-primary transition-colors duration-300 ease-in-out">
                    <figure className="px-10 pt-10">
                        <img
                            src={service}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl text-base-300">Express  & Standard <br /> Delivery</h2>
                        <p className="text-base-200 mt-4">We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>

                    </div>
                </div>

                <div className="card p-4 bg-[#FFFFFF] max-w-[410px] h-[346px]  hover:bg-primary transition-colors duration-300 ease-in-out">
                    <figure className="px-10 pt-10">
                        <img
                            src={service}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl text-base-300">Nationwide Delivery</h2>
                        <p className="text-base-200 mt-4">We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>

                    </div>
                </div>

                <div className="card p-4 bg-[#FFFFFF] max-w-[410px] h-[346px]  hover:bg-primary transition-colors duration-300 ease-in-out">
                    <figure className="px-10 pt-10">
                        <img
                            src={service}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl text-base-300">Fulfillment Solution</h2>
                        <p className="text-base-200 mt-4">We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>

                    </div>
                </div>

                 <div className="card p-4 bg-[#FFFFFF] max-w-[410px] h-[346px]  hover:bg-primary transition-colors duration-300 ease-in-out">
                    <figure className="px-10 pt-10">
                        <img
                            src={service}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl text-base-300">Cash on Home Delivery</h2>
                        <p className="text-base-200 mt-4">100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>

                    </div>
                </div>

                 <div className="card p-4 bg-[#FFFFFF] max-w-[410px] h-[346px]  hover:bg-primary transition-colors duration-300 ease-in-out">
                    <figure className="px-10 pt-10">
                        <img
                            src={service}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl text-base-300">Corporate Service / Contract <br /> In Logistics</h2>
                        <p className="text-base-200 mt-4">Customized corporate services which includes warehouse and inventory management support.</p>

                    </div>
                </div>

                 <div className="card p-4 bg-[#FFFFFF] max-w-[410px] h-[346px]  hover:bg-primary transition-colors duration-300 ease-in-out">
                    <figure className="px-10 pt-10">
                        <img
                            src={service}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl text-base-300">Parcel Return</h2>
                        <p className="text-base-200 mt-4">Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>

                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default Services
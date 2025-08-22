import locationMerchant from "../../../assets/location-merchant.png"

function Merchant() {
    return (
        <div className='bg-[#03373D] text-white mt-10 md:mt-12 lg:mt-20 rounded-2xl md:rounded-3xl lg:rounded-4xl p-6 md:p-12 lg:p-20 flex items-center justify-center flex-col lg:flex-row'>
            <div>
                <h1 className="text-2xl md:text-4xl lg:text-[40px] font-bold">Merchant and Customer Satisfaction <br /> is Our First Priority</h1>
                <p className="text-base mt-4">We offer the lowest delivery charge with  the highest value along with <br /> 100% safety of your product. Pathao courier delivers your parcels in every <br /> corner of Bangladesh right on time.</p>
                <div className="mt-8 flex flex-col lg:flex-row">
                    <button className='btn bg-primary text-black md:text-lg font-semibold p-5 md:p-6 rounded-3xl'>Become a Merchant</button>
                    <button className='btn md:text-lg font-semibold p-5 md:p-6 mt-4 lg:mt-0 rounded-3xl bg-[#03373D] text-primary border border-primary lg:ml-4'>Earn with Profast Courier</button>
                </div>
            </div>
            <div className="mt-10 lg:mt-0">
                <img src={locationMerchant} alt="" />
            </div>
        </div>
    )
}

export default Merchant
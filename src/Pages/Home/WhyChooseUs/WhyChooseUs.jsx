import liveImg from "../../../assets/live-tracking.png"
import safeImg from "../../../assets/safe-delivery.png"

function WhyChooseUs() {
    return (
        <div className="mt-8 md:mt-12 lg:mt-20">

            <div className="border-t-2 border-dashed border-gray-400 w-full"></div>

            <div className="p-4 md:p-0">

                <div className="flex items-center bg-white rounded-2xl lg:rounded-3xl p-8 flex-col md:flex-row gap-12 mt-8 md:mt-12 lg:mt-20">
                    <img src={liveImg} alt="" />
                    <div className="hidden md:block border-l-2 border-dashed border-gray-400 h-32 mx-4"></div>

                    <div>
                        <h2 className="text-2xl font-semibold text-base-300">Live Parcel Tracking</h2>
                        <p className="mt-4 text-base-200">Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                    </div>

                </div>

                <div className="flex items-center bg-white rounded-2xl lg:rounded-3xl p-8 flex-col md:flex-row gap-12 mt-6">
                    <img src={safeImg} alt="" />
                    <div className="hidden md:block border-l-2 border-dashed border-gray-400 h-32 mx-4"></div>

                    <div>
                        <h2 className="text-2xl font-semibold text-base-300">100% Safe Delivery</h2>
                        <p className="mt-4 text-base-200">We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
                    </div>

                </div>

                <div className="flex items-center bg-white rounded-2xl lg:rounded-3xl p-8 flex-col md:flex-row gap-12 mt-6">
                    <img src={safeImg} alt="" />
                    <div className="hidden md:block border-l-2 border-dashed border-gray-400 h-32 mx-4"></div>

                    <div>
                        <h2 className="text-2xl font-semibold text-base-300">24/7 Call Center Support</h2>
                        <p className="mt-4 text-base-200">Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
                    </div>

                </div>


                
            </div>

            <div className="border-t-2 border-dashed border-gray-400 w-full mt-8 md:mt-12 lg:mt-20"></div>

        </div>
    )
}

export default WhyChooseUs
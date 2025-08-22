import React from 'react'

function AskedQuestion() {
    return (
        <div className='max-w-[1282px] mx-auto mt-12 md:mt-16 lg:mt-24 p-3 lg:p-0'>
            <h1 className='text-base-300 text-center text-2xl md:text-4xl lg:text-[40px] font-bold'>Frequently Asked Question (FAQ)</h1>
            <p className='text-base-200 text-center mt-4 md:mt-6'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!</p>

            <div className='mt-6 md:mt-10 space-y-4'>

                <div className="collapse collapse-plus bg-white hover:bg-[#E6F2F3] p-2 md:p-4 lg:p-6">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title font-semibold text-lg text-base-300">How does this posture corrector work?</div>
                    <div className="collapse-content text-sm text-base-200">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
                </div>

                <div className="collapse collapse-plus bg-white hover:bg-[#E6F2F3] p-2 md:p-4 lg:p-6">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title font-semibold text-lg text-base-300">Is it suitable for all ages and body types?</div>
                    <div className="collapse-content text-sm text-base-200">Yes, it is generally suitable for all ages and body types, but the level of suitability depends on the individual’s needs and physical condition. People of different ages may have different requirements, so adjustments should be made to ensure comfort and safety. For younger individuals, it can be a tool for developing healthy habits.</div>
                </div>

                <div className="collapse collapse-plus bg-white hover:bg-[#E6F2F3] p-2 md:p-4 lg:p-6">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title font-semibold text-lg text-base-300">Does it really help with back pain and posture improvement?</div>
                    <div className="collapse-content text-sm text-base-200">Many products and practices are designed to support the natural curve of the spine, reduce strain, and encourage proper alignment. This can ease pressure on the lower back, shoulders, and neck, which are common sources of discomfort. Over time, it may train your body to sit or stand in a healthier position. However, results vary, and combining it with exercise and stretching brings better outcomes.</div>
                </div>

                 <div className="collapse collapse-plus bg-white hover:bg-[#E6F2F3] p-2 md:p-4 lg:p-6">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title font-semibold text-lg text-base-300">Does it have smart features like vibration alerts?</div>
                    <div className="collapse-content text-sm text-base-200">These alerts can be set at regular intervals, helping you develop a habit of sitting or standing properly throughout the day. Advanced versions may connect to mobile apps, track your posture over time, and provide personalized tips for improvement. While vibration alerts are subtle and non-intrusive, they effectively encourage consistent posture correction, making it easier to maintain spinal health and reduce back strain.</div>
                </div>

                <div className="collapse collapse-plus bg-white hover:bg-[#E6F2F3] p-2 md:p-4 lg:p-6">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title font-semibold text-lg text-base-300">How will I be notified when the product is back in stock?</div>
                    <div className="collapse-content text-sm text-base-200">When the product is back in stock, you will typically be notified through the method you selected during the waitlist or notification sign-up. Most online stores offer options like email alerts, SMS messages, or app notifications. Once the product becomes available, the system automatically sends a notification with details on how to purchase it. Some platforms may also provide a direct link to the product page, ensuring you can quickly place your order before it sells out again.</div>
                </div>



            </div>
        </div>
    )
}

export default AskedQuestion
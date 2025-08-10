import React from 'react'
import ArrowRight from './icons/arrow-right'
import Image from 'next/image'
import StarIcon from './icons/star'

const MainBody = () => {
  return (
    <main className="flex text-white">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-[211px] grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Text */}
            <div className="relative z-10 md:mt-[57px] order-2 md:order-1 pt-5">
                <h1 className="font-bold text-4xl arban-font mb-5">Want to Turn Social Media Into a Profitable Career? </h1>
                <h1 className="font-bold text-4xl arban-font text-[#00E7F9] text-shadow-custom mb-5">Discover your way to success with Fametonic:</h1>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                    <StarIcon customClass="mr-2 mt-1" />
                    Start growing your influence right away—no waiting required!
                    </li>
                    <li className="flex items-center">
                    <StarIcon customClass="mr-2 mt-1" />
                    Create viral TikToks and Reels step by step with easy-to-follow lessons
                    </li>
                    <li className="flex items-center">
                    <StarIcon customClass="mr-2 mt-1" />
                    Use a Personal AI Worker to boost your content
                    </li>
                    <li className="flex items-center">
                    <StarIcon customClass="mr-2 mt-1" />
                    Learn from expert-led courses designed for aspiring influencers
                    </li>
                </ul>
                <div className="md:text-left text-center flex flex-col">
                    {/* Group that should appear last on small, first on md+ */}
                    <div className="order-1 md:order-2 color-gray md:mt-6 mb-6">
                    <p>
                        <small>{`By clicking "Get Started", you agree with`} <a href="">Terms and Conditions</a>, <a href="">Privacy Policy</a>, <a href="">Subscription Terms</a></small>
                    </p>
                    <p>
                        <small>Fametonic 2025 ©All Rights Reserved.</small>
                    </p>
                    </div>

                    {/* Group that should appear first on small, last on md+ */}
                    <div className="w-full md:w-[313px] mb-6 md:mb-0 text-center order-2 md:order-1">
                    <button className="get-started-btn btn-shadow">
                    Get Started <ArrowRight />
                    </button>
                    <small className="mt-3 inline-block">1-minute quiz for personalized Insights</small>
                    </div>
                </div>
            </div>
            {/* Right: Image */}
            <div className="relative md:-ml-[100px] flex justify-center items-center order-1 md:order-2 px-5">
                <Image src="/device.png" width={500} height={600} alt="App" className="w-full" />
            </div>
        </div>
    </main>
  )
}

export default MainBody

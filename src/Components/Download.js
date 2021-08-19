import React from 'react'

export default function Download() {
    return (
        <section className="flex flex-col md:flex-row items-start mt-20 ml-16 mr-16 max-w-7xl mx-auto sm:pl-16 rounded-lg">
            <div
                className="w-full z-20 py-16 inset-0 md:relative h-full text-center md:text-left flex flex-col justify-center"
            >
                <h1 className="text-3xl md:text-5xl text-white md:leading-tight font-bold">
                    Free B2B Marketing eBook
                </h1>
                <h2 className="px-8 text-lg text-white md:px-0 my-6">
                    Available exclusively from Altitude Marketing, this eBook teaches you:
                </h2>
                <div className="inline-flex items-center">
                    <span className="flex h-12 w-12 p-1 border-circle-green rounded-full justify-center items-center">
                        <span className="flex text-white text-lg rounded-full button-bg w-9 h-9 justify-center items-center">1</span>
                    </span>
                    <h1 className="text-lg text-white px-6 text-left">What integrated marketing is … and what it isn’t</h1>
                </div>
                <div className="inline-flex items-center pt-6">
                    <span className="flex h-12 w-12 p-1 border-circle-green rounded-full justify-center items-center">
                        <span className="flex text-white text-lg rounded-full button-bg w-9 h-9 justify-center items-center">2</span>
                    </span>
                    <h1 className="text-lg text-white px-6 text-left">The difference between tactics and strategy</h1>
                </div>
                <div className="inline-flex items-center pt-6">
                    <span className="flex h-12 w-12 p-1 border-circle-green rounded-full justify-center items-center">
                        <span className="flex text-white text-lg rounded-full button-bg w-9 h-9 justify-center items-center">3</span>
                    </span>
                    <h1 className="text-lg text-white px-6 text-left">What your brand messaging really says</h1>
                </div>
                <div className="inline-flex items-center pt-6">
                    <span className="flex h-12 w-12 p-1 border-circle-green rounded-full justify-center items-center">
                        <span className="flex text-white text-lg rounded-full button-bg w-9 h-9 justify-center items-center">4</span>
                    </span>
                    <h1 className="text-lg text-white px-6 text-left">WHow to put ideas into action … without breaking the bank</h1>
                </div>
                <div className="inline-flex items-center pt-6">
                    <span className="flex h-12 w-12 p-1 border-circle-green rounded-full justify-center items-center">
                        <span className="flex text-white text-lg rounded-full button-bg w-9 h-9 justify-center items-center">5</span>
                    </span>
                    <h1 className="text-lg text-white px-6 text-left">Tricks for realizing true ROI from trade shows</h1>
                </div>
                <div className="py-12">
                    <a
                        href="#category-shop"
                        className="px-10 py-3 mt-4 text-lg inline-block flex-none button-bg transition rounded font-bold duration-200"
                    >DOWNLOAD NOW</a>
                </div>
            </div>
            <div className="w-full h-full inset-0 md:relative md:w-full">
                <div className="grid relative inset-0 justify-items-center pt-5 md:pt-40">
                    <img
                        src="assets/dot-circle.png"
                        alt="hero 1"
                        className="inset-0 md:relative object-cover w-10/12"
                    />
                </div>
            </div>
        </section>
    )
}

import React from 'react'

export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center mt-10 ml-16 mr-16 max-w-7xl mx-auto sm:pl-16 button-bg rounded-lg">
            <div
                className="w-full z-20 py-16 inset-0 md:relative text-center md:text-left md:w-1/2 flex flex-col justify-center"
            >
                <h1 className="text-3xl md:text-5xl text-color md:leading-tight font-bold">
                    Join the best cryptocurrency exchange
                </h1>
                <h2 className="px-8 text-lg text-color md:px-0 my-6 tracking-wide">
                    Trade with over 740 different cryptocurrency and flat currency pairs, including Bitcoin, Ethereum and BNB pairs
                </h2>
                <div>
                    <a
                        href="#category-shop"
                        className="button-dark px-10 py-3 mt-4 text-lg inline-block flex-none text-button transition duration-200"
                    >START TRADING</a>
                </div>
            </div>
            <div className="w-full inset-0 md:relative md:w-full">
                <div className="grid relative inset-0 justify-items-end">
                    <img
                        src="assets/Masking.png"
                        alt="hero 1"
                        className="inset-0 md:relative object-cover w-4/6 object-center"
                    />
                </div>
            </div>
        </section>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <section className="flex flex-col h-full py-10 md:flex-row justify-around mt-10 px-16 md:px-auto footer-color">
            <div className="flex flex-col items-start">
                <img
                    src="assets/jobfinder.png"
                    alt="Jobfinder"
                />
                <h1 className="text-white mt-5 text-xl">Join the best Cryptocurrency exchange.</h1>
            </div>
            <div>
                <div className="text-white font-bold mt-10 md:mt-0">
                    Navigation
                </div>
                <div className="flex flex-col mt-5 md:mt-10 text-white">
                    <Link className="py-2">Home</Link>
                    <Link className="py-2">About</Link>
                    <Link className="py-2">Product</Link>
                    <Link className="py-2">Services</Link>
                    <Link className="py-2">Portofolio</Link>
                    <Link className="py-2">Blog</Link>
                </div>
            </div>
            <div>
                <div className="text-white font-bold mt-10 md:mt-0">
                    Company
                </div>
                <div className="flex flex-col mt-5 md:mt-10 text-white">
                    <Link className="py-2">Privacy Policy</Link>
                    <Link className="py-2">Help Center</Link>
                    <Link className="py-2">Terms of Services</Link>
                </div>
            </div>
            <div>
                <div className="text-white font-bold mt-10 md:mt-0">
                    Learning
                </div>
                <div className="flex flex-col mt-5 md:mt-10 text-white">
                    <Link className="py-2">Resources</Link>
                    <Link className="py-2">Blog</Link>
                </div>
            </div>
            <div>
                <div className="text-white font-bold mt-10 md:mt-0">
                    More
                </div>
                <div className="flex flex-col mt-5 md:mt-10 text-white">
                    <Link className="py-2">Documentations</Link>
                    <Link className="py-2">License</Link>
                    <Link className="py-2">Blog</Link>
                </div>
            </div>
        </section>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { HiChevronDown } from 'react-icons/hi'


export default function Header() {
    return (
        <div className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 hidden md:block">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to="/">
                            <img
                                src="assets/BrokerHub.png"
                                alt="BrokerHub"
                            />
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-10">
                        <Link to="/" className="text-xl text-white">
                            Home
                        </Link>
                        <Link to="/" className="text-xl text-white">
                            Robot EU
                        </Link>
                        <Link to="/" className="text-xl text-white">
                            Social Trade
                        </Link>
                        <Link to="/" className="text-xl text-white inline-flex">
                            Broker List<HiChevronDown className="mt-1 ml-1 h-5 w-5" />
                        </Link>

                        {/* <div className="menu">
                            <Link to="/" className="text-xl text-white">
                                Menu 1
                            </Link>
                            <Link to="/" className="text-xl text-white">
                                Menu 2
                            </Link>
                            <Link to="/" className="text-xl text-white">
                                Menu 3
                            </Link>
                        </div> */}
                    </nav>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <Link to="/" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-7 py-2 rounded border border-transparent shadow-sm text-lg font-medium text-white button-bg">
                            Masuk
                        </Link>
                    </div>
                </div>
            </div>
            <div className="relative top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 button-dark divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <Link to="/">
                                    <img
                                        src="assets/BrokerHub.png"
                                        alt="BrokerHub"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="mt-6">
                            <nav className="grid gap-y-8">
                                <Link to="/" className="-m-3 p-3 flex items-center text-white rounded-md hover:bg-white hover:text-green-500">
                                    Home
                                </Link>
                                <Link to="/" className="-m-3 p-3 flex items-center text-white rounded-md hover:bg-white hover:text-green-500">
                                    Robot EU
                                </Link>
                                <Link to="/" className="-m-3 p-3 flex items-center text-white rounded-md hover:bg-white hover:text-green-500">
                                    Social Trade
                                </Link>
                                <Link to="/" className="-m-3 p-3 flex items-center text-white rounded-md hover:bg-white hover:text-green-500">
                                    Broker List<HiChevronDown className="mt-1 ml-1 h-5 w-5" />
                                </Link>
                            </nav>
                        </div>
                    </div>
                    <div className="py-6 px-5 space-y-6">
                        <div>
                            <Link to="/" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded shadow-sm text-base font-medium text-white button-bg">
                                Masuk
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

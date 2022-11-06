import React from 'react'
import LogoImg from '../assets/logo.svg'
import Donate1 from '../assets/donat1.jpeg'
import Donate2 from '../assets/donate2.jpeg'
import Donate3 from '../assets/donate3.webp'
import Donate4 from '../assets/donate4.jpg'
import Donate5 from '../assets/Donate.jpg'
import { HiX } from "react-icons/hi"

export default function Donate() {

    const [showNavbar, setShowNavbar] = React.useState(false);

    return (
        <div className='min-h-screen'>
            <div className="grid place-items-center py-5">
                <div className="flex flex-row text-5xl font-bold text-[#246125]">Donate <span><img src={LogoImg} width="50" height="50" alt="" /></span></div>
                <div className='bg-blue-500 h-1 w-36 my-2 rounded-lg'></div>
            </div>

            <div className="flex flex-wrap justify-around w-full px-16">

                <div className="m-8">
                    <div className="border-2 rounded-xl bg-gray-200 border-black  ">
                        <img src={Donate1} height="300" width="300" alt="TicTbeachacToe" className='rounded-xl' />
                        <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
                             <button
                                className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-blue-500"
                                onClick={() => setShowNavbar(true)}
                            >
                                Know Details
                            </button>
                            {showNavbar ? (
                                <div>
                                    <div className=" flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none items-center justify-center w-screen">
                                        <div className="relative my-6 mx-auto w-screen">
                                            <div className="ml-[25rem] border-0   shadow-lg relative flex flex-col w-128 bg-primary outline-none focus:outline-none ">
                                                <div className="flex items-start justify-between p-5 border-solid rounded-t">
                                                    <div>
                                                        <div className="text-2xl font-base tracking-wide cursor-pointer text-white">
                                                            Person Details
                                                        </div>
                                                    </div>

                                                    <button
                                                        className="absolute right-6"
                                                        onClick={() => setShowNavbar(false)}
                                                        aria-hidden="false"
                                                        aria-label="button"
                                                    >
                                                        <HiX
                                                            className="h-7 w-7 text-white"
                                                            aria-hidden="false"
                                                        />
                                                    </button>
                                                </div>

                                                <div className="grid justify-center">
                                                    <div className="inline-flex w-64 h-1 bg-indigo-500 rounded-full"></div>
                                                </div>

                                                <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4 text-white">
                                                    <div className="py-2">Name: John Doe</div>
                                                    <div className="py-2">Email: john@gmail.com</div>
                                                    <div className="py-2">Phone: 1234567890</div>
                                                    <div className="py-2">Address: 123, Wall Street, NY City</div>
                                                    <a href="mailto:john@gmail.com"><button className="bg-blue-600 text-white py-2 px-8 rounded-md ml-2">
                                                        Email user
                                                    </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black"></div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>

                <div className="m-8">
                    <div className="border-2 rounded-xl bg-gray-200 border-black  ">
                        <img src={Donate2} height="300" width="300" alt="TicTbeachacToe" className='rounded-xl' />
                        <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
                             <button
                                className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-blue-500"
                                onClick={() => setShowNavbar(true)}
                            >
                                Know Details
                            </button>
                        </div>
                    </div>
                </div>

                <div className="m-8">
                    <div className="border-2 rounded-xl bg-gray-200 border-black  ">
                        <img src={Donate3} height="300" width="300" alt="TicTbeachacToe" className='rounded-xl' />
                        <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
                             <button
                                className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-blue-500"
                                onClick={() => setShowNavbar(true)}
                            >
                                Know Details
                            </button>
                        </div>
                    </div>
                </div>

                <div className="m-8">
                    <div className="border-2 rounded-xl bg-gray-200 border-black  ">
                        <img src={Donate4} height="300" width="300" alt="TicTbeachacToe" className='rounded-xl' />
                        <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
                             <button
                                className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-blue-500"
                                onClick={() => setShowNavbar(true)}
                            >
                                Know Details
                            </button>
                        </div>
                    </div>
                </div>

                <div className="m-8">
                    <div className="border-2 rounded-xl bg-gray-200 border-black  ">
                        <img src={Donate5} height="300" width="300" alt="TicTbeachacToe" className='rounded-xl' />
                        <div className="grid place-items-center mx-1 text-2xl font-semibold text-gray-900 py-2">
                             <button
                                className="text-white py-2 px-8 rounded-md text-xl md:text-xl bg-blue-500"
                                onClick={() => setShowNavbar(true)}
                            >
                                Know Details
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

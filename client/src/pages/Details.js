import React from 'react'
import LogoImg from '../assets/logo.svg'
import DetailImg from '../assets/detail.svg'

export default function Details() {
    return (
        <div className='min-h-screen'>
            <div className="grid place-items-center py-5">
                <div className="flex flex-row text-5xl font-bold text-[#246125]">Item# 8789524</div>
                <div className='bg-blue-500 h-1 w-36 my-2 rounded-lg'></div>
            </div>

            <div className='grid grid-cols-3 gap-4 px-16'>
                <div className=''>
                    <img src={DetailImg} alt="detail" className='w-72 h-72' />
                    <div className='border-3 border-2xl border-black text-xl'>
                        <p>Name: John Doe</p>
                        <p>Email: JohnDoe@gmail.com</p>
                        <p>Address: 1234 place,
                            Austin, TX</p>
                        <p>Price: $40 USD</p>
                        <p>Color: White with brown nail accent</p>
                        <p>Quality: Sturdy and clean</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center col-span-2 items-center rounded-xl'>
                    <iframe src="/map/index.html" height="400px" width="900px" title='map' />
                </div>
            </div>
        </div>
    )
}

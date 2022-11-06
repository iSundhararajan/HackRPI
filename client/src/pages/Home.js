import React from "react"
import Hero from '../assets/hero.svg'
import Feat from '../assets/feat.svg'
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div className='md:mx-28 mx-4 pb-12'>

      <div className='md:grid md:grid-cols-2 items-center'>
        <div className=''>
          <h1 className='text-3xl md:text-5xl'>Our Purpose</h1>
          <p className='text-xl py-4 tracking-wider text-justify'>In today’s world, there are landfills full of trash. Most of this waste can be recycled or reused. However, even while knowing this, most people throw away items because they lack knowledge on how to put it for better use. GreenWish helps to solve this problem by providing an efficient way to reuse old products. It brings in profit for the user while helping the environment(its a win-win!). Create an account to get started!</p>

          <Link to="/items">
            <button className='bg-primary py-2 px-8 rounded-md text-xl md:text-2xl text-white'>View Items</button>
          </Link>

        </div>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={Hero} alt="img" width="500" height="500" />
        </div>
      </div>

      <div className='md:grid md:grid-cols-2 pt-4 items-center'>
        <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
          <img src={Feat} alt="img" width="500" height="500" />
        </div>
        <div className=''>
          <h1 className='text-3xl md:text-5xl'>What else do we have</h1>
          <p className='text-xl md:text-2xl py-4 tracking-wider'>GreenWish is a web app where you can:
          </p>
          <ul className="text-xl">
            <li className="list-disc">Can buy items from other users</li>
            <li className="list-disc">Can sell their old items to other users.</li>
            <li className="list-disc">Can donate their old items to the charity.</li>
            <li className="list-disc">Upload an image of the item to classify the item is recyclable.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

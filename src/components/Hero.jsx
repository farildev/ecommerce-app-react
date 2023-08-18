import React from 'react';
import WomanImg from "../images/woman_hero.png";
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className='bg-main h-[800px] bg-hero 
    bg-no-repeat bg-cover bg-center py-24'>
      <div className="container mx-auto flex justify-around items-center h-full">
        <div className='flex flex-col '>
          <div className='font-semibold flex items-center uppercase text-white'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New Trend
          </div>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4 text-white'>AUTUMN SALE STYLISH
          <br />
          <span className='font-semibold text-white'>WOMEN</span>
          </h1> 
          <Link className='self-start uppercase font-semibold border-b-2 text-white  border-white' to={'/'}>Discover More</Link>
        </div>
        <div className='hidden h-full mt-2 lg:block'>
          <img src={WomanImg} alt="Model" />
        </div>
      </div>
    </section>
  )
}

export default Hero
import React from 'react'
import banner55 from "../../asset/Home/banner-55.webp";
import banner56 from "../../asset/Home/banner-56.webp";
import banner57 from "../../asset/Home/banner-56.webp";
import banner58 from "../../asset/Home/banner-58.webp";

import cardData from "../../data"
import Card from './Card';

const Home = () => {
  return (
    <div className="w-[1250px] absolute top-[5.25rem] right-0  h-full bg-slate-200">
      <div className='flex justify-between items-center relative'>

        <div className="relative px-2 py-2">
          <img src={banner55} className="rounded-md" alt='banner55' />

          <div className="absolute top-5 left-20 w-64">
            <h2 className="text-3xl font-bold text-slate-500">50% off For Your
              First Order</h2>

            <p className=' text-slate-600 font-semibold'>50% discount on any product</p>
          </div>


          <div className='relative bottom-16 left-10'>
            <button className="bg-lime-900 px-4 py-2 rounded-md text-lg text-slate-100 text-center hover:bg-lime-700 transition-all duration-200">Shop Now</button>
          </div>

        </div>


        <div className='flex flex-col gap-5 items-center justify-center'>
          <div className='relative bg-slate-300 rounded-md shadow-md cursor-pointer hover:scale-105 scale-100 transition-all duration-200 hover:shadow-slate-600'>
            <img src={banner56} alt='logo' />

            <div className="absolute top-5 left-6" >
              <p>Table</p>
              <p>20% off</p>
            </div>

          </div>

          <div className="relative bg-slate-300 px-1 rounded-md shadow-md cursor-pointer hover:scale-105 scale-100 transition-all duration-200 hover:shadow-slate-600">
            <img src={banner57} alt='logo'></img>

            <div className="absolute top-5 left-6" >
              <p>Table</p>
              <p>20% off</p>
            </div>
          </div>
        </div>

        <div className="relative bg-slate-300 px-1 mr-4 rounded-md shadow-md cursor-pointer">
          <img src={banner58} alt='logo'></img>

          <div className="absolute top-5 left-6" >
            <p>Table</p>
            <p>20% off</p>
          </div>
        </div>


      </div>

      <div className='px-2 py-2'>
        <h2 className="text-2xl font-bold text-slate-700">All Products</h2>

        <div>
          {
            cardData.map(card => {
              <Card
                key={card.id}
                title={card.title}
              ></Card>
            })
          }
        </div>
      </div>


    </div>
  )
}

export default Home

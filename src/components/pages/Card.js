import React from 'react'

const Card = ({ title, image }) => {
    return (
        <div className='bg-slate-300 m-3 p-3 rounded-md flex items-center justify-center
           shadow-md cursor-pointer hover:scale-105 scale-100 transition-all duration-200 hover:shadow-slate-600'>

            <div className=" flex flex-col gap-2">
                <img src={image} alt='show' />

                <div className='px-5'>
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p>10% off</p>
                </div>

                <div className='flex justify-between px-5'>
                    <div className='flex gap-2'>
                        <p className="text-lg font-bold text-amber-700">$135.78</p>
                        <span className='text-center text line-through text-slate-700'>$146.00</span>
                    </div>


                    <div>
                        <button className='bg-lime-900 px-4 py-2 rounded-md text-lg text-slate-100 text-center hover:bg-lime-700 transition-all duration-200'>Add to Cart</button>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Card

import React from 'react'
import Card from '../Card'
import cardData from "../../../data"

const Handwash = () => {
  return (
    <div className=" w-[1250px] absolute top-[5.25rem] right-0 h-fit bg-slate-200">
      <div className='px-2 py-2'>
        <h2 className="text-2xl font-bold text-slate-700">All Products</h2>

        <div className='flex flex-wrap justify-between'>
          {
            cardData.map(card => (
              <Card
                key={card.id}
                title={card.title}
                image={card.image}
              />
            ))
          }
        </div>

      </div>

    </div>
  )
}

export default Handwash

"use client"

import Navbar from '@/components/Navbar' 
import React from 'react'  
import { register } from 'swiper/element/bundle'  
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"

const page:React.FC = () => { 
  register()

  const subjects = [
    'History of Architecture',
    'Building Laws', 
    'Building Materials and Technology', 
    'Professional Practice', 
    'Design, Theory of Architecture', 
  ]
  return (
    <>
      <Navbar />
      <main className="pt-[72px] flex min-h-screen items-center justify-between">
        <div className="w-full sm:w-[800px] mx-auto bg-white font-mono text-sm relative">  
         
          <div> 
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              loop
            >
              {
                subjects.map((subject) => ( 
                  <SwiperSlide>
                    <div className='bg-gradient-to-bl from-rose-100 to-teal-100 rounded shadow h-[324px] border flex items-center cursor-default justify-center'> 
                      <span className='select-none text-slate-900 text-xl font-semibold font-sans w-3/4 text-wrap'>{ subject }</span>
                    </div>
                  </SwiperSlide>
                ))
              } 
            </Swiper>
          </div>
              
              
        </div>
      </main> 
    </>
  )
}

export default page
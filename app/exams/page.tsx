"use client"

import Navbar from '@/components/Navbar' 
import React from 'react'  
import { register } from 'swiper/element/bundle'  
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/thumbs"
import Link from 'next/link'

const page:React.FC = () => { 
  register()

  const subjects = [
    {
      url: 'history-of-architecture',
      label: 'History of Architecture',
    },
    {
      url: 'building-laws',
      label: 'Building Laws',
    },
    {
      url: 'building-materials-and-technology',
      label: 'Building Materials and Technology',
    },
    {
      url: 'professional-practice',
      label:'Professional Practice', 
    },
    {
      url: 'design-theory-and-architecture',
      label: 'Design, Theory of Architecture', 
    },
    
  ]
  return (
    <>
      <Navbar />
      <main className="pt-[72px] flex min-h-screen justify-between">
        <div className="w-full sm:w-[800px] mx-auto bg-white font-mono text-sm relative">  
         
          <div> 
            <Swiper
              spaceBetween={16}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              loop
            >
              {
                subjects.map(({url, label}) => ( 
                  <SwiperSlide>
                    <div className='bg-gradient-to-bl from-rose-100 to-teal-100 rounded shadow h-[324px] border flex items-center cursor-default justify-center p-4'> 
                      <Link href={`exams/${url}`}>
                        <span className='select-none text-slate-900 text-xl font-semibold font-sans w-3/4 text-wrap'>{ label }</span>
                      </Link>
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
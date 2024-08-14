"use client"
import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'
import React, { useState } from 'react' 
import Lottie from "lottie-react"
import animateCheck from '@/app/_components/assets/animation-check.json'

const DailyQuestions:React.FC = () => {
    //https://medium.com/incresco/animating-the-web-with-lottie-best-practices-for-optimization-be02ea24fc77

    const [disappear, setDisappear] = useState<boolean>(false)
    return (
    <CardContent className="flex flex-col items-center justify-center gap-4 p-0">
        <div className="font-sans text-xl">
        Who popularize the dictum "God is in the details" ?
        </div>       
        <form className="flex gap-2">
            <input type="text" className="m-0 font-semibold font-sans text-xl border-b-4 outline-none" /> 
            <Button className="">Answer</Button>
        </form>    
        {
            !disappear && ( 
                <div className='w-[100px]'> 
                    <Lottie animationData={animateCheck}
                    loop={false}
                    onComplete={() => setDisappear(true)} />
                </div>
            ) 
        }   
    </CardContent> 
    )
}

export default DailyQuestions
"use client"
import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'
import React, { useEffect, useState } from 'react' 
import Lottie from "lottie-react"
import animateCheck from '@/app/_components/assets/animation-check.json'
import { motion, AnimatePresence } from 'framer-motion'

const DailyQuestions:React.FC = () => {
    //https://medium.com/incresco/animating-the-web-with-lottie-best-practices-for-optimization-be02ea24fc77

    const [disappear, setDisappear] = useState<boolean>(true)
    const [showWrong, setShowWrong] = useState<boolean>(false)
    const [toggle, setToggle] = useState<boolean>(true)

    const [inputAnswer, setInputAnswer] = useState<string>("")
    const [examNode, setExamNode] = useState<number>(0)
    const [userAnswers, setUserAnswers] = useState<string>("")

    const [showQuestion, setShowQuestion] = useState(true)

    interface DailyQuestionProp {
        question:string,
        answer:string
    }

    const dailyQuestions:DailyQuestionProp[] = [
        {
            question: "Who popularize the dictum 'God is in the details'",
            answer: "Mies Van der Rohe"
        },
        {
            question: "The building in the acropolis generally considered as being the most nearly perfect building ever erected",
            answer: "Parthenon"
        },
        {
            question: "The most famous and perfect preservation of all ancient buildings in Rome",
            answer: "Pantheon"
        }
    ]

    const delay = async(time:number) => {
        await new Promise(resolve => setTimeout(resolve, time))
    }

    const moveQuestionNode = async() => { 
        await new Promise(resolve => setTimeout(resolve, 1000))
        if (examNode < dailyQuestions.length - 1) {
            setExamNode(prev => prev + 1) 
        } 
    } 

    const handleAnswer = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault() 
 
        const { answer } = dailyQuestions[examNode] 
        setShowQuestion(false)
        
        if (inputAnswer.trim().toLowerCase() === answer.toLowerCase()) {
            setDisappear(false) 
        } 
        
        setShowQuestion(true)
        moveQuestionNode()  
      
        setInputAnswer("")  
    }

   
    const handleInputAnswer = (event:React.ChangeEvent<HTMLInputElement>) => { 
        event.preventDefault()
        setInputAnswer(event?.target.value) 
    }

    useEffect(() => { 
    }, [inputAnswer])


    return (
    <CardContent className="flex flex-col items-center justify-start gap-4 p-0 w-full">
        <div className="w-full text-center font-sans text-xl sm:px-12 px-2 h-20">
            <AnimatePresence>
                {
                    toggle &&
                    <motion.div
                        initial = {{ opacity: 0 }}
                        animate = {{ opacity: 1 }}>
                        {
                             showQuestion && dailyQuestions[examNode].question
                        } 
                    </motion.div>
                }
            </AnimatePresence>
        </div>       
       
        <form className="flex gap-2">
            <input onChange={handleInputAnswer} value={inputAnswer}  type="text" className="m-0 font-semibold font-sans text-xl border-b-4 outline-none" /> 
            <Button onClick={handleAnswer} className="">Submit</Button>
        </form>    
            
        {
            !disappear && (  
                <div className='w-[140px] absolute '> 
                    <Lottie animationData={animateCheck}
                    loop={false}
                    onComplete={() => {
                        setDisappear(true)  
                    } 
                }
                    />
                </div>
            ) 
        }   
        {
            showWrong && (  
                <div className='w-[140px] absolute '> 
                    { dailyQuestions && dailyQuestions[examNode].answer }
                </div>
            ) 
        }   
    </CardContent> 
    )
}

export default DailyQuestions
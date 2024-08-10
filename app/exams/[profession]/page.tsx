"use client"

import Navbar from '@/components/Navbar'
import { Card } from '@/components/ui/card' 
import React, { useEffect, useState } from 'react'  
import { useQuery } from '@tanstack/react-query' 
import { useQuestionStore } from '@/app/state/questionStore'
import getQuestions from '../components/questions'
import { SelectedAnswerProps } from '@/app/types'
import { Button } from '@/components/ui/button'
import { UserAnswer } from '@/app/_types/types'
import ScoreBoard from '@/app/_components/scoreBoard' 
import { useAnswerStore } from '@/app/state/answerStore'
  
 
const page:React.FC = () => {  
     
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]) 
  const [done, setDone] = useState<boolean>(false)

  const { examQuestions, setQuestions } = useQuestionStore() 
  const { data: retrievedQuestions, isLoading } = useQuery({
    queryKey: ['questions'],
    queryFn: () => getQuestions()
  }) 

  useEffect(() => {  
    if (retrievedQuestions) {
      setQuestions(retrievedQuestions.data)
    }
  }, [retrievedQuestions])  
  
  const { userAnswersSession, setAnswers, clearAnswers } = useAnswerStore( state => ({
    userAnswersSession: state.userAnswersSession,
    setAnswers: state.setAnswers,
    clearAnswers: state.clearAnswers,
  }))

  const Submit = (event:React.MouseEvent<HTMLButtonElement>) => { 
    event.preventDefault()
    setDone(true) 
  } 

  const handleSelectAnswer = ({id, question, option}:SelectedAnswerProps) => {

    const answer = { id, question, option } 
    const getQuestionByUser = userAnswers.findIndex((item) => {
      return item.id === id
    })
    
    console.log(userAnswersSession)
    const currentQ = examQuestions.find((question) => question.id === id)  
    const isUserAnswerCorrect = currentQ?.answer === option
    
    const answerWithChecking = { ...answer, isCorrect: isUserAnswerCorrect }
    
    setAnswers({ ...answer, isCorrect: isUserAnswerCorrect})
    if (getQuestionByUser === -1) { 
      setUserAnswers(prev => ([...prev, answerWithChecking]))  
    } else {
      setUserAnswers(prev => (prev.map((ans) =>   
      ans.id !== id ? ans : { ...ans, option: option, isCorrect: isUserAnswerCorrect  } 
      )))
    }  
  }
   
  const isSelectedAnswer = (qId:string, qAns:string) => { 
    const getQuestionIndex = userAnswersSession.findIndex(question => question.id === qId) 
    if (getQuestionIndex === -1) return false 

    if (userAnswersSession[getQuestionIndex].option === qAns) return true
    return false  
  } 

  const resetAnswers = (event:React.MouseEvent<HTMLButtonElement>) => {  
    event.preventDefault() 
    clearAnswers() 
    setDone(false)
  } 

  return (
    <>
      <Navbar />
      <main className="pt-[72px] flex min-h-screen items-center justify-between ">
        <div className="w-full sm:w-[800px] mx-auto bg-white font-mono text-sm relative">  
          {
            done ? (
              <div className="bg-gray-100 px-4 py-2 rounded text-xs right-5 top-20 fixed w-[320px] flex flex-wrap"> 
                  <ScoreBoard userAnswers={userAnswers} />
              </div>

            ) : ""
          }
          
          <div className='font-semibold font-sans text-xl text-slate-700'>
            { isLoading ? 'Loading questions...' : (
              
              <div className='text-xl font-sans font-semibold mb-2'>History of Architecture II</div>
            ) }  
          </div>
          <div className="flex flex-col gap-2">
           
            { 
              examQuestions?.map((questionSet) => {  
                return (
                <>
                  <Card className="overflow-hidden p-4 sm:p-6" key={questionSet.id}> 
                    <div className="cursor-default mb-[32px] font-semibold text-slate-800">{questionSet.question}</div>
                    <div className="flex flex-wrap gap-1 my-3 cursor-default">{Array.isArray(questionSet.options) && questionSet.options.map((option, n) => (
                      <div
                        key={`${questionSet.id}-${n}`}
                        onClick={() => handleSelectAnswer({id: questionSet.id, question: questionSet.question, option:option})}
                        className={`w-full md:w-2/5 ${isSelectedAnswer(questionSet.id, option) ? 'bg-gray-300' : 'bg-gray-100'} px-2 py-1 rounded hover:bg-orange-400 transition duration-300 cursor-pointer`}>
                          {option}
                      </div>
                      ))}
                    </div>
                  </Card>
                </>
              )})
            } 
          {
            isLoading ? ""
            :  
              <>
                <div className='flex flex-col gap-1 my-2'>
                  <Button onClick={Submit}>Submit</Button> 
                  <Button onClick={resetAnswers}>Clear</Button> 
                </div>
              </> 
          }
           
          
        </div>
        </div>
      </main> 
    </>
  )
}

export default page

function setDone(arg0: boolean) {
  throw new Error('Function not implemented.')
}

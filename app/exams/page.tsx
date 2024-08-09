"use client"

import Navbar from '@/components/Navbar'
import { Card } from '@/components/ui/card'
import { questions } from '@/data/questions'
import React, { Suspense, useEffect, useState } from 'react' 
import getQuestions from './components/questions'
import { useQuery } from '@tanstack/react-query'
import { SelectedAnswerProps } from '../types'
import { useQuestionStore } from '../state/questionStore'

export interface Question { 
  id: string,
  question: string,
  options: string[],
  option: string,
  answer: string, 
  answerExplanation?: string
}

interface UserAnswer extends Partial<Question> {
  isCorrect?: boolean
}

const page = () => { 

  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]) 
  const handleSelectAnswer = ({id, question, option}:SelectedAnswerProps) => {

    const answer = { id, question, option } 
    const getQuestionByUser = userAnswers.findIndex((item) => {
      return item.id === id
    })
    
    const currentQ = theQuestions.find((question) => question.id === id)  
    const isUserAnswerCorrect = currentQ?.answer === option
    
    const answerWithChecking = { ...answer, isCorrect: isUserAnswerCorrect }
    
    if (getQuestionByUser === -1) { 
      setUserAnswers(prev => ([...prev, answerWithChecking]))  
    } else {
      setUserAnswers(prev => (prev.map((ans) =>   
      ans.id !== id ? ans : { ...ans, option: option, isCorrect: isUserAnswerCorrect  } 
      )))
    }  
  }

  const isSelectedAnswer = (qId:string, qAns:string) => { 

    const getQuestionIndex = userAnswers.findIndex(question => question.id === qId) 
    if (getQuestionIndex === -1) return false 

    if (userAnswers[getQuestionIndex].option === qAns) return true
    return false  
  } 

  const { theQuestions, setQuestions } = useQuestionStore()

  const { data: retrievedQuestions, isLoading } = useQuery({
    queryKey: ['questions'],
    queryFn: () => getQuestions()
  }) 

  useEffect(() => {  
    if (retrievedQuestions) {
      setQuestions(retrievedQuestions.data)
    }
  }, [retrievedQuestions]) 

  return (
    <>
      <Navbar />
      <main className="pt-[72px] flex min-h-screen items-center justify-between ">
        <div className="w-full sm:w-[800px] mx-auto bg-white font-mono text-sm relative">  
          { isLoading ? 'Loading questions...' : "" }  
          <div className="flex flex-col gap-2">
          <Suspense fallback={<span className='font-semibold text-slate-800'>Fetching...</span>}> 
            { 
              theQuestions?.map((questionSet) => {  
                return (
                <>
                  <Card className="overflow-hidden" key={questionSet.id}> 
                    <div className="bg-slate-200 px-4 py-2 cursor-default">{questionSet.question}</div>
                    <div className="flex flex-wrap gap-1 px-6 py-3 cursor-default">{Array.isArray(questionSet.options) && questionSet.options.map((option, n) => (
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
          </Suspense> 
          {/* <Submit userAnswers={userAnswers} setDone={setDone} /> */}
        </div>
        </div>
      </main> 
    </>
  )
}

export default page
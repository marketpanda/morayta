"use client"

import Glowingbutton from "@/components/Glowingbutton"; 
import Navbar from "@/components/Navbar";
import UserGreetText from "@/components/UserGreetText";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"; 
import Image from "next/image";
import { useEffect, useState } from "react";

interface Question { 
  id: string,
  question: string,
  choices: string[],
  answer: string,
  option?: string,
  answerExplanation?: string
}

interface UserAnswer extends Partial<Question> {
  isCorrect?: boolean
}


export default function Home() {

 

  const questions:Question[] = [
    {
      id: "74b26123-bf3d-4aa6-8fb5-6f86b8d9032e",
      question: 'In 1933, He Founded Philippine Architects Society (PAS) Which was later called Philippine Institute of Architects (PIA) in 1945.',
      choices: ['Juan Nakpil', 'Francisco Mañosa', 'Leandro Locsin', 'Juan Arellano'],
      answer: 'Juan Nakpil'
    },
    {
      id: "faf1fa26-8db7-4359-9d06-c4c4cf5ea7dc",
      question: 'Which of the three pyramid of Giza is the biggest?',
      choices: ['Khufu', 'Cheops', 'Khafre'],
      answer: 'Khufu'
    },
    {
      id: "962539aa-1318-40a9-95fc-3f90140e3442",
      question: 'Designed by Angel Nakpil, this is the High Rise Building in the Philippines',
      choices: ['Manila Peninsula', 'Manila Hotel', 'Burke Building', 'Picache Building'],
      answer: 'Picache Building'
    },
    {
      id: "bcae8d8f-db9c-4eac-8fb2-0d3e5a77e0ec",
      question: 'Considered as the most beautiful street?',
      choices: ['Taj Mahal Road', 'Shibuya Crossing', 'The Line', "Champs Elysees"],
      answer: 'Champs Elysees'
    },
    {
      id: '5932f002-709b-4d24-9808-0be4f3343ca5',
      question: 'A gallery or arcade above the arches of the nave, choir, and transepts of a church.',
      choices: ['Nave', 'Triforium', 'Aisle', 'Ambulatory'],
      answer: 'Triforium'
    },
    {
      id: 'f6e95131-6d08-4548-b57f-ddd4b84ef610',
      question: 'Architect of the Iglesia ni Cristo Central',
      choices: ['Juan Nakpil', 'Carlos Santos Viola', 'Juan Arellano', 'Pablo Antonio'],
      answer: 'Carlos Santos Viola'
    },
    {
      id: 'a53344b0-40bf-4275-a4db-606cfc450de2',
      question: 'When is summer solstice?',
      choices: ['June 21', 'May 28', 'July 21', 'May 21'],
      answer: 'June 21'
    },
    {
      id: '788a3f49-b873-43db-9ec1-5b3e90bda4ea',
      question: 'First to design the St Peter\'s Basilica in the form of a Greek Cross. His design form is to have a central dome be surrounded by four lower domes at the diagonal axes.',
      choices: ['Antoni Gaudi', 'Donato Bramante', 'Marcus Vitruvius Pollio', 'Simone da Orsenigo'],
      answer: 'Donato Bramante'
    },
    {
      id: '3ed44378-9099-4afc-bf80-c76010cce338',
      question: 'Architect of the first manila City Hall',
      choices: ['Edgar Bourne', 'Antonio Toledo', 'Juan Nakpil', 'Leandro Locsin'],
      answer: 'Edgar Bourne'
    },
  ]
  interface SelectedAnswerProps {
    id: string,
    question: string,
    option: string
  }

  interface ScoreBoardProps {
    display: string,
    percentage: string
  }
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([])

  const [done, setDone] = useState<boolean>(false)

  const handleSelectAnswer = ({id, question, option}:SelectedAnswerProps) => {
    const answer = { id, question, option }
    
    const getIndex = userAnswers.findIndex((item) => {
      return item.id === id
    })

    const currentQ = questions.find((question) => question.id === id) 
    const isUserAnswerCorrect = currentQ?.answer === option
    
    const answerWithChecking = {...answer, isCorrect: isUserAnswerCorrect}
    
    if (getIndex === -1) { 
      setUserAnswers(prev => ([...prev, answerWithChecking]))  
    } else {
      setUserAnswers(prev => (prev.map(ans =>   
        ans.id !== id ? ans : { ...ans, option: option, isCorrect: isUserAnswerCorrect  } 
      )))
    }
    
  }

  const isSelectedAnswer = (qId:string, qAns:string) => {
     
    const getQuestionIndex = userAnswers.findIndex(question => question.id === qId)
    if (getQuestionIndex === -1) return false

    if ( userAnswers[getQuestionIndex].option === qAns) return true
    return false

    // userAnswers[getQuestionIndex].
  }

  const ScoreBoard = () => {
    const countScores = (userAnswers:UserAnswer[]):ScoreBoardProps => {
      const score = userAnswers.filter((answer) => answer.isCorrect === true)
  
      return  {
        display:`${score.length} / ${ questions.length }`,
        percentage: ((score.length / questions.length) * 100).toFixed(2)
      } 
    }

    const { display, percentage } = countScores(userAnswers)
    return (
      <> 
        {
          done ? (
            <>
              <div className="font-semibold">You just finished the exam : { display } </div>
              <div className="font-bold text-slate-800 text-2xl">You score { `${percentage} %` }</div>

            </>
          ) :
          ""
        }
        {
          // userAnswers.length ? (
          //   <pre>{JSON.stringify(userAnswers, null, 2)}</pre>
          // ) : ""
        }
      </>
    )
  }
  
  interface SubmitProps { 
    userAnswers: UserAnswer[]
    setDone: (done: boolean) => void
  }

  const Submit:React.FC<SubmitProps> =({ userAnswers, setDone }) => {
    const handleClick = () => {
      setDone(true)
    }

    return (
      <Button onClick={handleClick}>Submit</Button>
    )
  }

  useEffect(() => { 
    console.log(userAnswers)
  }, [userAnswers]) 
  
  return (
    <>
      <Navbar />
      <main className="pt-[72px] flex min-h-screen items-center justify-between ">
        <div className="w-full sm:w-[800px] mx-auto bg-white font-mono text-sm relative">
        <div className="bg-gray-100 px-4 py-2 rounded text-xs right-5 top-20 fixed w-[320px] flex flex-wrap"> 
          <ScoreBoard />
        </div>
          
          {/* <Glowingbutton /> */} 
          
          <div className="flex flex-col gap-2">
          
            {
              questions.map((questionSet) => { 
              
                return (
                <>
                  <Card className="overflow-hidden" key={questionSet.id}>

                    <div className="bg-slate-200 px-4 py-2 cursor-default">{questionSet.question}</div>
                    <div className="flex flex-wrap gap-1 px-6 py-3 cursor-default">{Array.isArray(questionSet.choices) && questionSet.choices.map((option) => (
                      <div
                        onClick={() => handleSelectAnswer({id: questionSet.id, question: questionSet.question, option:option})}
                        className={`w-full md:w-2/5 ${isSelectedAnswer(questionSet.id, option) ? 'bg-gray-300' : 'bg-gray-100' }  px-2 py-1 rounded hover:bg-orange-400 transition duration-300 cursor-pointer`}>
                          {option}
                      </div>
                      ))}
                    </div>
                  </Card>
                </>
              )})
            }
            
            <Submit userAnswers={userAnswers} setDone={setDone} />
          </div>
        </div>
      </main>
    </>
  );
}

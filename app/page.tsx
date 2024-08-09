"use client" 
import Glowingbutton from "@/components/Glowingbutton"; 
import Navbar from "@/components/Navbar";
import UserGreetText from "@/components/UserGreetText";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";  
import Image from "next/image";  
import { useEffect, useState } from "react"; 
import SelectDemo from "@/components/Select";
import groupStuyStudents from "@/assets/group_study_students.jpg"
import { useRouter } from "next/navigation";
 

export interface Question { 
  id: string,
  question: string, 
  answer: string,
  options?: string[],
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
      options: ['Juan Nakpil', 'Francisco Mañosa', 'Leandro Locsin', 'Juan Arellano'],
      answer: 'Juan Nakpil'
    },
    {
      id: "faf1fa26-8db7-4359-9d06-c4c4cf5ea7dc",
      question: 'Which of the three pyramid of Giza is the biggest?',
      options: ['Khufu', 'Cheops', 'Khafre'],
      answer: 'Khufu'
    },
    {
      id: "962539aa-1318-40a9-95fc-3f90140e3442",
      question: 'Designed by Angel Nakpil, this is the High Rise Building in the Philippines',
      options: ['Manila Peninsula', 'Manila Hotel', 'Burke Building', 'Picache Building'],
      answer: 'Picache Building'
    },
    {
      id: "bcae8d8f-db9c-4eac-8fb2-0d3e5a77e0ec",
      question: 'Considered as the most beautiful street?',
      options: ['Taj Mahal Road', 'Shibuya Crossing', 'The Line', "Champs Elysees"],
      answer: 'Champs Elysees'
    },
    {
      id: '5932f002-709b-4d24-9808-0be4f3343ca5',
      question: 'A gallery or arcade above the arches of the nave, choir, and transepts of a church.',
      options: ['Nave', 'Triforium', 'Aisle', 'Ambulatory'],
      answer: 'Triforium'
    },
    {
      id: 'f6e95131-6d08-4548-b57f-ddd4b84ef610',
      question: 'Architect of the Iglesia ni Cristo Central',
      options: ['Juan Nakpil', 'Carlos Santos Viola', 'Juan Arellano', 'Pablo Antonio'],
      answer: 'Carlos Santos Viola'
    },
    {
      id: 'a53344b0-40bf-4275-a4db-606cfc450de2',
      question: 'When is summer solstice?',
      options: ['June 21', 'May 28', 'July 21', 'May 21'],
      answer: 'June 21'
    },
    {
      id: '788a3f49-b873-43db-9ec1-5b3e90bda4ea',
      question: 'First to design the St Peter\'s Basilica in the form of a Greek Cross. His design form is to have a central dome be surrounded by four lower domes at the diagonal axes.',
      options: ['Antoni Gaudi', 'Donato Bramante', 'Marcus Vitruvius Pollio', 'Simone da Orsenigo'],
      answer: 'Donato Bramante'
    },
    {
      id: '3ed44378-9099-4afc-bf80-c76010cce338',
      question: 'Architect of the first manila City Hall',
      options: ['Edgar Bourne', 'Antonio Toledo', 'Juan Nakpil', 'Leandro Locsin'],
      answer: 'Edgar Bourne'
    },
  ]
  

  interface ScoreBoardProps {
    display: string,
    percentage: string
  }
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([])
  const router = useRouter()

  const [done, setDone] = useState<boolean>(false)

 
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

    const [data, setData] = useState<any | null>(null)
    

    const testHandle = async() => {

      try { 
        const response = await fetch('/api')
        // const response = await fetch('/api/basicQuery')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const result  = await response.json() 
        console.log(result)
        setData(result)  
      } catch (err) {
        setData((err as Error).message)
      }
    }

    return (
      <>
        <Button onClick={handleClick}>Submit</Button>
        <Button onClick={testHandle}>{data ? "Success" : "Test"}</Button>
      </>
    )
  }

  useEffect(() => { 
    console.log(userAnswers)
  }, [userAnswers]) 

  const [subject, setSubject] = useState("")
    
  useEffect(() => {
      console.log("subject ", subject)
  }, [subject])

  const handleTakeExam = (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault() 
    subject
      ? router.push(`/exams/${subject}`)
      : router.push(`/exams/`)   
  }
  
  return (
    <>
       
      <Navbar />
     
      <main className="pt-[72px] flex min-h-screen items-center justify-between ">
        <div className="w-full sm:w-[800px] mx-auto bg-white font-mono text-sm relative">
        <div className="bg-gray-100 px-4 py-2 rounded text-xs right-5 top-20 fixed w-[320px] flex flex-wrap"> 
          <ScoreBoard />
        </div>
        <Card className="p-2 mb-2 h-[200px] overflow-hidden">
          <CardContent className="flex justify-center">
            <Image className="w-1/2" alt="Morayta Review Exam" src={groupStuyStudents} width={300} height={200} />
          </CardContent>
        </Card>
        <Card className="p-2 mb-2 flex justify-center">
          <CardContent className="w-full sm:w-1/2">
          <div className="text-xl font-semibold font-sans  mt-5 mb-3">Take exam</div>
          
            <form action="handleTakeExam">

                <div className="grid gap-4"> 
                <SelectDemo subject={subject} setSubject={setSubject} />

                <Button type="submit" className="w-full" onClick={handleTakeExam}>
                  Start
                </Button>
                
                
                </div>
            </form>
            
          </CardContent>
        </Card>
          
          {/* <Glowingbutton /> */} 
          
         
        </div>
      </main>

       
    </>
  );
}

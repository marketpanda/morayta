"use client"  
import Navbar from "@/components/Navbar"; 
import { Card, CardContent } from "@/components/ui/card";  
import Image from "next/image";  
import { useState } from "react";  
import groupStudyStudents from "@/assets/group_study_students.jpg"
import { useRouter } from "next/navigation";
import SelectSubject from "@/components/Select"; 
import { Button } from "@/components/ui/button"; 

export default function Home() {   
  
  const router = useRouter()  
  const [subject, setSubject] = useState("") 

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
          <Card className="p-2 mb-2 h-[200px] overflow-hidden">
            <CardContent className="flex justify-center">
              <Image className="w-1/2" alt="Morayta Review Exam" src={groupStudyStudents} width={300} height={200} />
            </CardContent>
          </Card>
          <Card className="p-2 mb-2 flex justify-center">
            <CardContent className="w-full sm:w-1/2"> 
              <div className="text-xl font-semibold font-sans  mt-5 mb-3">Take exam</div> 
              <form action="handleTakeExam"> 
                  <div className="grid gap-4"> 
                    <SelectSubject subject={subject} setSubject={setSubject} /> 
                    <Button type="submit" className="w-full" onClick={handleTakeExam}>
                      Start
                    </Button> 
                  </div>
              </form> 
            </CardContent>
          </Card>  
        </div>
      </main> 
    </>
  );
}

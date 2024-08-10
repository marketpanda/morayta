import { questions } from "@/data/questions"
import { UserAnswer } from "../_types/types"
import { useState } from "react"

interface CountScoreProps {
    display: string,
    percentage: string
}

const ScoreBoard = ({ userAnswers } : { userAnswers: UserAnswer[]}) => {
    
    const [done, setDone] = useState<boolean>(true) 

    const countScores = (userAnswers:UserAnswer[]):CountScoreProps => {
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
      </>
    )
  }
  export default ScoreBoard
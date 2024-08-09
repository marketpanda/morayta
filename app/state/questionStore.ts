import { Question } from "../page"
import { create } from 'zustand'
type QuestionStoreType = {
    theQuestions: Question[],
    setQuestions: (theQuestions: Question[]) => void
}
 
export const useQuestionStore = create<QuestionStoreType>((set) => ({
    theQuestions:[],
    setQuestions: (theQuestions) => set({theQuestions})
}))
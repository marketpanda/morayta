import { create } from 'zustand'
import { Question } from '../_types/types'

type QuestionStoreType = {
    examQuestions: Question[],
    setQuestions: (examQuestions: Question[]) => void
}
 
export const useQuestionStore = create<QuestionStoreType>((set) => ({
    examQuestions:[],
    setQuestions: (examQuestions) => set({examQuestions})
}))


import { create } from "zustand" 
import { UserAnswer } from "../_types/types"

type AnswerStoreType = {
    userAnswersSession: UserAnswer[],
    setAnswers: (newAnswer:UserAnswer) => void,
    clearAnswers: () => void
}

export const useAnswerStore = create<AnswerStoreType>((set) => ({
    userAnswersSession: [],
    setAnswers: (newAnswer) => set((state) => {
        // id, question, option 
        const findQuestion = state.userAnswersSession.findIndex((question) => question.id === newAnswer.id )

        if (findQuestion === -1) {
            return ({
                userAnswersSession: [ ...state.userAnswersSession, newAnswer ] 
            })
        } 
        
        // user changes answer
        const existingAnswerChange = state.userAnswersSession.map((ans) => ans.id !== newAnswer.id
            ? ans : { ...ans, option: newAnswer.option, isCorrect: newAnswer.isCorrect })
        return ({
            userAnswersSession: existingAnswerChange
        })
    }),
    clearAnswers: () => { set({ userAnswersSession: [] })},
}))
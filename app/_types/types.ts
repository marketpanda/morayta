export interface Question { 
    id: string,
    question: string, 
    answer: string,
    options?: string[],
    option?: string,
    answerExplanation?: string
}
  
export interface UserAnswer extends Partial<Question> {
    isCorrect?: boolean
} 
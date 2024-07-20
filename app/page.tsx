import Image from "next/image";

interface Question {
  
  question: string,
  choices?: string[],
  answer: string,
  answerExplanation?: string
}


export default function Home() {

  const questions:Question[] = [
    {
      question: 'What is the most beautiful street?',
      choices: ['Taj Mahal Road', 'Shibuya Crossing', 'The Line'],
      answer: 'Champs Elysee'
    },
    {
      question: 'Which of the three pyramid of Giza is the biggest?',
      choices: ['Khufu', 'Cheops', 'Khafre'],
      answer: 'Khufu'
    },
    {
      question: 'Designed by Angel Nakpil, this is the High Rise Building in the Philippines',
      choices: ['Manila Peninsula', 'Manila Hotel', 'Burke Building', 'Picache Building'],
      answer: 'Pichache Building'
    }
  ]
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col">

          {
            questions.map((question, i) => (
              <>
                <div className="bg-orange-300 rounded p-2 cursor-default">{question.question}</div>
                <div className="flex flex-col p-4 cursor-default">{Array.isArray(question.choices) && question.choices.map((q) => (
                  <div>{q}</div>
                ))}</div>
              </>
            ))
          }
        </div>
      </div>
    </main>
  );
}

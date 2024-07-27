import Navbar from '@/components/Navbar'
import React from 'react'

export default function page() {
  return (
    <>
    <Navbar />
    <main className="pt-[72px] flex min-h-screen justify-between">
      <div className="w-full mt-[160px] sm:w-[600px] mx-auto bg-white font-mono text-sm">
      Welcome to Morayta. Your online board exam reviewer. Currently, I am working on Architecture Board Exam questions and wish to expand it to other categories/professions
      in the future should this all goes well. <br/><br/>
      Users will be allowed to contribute questions, to be examined by the community. I am planning to turn this into a collaborative platform in lieu of traditional solitary studying.
      My goal is to help you guys pass the board as I help you to provide a platform for question and answers.
      You can contact me at jrdollesin@gmail.com
      </div>
    </main>
    </>
  )
}

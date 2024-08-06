import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {

  return (
    <>
      <Navbar />
      <main className="pt-[72px] flex min-h-screen items-center justify-between ">
        <div className="w-full sm:w-[800px] mx-auto bg-white font-mono text-sm relative">
        Single Subject, actual exam
        </div>
      </main>

    </>
  ) 
}

export default page
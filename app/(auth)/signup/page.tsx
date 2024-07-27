import React from 'react'
import { SignupForm } from './components/SignupForm' 
import { createClient } from '@/lib/server'
import { redirect } from 'next/navigation'

export default async function page() {
  const supabase = createClient()
  const { data } = await supabase.auth.getSession()

  if (data.session) {
    redirect("/")
  } 
  return (
    <div className='flex h-screen items-center bg-gray-100'><SignupForm /></div>
  )
}

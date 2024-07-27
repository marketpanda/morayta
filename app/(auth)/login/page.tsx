import React from 'react'
import { LoginForm } from './components/LoginForm'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/server'


export default async function Login() {

  const supabase = createClient()
  const { data } = await supabase.auth.getSession()

  if (data.session) {
    redirect("/")
  } 
  return (
    <div className='flex items-center justify-center bg-gray-100 h-screen'>
      <LoginForm  />
    </div>
  )
}

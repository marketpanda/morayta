"use client"

import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/client'
import React, { useEffect } from 'react'

export default function page() {
  const login = async() => {
    console.log('logging in ...')
    await createClient().auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000"
      }
    })
  }

  useEffect(() => {
    const session = createClient().auth.getSession()
     console.log(session)
  }, [])
  
  return (
    <div>
      <Button onClick={login}>Login</Button>
    </div>
  )
}

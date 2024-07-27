"use client"
import { signOut } from '@/lib/auth-action'
import { createClient } from '@/lib/client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button' 
import UserGreetText from './UserGreetText'

const LoginLogoutButton = () => {
    const [user, setUser] = useState<any>(null)
    const router = useRouter()
    const supabase = createClient()

    useEffect(() => {
        const fetchUser = async() => {
            const { data: { user }} = await supabase.auth.getUser()
            setUser(user)
        }
        fetchUser()
    }, [])

    if (user) {
        return (
            <>
                <div className='flex gap-4'>

                    <UserGreetText />
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {                    
                            signOut()
                            setUser(null)
                    }}>Logout</Button>
                </div>
            </>
        )
    }
    return (
        <>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => { router.push("/signup") }}
            >Register</Button>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => { router.push("/login") }}
            >Login</Button>
        </>
    )
}

export default LoginLogoutButton
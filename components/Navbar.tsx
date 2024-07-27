import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import LoginLogoutButton from './LoginLogoutButton'
import UserGreetText from './UserGreetText'

export default function Navbar() {
  return (
    <div className='z-10 w-full bg-slate-300 font-semibold p-2 fixed sm:shadow-[0_0_7px_rgb(0,0,0,0.8)] h-14 flex items-center'>
        <div className='flex sm:w-[800px] w-full gap-2 mx-auto justify-between'> 
            <div>
                <Link href="/" passHref>
                    <Button variant="ghost" size="sm">Home</Button>
                </Link>
                <Link href="/about" passHref>
                    <Button variant="ghost" size="sm">About</Button>
                </Link>
            </div>
            <div>
                <LoginLogoutButton />
            </div>
        </div> 
    </div>
  )
}

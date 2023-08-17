"use client"
import Link from "next/link"
import { signIn, signOut, useSession, getProviders} from 'next-auth/react';

const Navbar= () => {

  // const { data: session } = useSession();
const logOut = () => {
  const confirm = window.confirm("Are you sure you want to logout?")
  if(confirm){
    signOut()
  }
}

  return (
    <nav className='bg-blue-600 text-white  py-4'>
        <ul className="flex space-x-4">
          <Link href="/">
            <li>Home</li>
          </Link>
            <button type="button" onClick={() => signIn()}>SignIn</button>
          
            <button type="button" onClick={logOut}>SignOut</button> 
          
          <Link href="/">
            <li>Server</li>
          </Link>
          <Link href="/">
            <li>Client</li>
          </Link>
          <Link href="/extra">
            <li>Extra</li>
          </Link>
        </ul>
    </nav>
  )
}

export default Navbar
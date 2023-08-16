import Link from "next/link"

const Navbar= () => {
  return (
    <nav className='bg-blue-600 text-white  py-4'>
        <ul className="flex space-x-4">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/">
            <li>SignIn</li>
          </Link>
          <Link href="/">
            <li>SignOut</li>
          </Link>
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
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <ul className='flex justify-center gap-x-10 py-5 items-start bg-gray-100'>
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/services'>Services</Link></li>
      <li><Link href='/packages'>Packages</Link></li>
      <li><Link href=''>Search Address</Link></li>

      {/* <li href='/' className='cursor-pointer'>Home</li>
      <a href='/services' className='cursor-pointer'>Services</a>
      <a href='/packages' className='cursor-pointer'>Packages</a>
      <a className='cursor-pointer'>Search Address</a> */}
    </ul>
  )
}

export default Navbar

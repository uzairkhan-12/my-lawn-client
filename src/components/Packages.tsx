import { getPackages } from '@/redux/actions/packages'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'

const Packages = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getPackages())
  // },[])
  return (
    <div>
      <Navbar />
      <div>
        <button onClick={() => {router.push('/add-package')}} className='border p-3 bg-gray-100 rounded-md mt-10 float-right mr-10'>Add Package</button>
      </div>
      <p className='text-3xl mt-10'>Packages List</p>
    </div>
  )
}

export default Packages

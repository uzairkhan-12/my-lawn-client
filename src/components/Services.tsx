import { getServices } from '@/redux/actions/services'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'

const Services = () => {
  const dispatch:any = useDispatch()
  const services = useSelector((state:any) => state.services.services)
  useEffect(() => {
    dispatch(getServices())
  },[])
    const { push } = useRouter();
    function navigateToAddService(){
        push('/addService')
    }
  return (
    <div>
      <Navbar />
      <div className='w-full'>
        <button onClick={navigateToAddService} className='border p-3 bg-gray-100 rounded-md mt-10 float-right mr-10 mb-10'>Add Service</button>
      </div>
      <div className='grid grid-rows-1 md:grid-cols-3 xl:grid-cols-5 gap md:gap-y-0 gap-x-5 w-full px-10'>
        {services && services.map((x:any) => {
          return(
            <div className='bg-gray-50 border border-gray-100 rounded-md flex flex-col gap-y-3 p-4 w-56 mb-10'>
              <p>{x.serviceName}</p>
              <p>{x.servicePrice}</p>
              <p>{x.serviceDescription}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services

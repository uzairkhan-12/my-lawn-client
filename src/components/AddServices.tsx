import { setAlert } from '@/redux/actions/alert'
import { addService } from '@/redux/actions/services'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Alert from './Alert'
import Navbar from './Navbar'

const AddServices = () => {
  const [service,setService] = useState({
    serviceName:'',
    servicePrice:'',
    serviceDescription:'',
    servicePic:''
  })
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const message = useSelector((state:any) => state.alert.alertMessage)
  const dispatch:any = useDispatch()
  const router = useRouter()

  function handleAddService(){
    if(!service.serviceName || !service.servicePrice || !service.serviceDescription){
      return dispatch(setAlert('All fields are required','error'))
    }
    dispatch(addService(service,router))
  }
  const handleChange = (e:any) => {
    setService((prev:any) => ({...prev, [e.target.name]:e.target.value}))
  }
  return (
    <div>
      <Navbar />
      {message && <Alert />}
      <div className='flex items-center justify-center'>
        <div className='px-28 gap-y-5 flex flex-col items-center mt-10 bg-gray-50 border border-gray-200 rounded-md p-10'>
          <p className='text-3xl'>Add Service</p>
          <div className='flex flex-col w-full'>
          <label className='mb-1'>Service Name</label>
          <input onChange={handleChange} name="serviceName" className='border border-gray-500 rounded-md selected:border-gray-600 p-2'/>
          </div>
          <div className='flex flex-col w-full'>
          <label className='mb-1'>Service Price</label>
          <input onChange={handleChange} name="servicePrice" className='border border-gray-500 rounded-md p-2'/>
          </div>
          <div className='flex flex-col w-full'>
          <label className='mb-1'>Image</label>
          <input onChange={handleChange} name="servicePic" type="file" className='border border-gray-500 rounded-md p-2'/>
          </div>
          <div className='flex flex-col w-full'>
          <label className='mb-1'>Description</label>
          <textarea onChange={handleChange} name="serviceDescription" className='border border-gray-500 rounded-md p-2'/>
          </div>
          
          <button onClick={handleAddService} className='bg-blue-500 text-white px-10 py-2 rounded-md border border-blue-300'>Add</button>
        </div>
      </div>
    </div>
  )
}

export default AddServices

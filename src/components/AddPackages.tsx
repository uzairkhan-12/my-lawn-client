import addPackage from '@/pages/add-package'
import { setAlert } from '@/redux/actions/alert'
import { dispatchPackage } from '@/redux/actions/packages'
import { getServices } from '@/redux/actions/services'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Alert from './Alert'
import Navbar from './Navbar'

const AddPackages = () => {
  const [selectedServicesState,setSelectedServices] = useState<any>([])
  const [packageName,setPackageName] = useState('')
  const [packagePrice,setPackagePrice] = useState('')
  const router = useRouter()
  const dispatch:any = useDispatch()
    const services = useSelector((state:any) => state.services.services)
    const errorMessage = useSelector((state:any) => state.alert.alertMessage)
    console.log({services})
    useEffect(() => {
      if(services.length === 0){
        dispatch(getServices())
      }
    },[])

    function handleSelectService(id:any){
      let selectedService = getSelectedService(id)
        // console.log({selectedService})
        if (selectedService) {
            console.log('if is calling')
            const tempServie = selectedServicesState.filter((x:any) => x.service === id)
            console.log("temp service: ",tempServie)
            setSelectedServices(tempServie);
            return            
        }
            console.log('else is calling')
        setSelectedServices((current:any) => [...current, {service:id , quantity:1}]);
    }
    function getSelectedService(id:any){
      let selectedService = selectedServicesState.find((x:any) => x.service === id)
      console.log({selectedService})
      return selectedService
  }
  console.log("selectedServices ",selectedServicesState)
  function handleServicesQuantityInc(id:any){
      let selectedService = getSelectedService(id)
      selectedService = {...selectedService, quantity: selectedService.quantity+1}
      const temp_services = selectedServicesState.map((serv:any)=>{
          if (serv.service===id) {
              return selectedService
          }
          return serv
      })
      setSelectedServices(temp_services)
  }
  function handleServicesQuantityDec(id:any){
          let selectedService = getSelectedService(id)
          if (selectedService.quantity <=1) {
              const temp_services = selectedServicesState.filter((serv:any)=>serv.service !== id)
              setSelectedServices(temp_services)
              return                
          }
          selectedService = {...selectedService, quantity: selectedService.quantity-1}
          const temp_services = selectedServicesState.map((serv:any)=>{
              if (serv.service===id) {
                  return selectedService
              }
              return serv
          })
          setSelectedServices(temp_services)
  }
  function handleSubmit(){
    if(!packageName || !packagePrice){
      return dispatch(setAlert('all inputs are required','error'))
    }
    if(selectedServicesState.length < 2){
      return dispatch(setAlert('select at least 2 services','error'))
    }
    dispatch(dispatchPackage({packageName,packagePrice,services:selectedServicesState},router))
  }
  return (
    <div>
      <Navbar />
      {errorMessage && <Alert />}
      <div className=' flex items-center justify-center mt-5'>
      <div className='w-1/3 p-10 flex flex-col gap-y-3 bg-gray-300 rounded-md'>
        <div className='flex justify-between items-center px-10'>
          <label className='mb-1 text-gray-800'>Package Name</label>
          <input value={packageName} onChange={(e) => setPackageName(e.target.value)} name="packageName" className='border border-gray-500 rounded-md selected:border-gray-600 p-2'/>
        </div>
        <div className='flex justify-between items-center px-10'>
          <label className='mb-1 text-gray-800'>Package Price</label>
          <input type="number" value={packagePrice} onChange={(e) => setPackagePrice(e.target.value)} name="packagePrice" className='border border-gray-500 rounded-md selected:border-gray-600 p-2'/>
        </div>
        <div className='grid grid-cols-3'>
        {services && services.map((service:any) => {
            return(<div className=' flex flex-col w-full mb-3 p-5'>
                    <p className='mb-2 text-gray-900'>{service.serviceName}</p>
                    
                    {!getSelectedService(service._id) && <button onClick={() => handleSelectService(service._id)} className='border border-gray-800 rounded-md bg-white px-4 text-gray-800'>Select</button> }
                    {getSelectedService(service._id) ?
                    <div className="bg-blue-500 text-white px-3 mt-1 flex flex-row-reverse justify-between rounded-md"> 
                        <button onClick={()=>handleServicesQuantityInc(service._id)}> + </button>
                        <p className="mx-2">{getSelectedService(service._id).quantity}</p>
                        <button onClick={()=>handleServicesQuantityDec(service._id)}> - </button>
                    </div>
                    
                    : null
                    }
                   </div>)  
        })}
        </div>
        <button onClick={handleSubmit} className='bg-blue-800 text-gray-50 px-5 py-2 rounded-md'>Add Package</button>
      </div>
    </div>
    </div>
  )
}

export default AddPackages

import React from 'react'
import { useSelector } from 'react-redux'

const Alert = () => {
    const message = useSelector((state:any) => state.alert.alertMessage)
    const alertType = useSelector((state:any) => state.alert.alertType)
    console.log({alertType})
  return (
    <div className={`uppercase ${alertType === 'error' ? 'text-red-900':'bg-red-900' } ${alertType === 'error' ? 'bg-red-300':'bg-green-300' } rounded-sm mx-32 p-2 mt-10 absolute w-60 flex items-center justify-center`}>
      <p>{message}</p>
    </div>
  )
}

export default Alert

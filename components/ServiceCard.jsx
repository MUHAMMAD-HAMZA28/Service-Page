import React from 'react'
import { FaLaptopCode } from "react-icons/fa6";//22.5

const ServiceCard = ({logo,title,description}) => {
  return (
    <div className='w-75 h-76 rounded-md ml-22.5 mt-12 mb-2.5 text-center bg-blue-50 shadow-md p-2'>
      <img src={logo} alt="icons" className='w-30 mt-1 ml-19'/>
        <h2 className='text-xl font-bold mt-2 mb-1'>{description}</h2>
        <p>{title}</p>
        <button className='bg-blue-500 text-amber-50 text-center mt-3.5 p-1 rounded-2xl px-5 cursor-pointer hover:bg-black'>Click Here</button>
    </div>
  )
}

export default ServiceCard
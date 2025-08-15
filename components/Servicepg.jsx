import React from 'react'
import ServiceCard from './ServiceCard'

const Servicepg = () => {
  return (
    <div className='h-max'>
        <h1 className='text-center mt-8 font-bold text-4xl text-slate-800'>Our <span className='text-blue-400'>Services</span></h1>
        <p className='text-center mt-3 text-slate-600'>We build solutions that work for you from idea to reality fast,smart and relaiable.</p>
        <div className='flex flex-wrap'>
        <ServiceCard description={"Web Development"} title={"Custom web development to your business goals.We build fast,scalable and user friendly websites."} logo={"/src/assets/development.png"}/>
        <ServiceCard description={"App Development"} title={"Custom app development to your business goals.We build fast and scalable apps."} logo={"/src/assets/app.png"}/>
        <ServiceCard description={"Digital Marketing"} title={"Digital marketing in your business and display your products online.And runs add of your bussiness and products."} logo={"/src/assets/digital-marketing.png"}/>
        <ServiceCard description={"UI/UX Design"} title={"Beautiful designs for your website that attracts other due to itns beautiful and great design."} logo={"/src/assets/design.png"}/>
        <ServiceCard description={"Cloud Computing"} title={"Providing cloud services.Migrate,manage and transform with our cloud solutions."} logo={"/src/assets/cloud.png"}/>
        <ServiceCard description={"Bug Bounty"} title={"Check and fixes the bug from websites.And make websites more reliable,fast and secure."} logo={"/src/assets/bugbounty.png"}/>
        </div>
        <p className='text-center mt-3 mb-7 text-slate-600 texl'>Want to see us in action?</p>
        <button className='bg-gray-800 text-amber-50 mb-5 ml-138 p-1 rounded-2xl px-5 cursor-pointer hover:bg-black'>Get in touch now</button>
    </div>
  )
}

export default Servicepg
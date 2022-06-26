import React from 'react'

const AboutCard = (props) => {
  return (
    <div className='flex flex-col px-8 py-12 text-left border rounded-2xl'>
    <div>
      <div className='bg-[#ff950a] inline-flex p-2 rounded-full'>
        {props.icon}
      </div>
      <h3 className='py-4 text-xl font-bold'>{props.heading}</h3>
      <p>
        {props.text}
      </p>
    </div>
  </div>
  )
}

export default AboutCard
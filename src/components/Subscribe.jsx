import React from 'react'
import kubek1 from '../assets/red10.jpg';
import kubek2 from '../assets/red11.jpg';
import kubek3 from '../assets/red12.jpg';

const Subscribe = () => {
  return (
    <div className='w-full px-4 py-16 text-center text-white bg-black'>
        <h1>Join Web3 Family</h1>
        <div className='py-4'>
            <input className='p-3 mr-4 rounded-3xl' type="email" placeholder='Enter your email' />
            <button>Sign Up</button>
        </div>
        <div className='flex items-center justify-center py-9 '>
            <input className='mr-3 ' type="checkbox"/>
            <p>Yes, I agree to get Newsletter from RedBull Web3 Agency. WAGMI</p>
        </div>
<div className='container mx-auto'>
  <div className='grid grid-cols-3 gap-4'>

    <img className=' max-w-[450px]' src={kubek1} alt="/bullweb3" />
    
    <img className='max-w-[450px]' src={kubek2} alt="/bullweb3" />

    <img className=' max-w-[450px]'  src={kubek3} alt="/bullweb3" />


      
    </div>
    </div>
    </div>
  );
  }

export default Subscribe
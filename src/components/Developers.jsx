import React from 'react';
import terminal from '../assets/terminal.gif'

const Developers = () => {
  return (
    <div className='w-full text-white bg-black'>
      <div className='max-w-[1240px] mx-auto px-5 py-5'>
        <div>
          <h1 className='text-center'>Superpowers for Web3 developers.</h1>
          <h1 className='text-center text' >   ----------------------------- </h1>
          <p className='text-center text'>                                  
            Checkout the <span className="px-2 justify blue">SUPERPOWER OF WEB3</span>, the real guide to show your journey to become </p>
            <p className='text-center text'>
              <span className="px-1 justify blue">Web3 expert</span>and grow your networking in crypto, blockchain and Web3 space.
          </p>

          
        </div>
        <div className='flex justify-center w-full py-8'>
            <img className='max-w-[600px] shadow-lg shadow-cyan-500/50' src={terminal} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Developers;

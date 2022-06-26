import React from 'react';
import logo from '../assets/bull3.png';
import heroVid from '../assets/video.mp4';
import kubek1 from '../assets/kubek1.jpg';
import kubek2 from '../assets/kubek2.jpg';
import kubek3 from '../assets/kubek3.jpg';

const Hero = () => {
  return (
    <div className='w-full h-[85vh] top-[90px]'>
      <video
        className='absolute object-cover w-full h-full -z-10'
        src={heroVid}
        autoPlay
        loop
        muted
      />
      
      <div className='w-full h-[95%] flex flex-col justify-center items-center text-white px-4 text-center'>
    
      <img className='max-w-[600px]' src={logo} alt="/bullweb3" />
        <h1> </h1>

        <h1 className='py-2'>
          <span className2='blue'>Red Bull </span> Web3
        </h1>
        
        <p className='py-1.5 text-xxl'>
          Explore Web3 community, expierience, knowledge and grab even exclusive Airdrops & NFTs.
        </p>
        <div>
          <button className='m-2'>Jump in to Web3</button>
          
          <button className='m-2'>Mint 1 0f 1000 NFT</button>
        </div>
      </div>
      <div>
        <p className='text-2xl font-bold text-center text-white'>Our goal is to raise: $46,662.00</p>
        
     
      
      </div>
    </div>
  );
};

export default Hero;

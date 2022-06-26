import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='w-full h-[90px] bg-black'>
      <div className='max-w-[1240px] mx-auto px-7 flex justify-between items-center h-full'>
        
        <div>
          <h1 className='text-[#f8f8f8] px-20 py-0.1'>RedBull</h1>
          <h2 className='text-[#f01717] px-20 py-0.1'>Web3</h2>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex items-center text-white'>
            <li>BULK AIRDROPS</li>
            <li>Mint NFT</li>
            <li>Metaverse</li>
            <li>Discord</li>
            <button className='ml-4'>Connect Wallet</button>
          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
          
          
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 
    'absolute left-[-100%]'}>
          <ul>
            <li className='text-2xl'>Airdrop</li>
            <li className='text-2xl'>Web 3 Tutorials</li>
            <li className='text-2xl'>Metaverse</li>
            <li className='text-2xl'>NFTs</li>
            <button className='m-8'>Conect Wallet</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

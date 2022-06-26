import React from 'react'

const Footer = () => {
  return (
    <div className='py-4 text-center text-white bg-black'>
        <div className='max-w-[1240px] mx-auto px-4 grid grid-cols-4 lg:grid-cols-5'>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#ff3300] inline-block mt-1'>Blockchain</h3>
                <ul>
                    <li>Corda3</li>
                    <li>Hyperleger</li>
                    <li>Etherum Virtual Machine</li>
                    <li>Algorand</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#ff3300] inline-block mt-1'>NFTs</h3>
                <ul>
                    <li>Etherum</li>
                    <li>Solana</li>
                    <li>Algorand</li>
                    <li>Polygon</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#ff3300] inline-block mt-1'>Learing Web3</h3>
                <ul>
                    <li>App</li>
                    <li>Analytics</li>
                    <li>Token List</li>
                    <li>Defi</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#ff3300] inline-block mt-1'>Metaverse</h3>
                <ul>
                    <li>Sandbox</li>
                    <li>Decentraland</li>
                    <li>BLOK</li>
                    <li>Crypto.com</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#ff3300] inline-block mt-1'>Tech Stack</h3>
                <ul>
                    <li>React Native</li>
                    <li>Solidity</li>
                    <li>TypeScript</li>
                    <li>NodeJS</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
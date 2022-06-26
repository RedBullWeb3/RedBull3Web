import React from 'react';
import { SiBitcoin, SiEthereum } from 'react-icons/si';
import { FcStatistics, FcCurrencyExchange } from "react-icons/fc";
import AboutCard from './AboutCard';


const About = () => {
  return (
    <div className='w-full text-center text-white bg-black'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 '>
        <div>
          
          <h1 className='py-7'>Build your own Web3 App ! </h1>
          <p className='text-xl py-7'>
            Red Bull Web3 empowers developers, Web3 users,
            and crypto traders to participate in a growing decentralized school with mission to step in Web3 Full Time Job.
          </p>

          {/* Card Container */}
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>

            {/* Card */}
            <AboutCard icon={<SiBitcoin size={40} />} heading='Best knowlege about web3' text='Use decentralization, trusted nodes, premium data, and
        cryptographic proofs to connect highly accurate and available
        data/APIs to any smart contract.' />

            <AboutCard icon={<SiEthereum size={40} />} heading='Learn how connect to any API' text='Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.' />
            <AboutCard icon={<FcCurrencyExchange size={40} />} heading='Proven, ready-made solutions' text='Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.' />
            <AboutCard icon={<FcStatistics size={40} />} heading='Learn how to connect MetaMask wallet' text='Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers.' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

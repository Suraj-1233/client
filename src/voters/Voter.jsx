import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {  useContract } from "@thirdweb-dev/react";
import {Sidebar_client,Navbar} from '../componets';
import { Home, Winner} from '../pages';
import {  useContractRead } from "@thirdweb-dev/react";

import env from "react-dotenv";
import Verifyvoter from './Verifyvoter';

import Table from './Table';
import Liveness from './Liveness';


const Voter = () => {
  let d=env.API_URL;
  const { contract } = useContract(d);
  const { data, isLoadig } = useContractRead(contract, "votingStatus")

  return (
   
    <div className="relative sm:-8 p-4 bg-[#67e8f9] min-h-screen flex flex-row">
      
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar_client></Sidebar_client>
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        
       

        <Routes>
        <Route path="/" element={<Liveness/>} />

          <Route path="/giveVote" element={<Verifyvoter></Verifyvoter>} />
          <Route path="/winner" element={<Winner/>} />
         
          <Route path="/table" element={<Table/>} />
          <Route path="/liveness" element={<Liveness/>} />

         
        </Routes>

        
      </div>
      </div>
   
  )
}

export default Voter
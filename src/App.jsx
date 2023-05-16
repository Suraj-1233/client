import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {  useContract } from "@thirdweb-dev/react";
import { Sidebar, Navbar } from './componets';
import { CampaignDetails, Home, Winner, StartVoting,RemoveCandidates,RegisterCandidates, WhiteList} from './pages';
import {  useContractRead } from "@thirdweb-dev/react";

import env from "react-dotenv";


const App = () => {
  let d=env.API_URL;
  const { contract } = useContract(d);
  const { data, isLoadig } = useContractRead(contract, "votingStatus")

  return (
   
    <div className="relative sm:-8 p-4 bg-[#67e8f9] min-h-screen flex flex-row">
      
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
       

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Winner />} />
          <Route path="/RegisterCandidates" 
            
           element={data?<StartVoting/>:<RegisterCandidates />} />
           <Route path="/StartVoting" element={<StartVoting />} /> 
         
           
           <Route path="/RemoveCandidates" element={<RemoveCandidates />} /> 

          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/WhiteList" element={<WhiteList />} />
         
        </Routes>

        
      </div>
      </div>
   
  )
}

export default App
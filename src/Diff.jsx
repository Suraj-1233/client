import React from 'react'
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useAddress, useMetamask, } from '@thirdweb-dev/react';
import App from './App';
import Voter from './voters/Voter';

import env from 'react-dotenv';

function Diff() {

  let d=env.API_URL;
  const { contract } = useContract(d);
    const { data, isLoading } = useContractRead(contract, "owner")
    const address = useAddress();
      
console.log(data);
console.log(address);

const e=(data==address);


  if(e)
  {
return <App></App>;
  }
  else{
    return <Voter></Voter>;
  }

 
       
    
   
   
  
}

export default Diff
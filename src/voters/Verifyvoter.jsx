import React from 'react';
import { useContract, useContractWrite,useContractRead } from "@thirdweb-dev/react";
import { CustomButton ,Loader, Navbar} from '../componets';

import env from 'react-dotenv';
import { Winner } from '../pages';

function Verifyvoter() {

  let d=env.API_URL;
  const { contract } = useContract(d);
  const { mutateAsync: putVote, isLoading } = useContractWrite(contract, "putVote")
  const { data, isLoading1 } = useContractRead(contract, "getAllCandidate")

  const call = async (candidateAddress) => {
    try {
      const data = await putVote([ candidateAddress ]);
      console.info("contract call successs", data);
      alert(" thanks for your time");
    } catch (err) {
      console.error("contract call failure", err.message);
      
      alert(err);
      
    }
  }

console.log(data);

 
  

  return (
     <>
    
  
    <div className="flex flex-wrap	 md:flex-row flex-col-reverse justify-between mb-[35px] gap-5">
       
      {isLoading && <Loader />} 
     

       
    
    {
     
      data?.map(e => (
      <div>
         {e.name == '' ? " " :

          <div class="max-w-sm rounded overflow-hidden shadow-lg bg-[#fafaf9]">

            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2"> Name: {e.name}</div>
              
             
   
             <p>
             Age: { parseInt(e.age._hex, 16)}

             </p>
             

             <CustomButton 
              btnType="button"
             title={ 'Give Vote'}
              styles={  'bg-[#8c6dfd]'}
              handleClick={() => {call(e.candidateAddress) }}
             
              />


            
              


            </div>

          </div>

      }
      </div>

        ))
      
    }
    </div>
    </>
  )
}

export default Verifyvoter
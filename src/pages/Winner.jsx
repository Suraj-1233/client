import React, { useEffect } from 'react';
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { CustomButton, Loader } from '../componets';

import env from 'react-dotenv';

function Winner() {

  let d = env.API_URL;
  const { contract } = useContract(d);
  const { data, isLoading } = useContractRead(contract, "getAllWinner");

  const hexToDecimal = hex => parseInt(hex, 16);

 





  return (
    <div >
      <h1> Winner</h1>
      {isLoading && <Loader />}


    <div className="flex flex-wrap	 md:flex-row-reverse flex-col-reverse justify-between mb-[35px] gap-5">

      {data?.map(e => (
        <div>
        
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-[#fafaf9]">

                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2"> Name: {e.name}</div>
                  <p class="text-red-700 text-base">
                    address : {e.candidateAddress}



                  </p>
                  <p>
                    Registered: {e.registered ? 'Yes' : "No"}
                  </p>

                  <p>
                    Age: {parseInt(e.age._hex, 16)}

                  </p>
                  <p>
                    votes: {parseInt(e.votes._hex, 16)}

                  </p>








                </div>
              </div>
            
            </div>


        ))

      }

    </div>
    </div>
  )
}

export default Winner
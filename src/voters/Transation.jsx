import React from 'react';
import { useContract, useContractRead } from "@thirdweb-dev/react";

import env from 'react-dotenv';
import { Loader } from '../componets';

function Transation() {


  let d = env.API_URL;
  const { contract } = useContract(d);
const { data, isLoading } = useContractRead(contract, "TransationList");
console.log(data);
const date = new Date(1680881412);
console.log(date.toDateString());

  function Datetime( t)
  {
    const unixEpochTimeMS = t * 1000;
    const d = new Date(unixEpochTimeMS);
    // Careful, the string output here can vary by implementation...
    const strDate = d.toLocaleString("en-IS", {timeZone: 'Asia/Kolkata'});
return strDate;
  }




  return (
    
    <div>
       {isLoading && <Loader />}
   
 

    


    <div className="flex flex-col">
      <div className="-my-2 overflow-auto sm:-mx-6 lg:-mx-2">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                   form
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                   To
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date & time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                  
                  </th>
                  
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 ">
              {data?.map(e => (

              <tr  >
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                   {e.from}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {e.to}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                  
                     {Datetime(e.time)}


                  
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    
                  </th>
                  
                </tr>
  ))

}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
 


    
       
      


  </div>

  )
  
}

export default Transation
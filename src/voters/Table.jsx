import React from 'react'
import './table.css';

import { useContract, useContractRead } from "@thirdweb-dev/react";

import env from 'react-dotenv';
import { Loader } from '../componets';



function Table() {

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

  
<body class="flex items-center justify-center">
	<div class="container">
		<table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
			<thead class="text-white">
				<tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th class="p-3 text-left">From</th>
					<th class="p-3 text-left">To</th>
					<th class="p-3 text-left" width="110px">Date & Time</th>
				</tr>
				<tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th class="p-3 text-left">From</th>
					<th class="p-3 text-left">To</th>
					<th class="p-3 text-left" width="110px">Date & Time</th>
				</tr>
                <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th class="p-3 text-left">From</th>
					<th class="p-3 text-left">To</th>
					<th class="p-3 text-left" width="110px">Date & Time</th>
              </tr>
                <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th class="p-3 text-left">From</th>
					<th class="p-3 text-left">To</th>
					<th class="p-3 text-left" width="110px">Date & Time</th>
              </tr>
			</thead>
			<tbody class="flex-1 sm:flex-none">
            {data?.map(e => (
				<tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<td class="border-grey-light border hover:bg-gray-100 p-3">{e.from}</td>
					<td class="border-grey-light border hover:bg-gray-100 p-3 truncate">{e.to}</td>
					<td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 ">  {Datetime(e.time)}</td>
				</tr>
				
            ))}
                
			</tbody>
		</table>
	</div>
</body>


</div>
  )
}

export default Table
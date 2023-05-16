import React from 'react';
import "@thirdweb-dev/contracts/extension/ContractMetadata.sol";
import { useContractRead, useContract, Web3Button,useContractWrite, useMetadata } from "@thirdweb-dev/react";
import CustomButton from '../componets/CustomButton';
import { Loader } from '../componets';
import env from 'react-dotenv';
function StartVoting() {
  let d=env.API_URL;
  const { contract } = useContract(d);
  const { mutateAsync: startVoting, isLoading } = useContractWrite(contract, "startVoting");
  const { mutateAsync: stopVoting, isLoading1 } = useContractWrite(contract, "stopVoting");
  // const { mutateAsync: getWinner, isLoading111 } = useContractWrite(contract, "getWinner")


  const { data, isLoading2 } = useContractRead(contract,"votingStatus");





  // const call = async () => {
  //   try {
  //     const data = await getWinner();
  //     console.info("contract call successs", data);
  //     console.log(data.name);
  //     alert(" winner")
  //   } catch (err) {
  //     console.error("contract call failure", err);
  //   }
  // }



  const start = async () => {
    try {
      const data = await startVoting();
      console.info("contract call successs", data);
      alert('voting start');
    } catch (err) {
      console.error("contract call failure", err);
      alert('voting start error');
    }
  }
  const stop = async () => {
    try {
      const data = await stopVoting();
      console.info("contract call successs", data);
      alert('voting stop');
    }
     catch (err) {
      console.error("contract call failure", err);
      alert('voting  stop error');
    }
  }



      return (

        <div className="flex sm:flex-col flex-col justify-between mb-[30px] gap-16">
          {isLoading && <Loader />} 
         <div className="sm:flex hidden flex-row justify-start gap-4"> 
           
          <div className="sm:flex hidden flex-row justify-start gap-4"> 
            
          <CustomButton 
              btnType="button"
             title={ 'startVoting'}
              styles={  'bg-[#8c6dfd]'}
              handleClick={() => {start() }}
            />

             <CustomButton 
              btnType="button"
             title={ 'stopVoting'}
              styles={  'bg-[#8c6dfd]'}
              handleClick={() => {stop() }}
            /> 

            {/* <CustomButton 
              btnType="button"
             title={ 'winner'}
              styles={  'bg-[#8c6dfd]'}
              handleClick={() => {call() }}
            />  */}


             <CustomButton 
              btnType="button"
             title={ data?'yes':'No'}
              styles={  'bg-[#8c6dfd]'}
             
              />



           
            


</div>
</div>

          


            

          </div>
      );
    }
  
  


export default StartVoting
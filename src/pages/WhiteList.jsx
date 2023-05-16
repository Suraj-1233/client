import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {ethers} from'ethers';
import env from 'react-dotenv';
import { useContract, useContractWrite } from "@thirdweb-dev/react";


import { CustomButton,FormField, Loader } from '../componets';




function WhiteList() {

  let d=env.API_URL;
  const { contract } = useContract(d);
    const { mutateAsync: whiteListAddress, isLoading } = useContractWrite(contract, "whiteListAddress")
  const call = async (_voterAddress) => {
    try {
      const data = await whiteListAddress([ _voterAddress ]);
      console.info("contract call successs", data);
      alert('voter verify');
    } catch (err) {
      console.error("contract call failure", err);
      alert('voter verify');
    }
  }

  const navigate = useNavigate();

  const [form, setForm] = useState({
    
    _candidateAddress: '',
   
  });
  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();


  };
  

  return (

    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white"> Verify voter</h1>
      </div>
      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Your Voter Address *"
            placeholder="x056ghbjckbthigydgtigurbg"
            inputType="text"
            value={form._candidateAddress}
            handleChange={(e) => handleFormFieldChange('_candidateAddress', e)} />  
        </div>
        
       <div className="flex justify-center items-center mt-[40px]">
          <CustomButton
            btnType="submit"
            title="Verify"
            styles="bg-[#1dc071]"
            handleClick={() => {call(form._candidateAddress) }}
            />
        </div>
      </form>
    </div>







  );
}

export default WhiteList


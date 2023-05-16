import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { useContract, useContractWrite,useContractRead } from "@thirdweb-dev/react";


import { CustomButton, FormField, Loader } from '../componets';
import env from 'react-dotenv';



function RemoveCandidates() {
    let d=env.API_URL;
    const { contract } = useContract(d);
    const { datawinner, isLoading111 } = useContractRead(contract, "getAllWinner");

    const { mutateAsync: removeCandidates, isLoading1 } = useContractWrite(contract, "removeCandidates")
  const RemoveCandidates = async () => {
    try {
      const data = await removeCandidates([ form._candidateAddress ]);
      console.info("contract call successs", data);
      alert("successs");


    } catch (err) {
      console.error("contract call failure", err);
      alert("fail");
    }
  }



    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
       
       
        _candidateAddress: '',

    });
    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();


    };
    console.log(form);
    console.log(datawinner);

    return (

        <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
            {isLoading1 && <Loader />}
            <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
                <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Remove  Candicate</h1>
            </div>



            <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
                <div className="flex flex-wrap gap-[40px]">

                    <FormField
                        labelName="Your Address *"
                        placeholder="x056ghbjckbthigydgtigurbg"
                        inputType="text"
                        value={form._candidateAddress}
                        handleChange={(e) => handleFormFieldChange('_candidateAddress', e)} />
                        
</div>


                    <div className="flex justify-center items-center mt-[40px]">
                        <CustomButton
                            btnType="submit"
                            title="Remove Candicate"
                            styles="bg-[#1dc071]"
                            handleClick={() => { RemoveCandidates() }}
                        />
                    </div>
            </form>
        </div>







    );
}

export default RemoveCandidates


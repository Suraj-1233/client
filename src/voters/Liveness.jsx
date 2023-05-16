import axios from "axios";
import React,{useEffect, useState} from "react";
import { CustomButton } from "../componets";
import Verifyvoter from '../voters/Verifyvoter'


export default function Liveness() 
{
  const [liveness1, setliveness1] = React.useState(null);
  const [Emotion, setEmotion] = React.useState(null);
  const [num,setNum]=React.useState(3);
  

  const [isLoading, setIsLoading] = useState(false)


  const liveness = ()=>{
    axios.get('http://localhost:5000/liveness')
    .then(response => {
      
      setEmotion(Emotion=>response.data[0])
      setliveness1(liveness1=>response.data[1])
       setNum(num=>num-1)

    })
    .catch(error => {
      console.error(error);
    });
   

 }
 
const buttonHandler = () => {
     if(num>0)
     { 
  setIsLoading(current => !current)
  setNum(num=>num-1)


  console.log(isLoading) // is false 
     }
}





  
  

 


  return (
    <div>
       <h1> {num} </h1>


{
    ((Emotion==='fearless') && (liveness1==='real'))?
        
    <Verifyvoter></Verifyvoter>

     
     
     :
    (num>0)?
    
    <CustomButton 
    btnType="button"
    title={ ' Verify you are real'}
    styles={  'bg-[#8c6dfd]'}
    handleClick={liveness}
    />

    :
    <h1> contact with your admin </h1>
      
      
}


            









      
    </div>
  );
}
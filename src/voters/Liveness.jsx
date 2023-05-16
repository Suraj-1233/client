import axios from "axios";
import React from "react";
import { CustomButton } from "../componets";


export default function Liveness() {
  const [real, setReal] = React.useState(null);
  const [Emotion, setEmotion] = React.useState(null);



  const liveness = ()=>{
    axios.get('http://localhost:5000/liveness')
    .then(response => {
      console.log(response)
      setReal(response.data)
    })
    .catch(error => {
      console.error(error);
    });
   

 }
 const  emotion= ()=>{
  axios.get('http://localhost:5000/emotion')
  .then(response => {
    console.log(response)
    setEmotion(response.data)
  })
  .catch(error => {
    console.error(error);
  });
 

}

 


  return (
    <div>
      <h1>verify yourself first</h1>
      <br></br>
      <br></br>
      <h1>{Emotion}       </h1> 
      <h1>{real}</h1>


      <CustomButton 
              btnType="button"
             title={ ' Verify you are real'}
              styles={  'bg-[#8c6dfd]'}
              handleClick={liveness}
             
              />
               <CustomButton 
              btnType="button"
             title={ ' Emotion'}
              styles={  'bg-[#8c6dfd]'}
              handleClick={emotion}
             
              />

      
    </div>
  );
}
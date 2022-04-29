import React from 'react'

const survey = () => {
<<<<<<< HEAD
  const likertOptions = [
    
    {
    question: "What is your opinion of this park?",
    responses: [
      { value: 1, text: "Bad" },
      { value: 2, text: "Poor" },
      { value: 3, text: "Average", checked: true },
      { value: 4, text: "Good" },
      { value: 5, text: "Excellent" }
    ]  
  },
  {
    question: "What is your feedback of the current state of this Park?",
    responses: [
      { value: 1, text: "Bad" },
      { value: 2, text: "Poor" },
      { value: 3, text: "Average", checked: true },
      { value: 4, text: "Good" },
      { value: 5, text: "Excellent" }
    ]  
  },

];
  const onChange = (val,likertOptions) => {
    console.log( likertOptions, val);}
  return (<>
    <div style={{height:50}}> <Likert onChange = {(val)=>onChange(val,likertOptions[0])} {...likertOptions[0]} /></div>  
    <div style={{height:50}}> <Likert onChange = {onChange} {...likertOptions[0]} /></div> 
    </>)
=======
  return (
    <div>survey</div>
  )
>>>>>>> 69f1ffad5bab10d5d8b857c4f6e0914d995225f1
}

export default survey

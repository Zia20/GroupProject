import React from 'react'
import Likert from 'react-likert-scale';
import "./survey.css"

// https://www.npmjs.com/package/react-likert-scale

const survey = () => {
  const likertOptions = {
    question: "What is your opinion of the President’s performance?",
    responses: [
      { value: 1, text: "Abysmal" },
      { value: 2, text: "Poor" },
      { value: 3, text: "Average", checked: true },
      { value: 4, text: "Good" },
      { value: 5, text: "Excellent" }
    ],
    onChange: val => {
      console.log(val);
    }
  };
return (
<div style={{height:250}}> <Likert {...likertOptions} /></div>
  )
}


export default survey

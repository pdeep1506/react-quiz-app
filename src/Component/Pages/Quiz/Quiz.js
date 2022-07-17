import React, { useEffect, useState } from 'react'
import './Quiz.css'
const Quiz = ({name,questions,score,setscore,setquestions}) => {

  const [options,setoptions]= useState(0)
  const [currques, setcurrques] = useState(0)

  useEffect(()=>{
    // console.log(questions)

    setoptions(
      questions && handleShuffle([
        questions[currques].correct_answer, ...questions[currques].incorrect_answer
      ])
    )
  },[])
  const handleShuffle = (options)=>{
    return options.sort(()=> Math.random() - 0.5)
  }
  return (
    <div>Quiz</div>
  )
}

export default Quiz
import React, { useEffect, useState } from 'react'
import './Quiz.css'
import { CircularProgress } from '@mui/material'
import Question from '../../Questions/Question'
const Quiz = ({name,questions,score,setscore,setquestions}) => {

  const [options,setoptions]= useState(0)
  const [currques, setcurrques] = useState(0)

  useEffect(()=>{
    
    setoptions(
      questions && handleShuffle([
        questions[currques].correct_answer, ...questions[currques].incorrect_answers
      ])
    )
  },[questions,currques])
  // console.log('options',options)
  const handleShuffle = (options)=>{
    return options.sort(()=> Math.random() - 0.5)
  }
  return (
    <div className='quiz'>
      <span className='subtitle'>Welcome, {name}</span>
      {
        questions?(
          <>
          <div className='quizInfo'>
            <span>{questions[currques].category}</span>
            <span>Score: {score}</span>
            </div>
            <Question currques={currques}
              setcurrques={setcurrques} questions={questions}
              options={options} score={score} setscore={setscore}
              correct={questions[currques].correct_answer}
              setquestions={setquestions}
            ></Question>
            </>
          ):(
            <div>
            <CircularProgress style={{margin:100}} color='inherit' size={150} thickness={3}></CircularProgress>
          </div>
        )
      }
    </div>
  )
}

export default Quiz
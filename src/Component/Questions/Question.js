import { Button } from '@mui/material'
import React,{useState} from 'react'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import './Question.css'
import {useNavigate} from 'react-router-dom'
const Question = ({questions,setcurrques,currques,setquestions,correct,setscore,score,options}) => {
    const navigate = useNavigate()
    const [selected, setselected] = useState()
    const [error, seterror] = useState(false)

    const handleSelect = (item)=>{
        if(selected === item && selected === correct){
            
            return 'select';
        }
        else if(selected === item && selected !== correct){
            return 'wrong'
        }
        else if(item === correct){
            return 'select'
        }

        
    }
    const handleCheck = (item)=>{
       setselected(item)
       if(item === correct){
        setscore(score+1)
        seterror(false)
       }
    }
    const handleNext  = ()=>{
        if(currques>13){
            navigate('/result')
        }
        else if(selected){
            setcurrques(currques+1)
            setselected()
        }
        else{
            seterror('Please select an option first')
        }
    }
  return (
    <div className='question'>
        <h1>Question {currques + 1}</h1>

        <div className='singleQuestion'>
            <h2>{questions[currques].question}</h2>

            <div className='options'>
            { error && <ErrorMessage>{error}</ErrorMessage>}
            {
                options && options.map((item,index)=>{
                    return <button onClick={()=>{handleCheck(item)}} className={`singleOption ${selected && handleSelect(item)}`} key={index} disabled={selected}>
                    {item}</button>
                })
            }
            </div>

            <div className='controls'>
                <Button variant='contained' color='secondary' size='large' style={{width:185}} onClick={()=> navigate('/')} >Quit</Button>
                <Button size='large' variant='contained' color='primary' style={{width:185}} onClick={()=> handleNext()}>Next Question</Button>
            </div>
        </div>
    </div>
  )
}

export default Question
import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import  { useNavigate } from 'react-router-dom'
import './Result.css'
const Result = ({name,score}) => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!name || !score){
      navigate('/')
    }
  },[])
  return (
    <div className='result'>
      <span className='title'>Final Score :{score}</span>
      <Button
      variant='contained' color='secondary' size='large' style={{
        alignSelf:'center', marginTop:'10'
      }} onClick={()=> navigate('/')}>
      Home
      </Button>
    </div>
  )
}

export default Result
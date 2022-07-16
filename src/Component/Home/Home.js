import { TextField,MenuItem,Button } from '@mui/material'
import React,{useState} from 'react'
import quiz from '../../images/quiz.svg'
import './Home.css'

import Categories from '../../Data/Category'
import  Difficulty  from '../../Data/Difficulties'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
const Home = () => {
  const [category, setcategory] = useState('')
  const [difficulty, setdifficulty] = useState('')
  const [name, setname] = useState('')
  const [error, seterror] = useState('')
  // console.log(category,difficulty)
  const handleSubmit = ()=>{
    if(!name || !difficulty || !category){
      console.log(error)
      seterror(true)
    }
    else{
      console.log(error)
      seterror(false)
    }
  }
  return (
    <div className='content'>
      <div className='settings'>
      {error && <ErrorMessage>Please Fill All Fields</ErrorMessage>}
        <span style={{fontSize:30}}>Quiz Settings</span>

        <div className='settings_select'>
          <TextField label='Enter Your Name' style={{marginTop:25}} variant='outlined' onChange={(e)=>setname(e.target.value)}>
          </TextField>

          <TextField select label='Select Category' variant='outlined'
          style={{marginTop:25}} onChange={(e)=> setcategory(e.target.value)}>
          {Categories.map((cat) => (
            <MenuItem key={cat.category} value={cat.value}>
              {cat.category}
            </MenuItem>
          ))}
          </TextField>


          <TextField select label='Select Difficulty' variant='outlined'
          style={{marginTop:25}} onChange={(e)=>{ setdifficulty(e.target.value)}}>
          {
            Difficulty.map((diff)=>(
              
              <MenuItem key={diff.Key} value={diff.value}>{diff.key}</MenuItem>
            ))
          }
          </TextField>

          <Button variant="contained"
          color="primary"
          size="large"
          onClick={()=>handleSubmit()} style={{marginTop:'30px'}}>Start Quiz!</Button>
        </div>
      </div>
      
      <img src={quiz}  className='banner' alt='quiz img+'></img>
      
      </div>
      )
}

export default Home
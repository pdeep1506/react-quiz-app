import React from 'react'
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from '@mui/material';

const Footer = () => {
    
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
          

            <Button>
            <a href='https://www.linkedin.com/in/pdeep1506' target='_blank'>
            <LinkedInIcon></LinkedInIcon>
            </a>
            </Button>

           
    </div>
  )
}

export default Footer
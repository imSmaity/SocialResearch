import React from 'react'
import {Box, Typography, TextField, Button} from '@mui/material'
import axios from 'axios';

const SignUp = ({signup,style}) => {
  const {handleClose,setIsSignUp}=signup;
  const [data,setData]=React.useState({name:'',email:'',password:'',rpass:''})

  const handleData=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const signUp=()=>{

    if(data.password===data.rpass){
      axios.post('https://socialresearch.herokuapp.com/signup',{
        name:data.name,
        email:data.email,
        password:data.password
      })
      .then(
        (res)=>{
          handleClose()
          console.log(res.data);
        }
      )
      .catch()
    }
    else{
      alert("Enter correct password")
    }
  }

  return (

    <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h5">Sign Up</Typography>
        <TextField fullWidth sx={{mt:2}} id="standard-basic" label="Enter Name" name='name' onChange={handleData} variant="standard" />
        <TextField fullWidth sx={{mt:2}} id="standard-basic" label="Enter E-mail" name='email' onChange={handleData} variant="standard" />
        <TextField type='password' fullWidth sx={{mt:2,mb:2}} id="standard-basic" name='password' onChange={handleData} label="Enter Password" variant="standard" />
        <TextField type='password' fullWidth sx={{mt:2,mb:2}} id="standard-basic" name='rpass' onChange={handleData} label="Re-enter Password" variant="standard" />
        <Button variant='outlined' sx={{mt:4}} onClick={signUp}>Sign Up</Button>
        <Button variant='outlined' sx={{mt:4,ml:1.5}} onClick={()=>setIsSignUp(false)}>Cancel</Button>
    </Box>
  )
}

export default SignUp;
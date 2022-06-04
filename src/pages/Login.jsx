import React from 'react'
import {Modal, Box, Typography, TextField, Button} from '@mui/material'
import SignUp from './SignUp'
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

export const Login = ({isLogin,setIsLogin}) => {
  const [isSignUp,setIsSignUp]=React.useState(false)
  const [data,setData]=React.useState({email:'',password:''})

    const handleData=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
    }
    const handleClose=()=>{
      setIsLogin(false)
      setIsSignUp(false)
    }
    const handleSignUp=()=>{
      setIsSignUp(true)
    }

    const Login=()=>{
      axios.post('https://socialresearch.herokuapp.com/login',data)
      .then(
        (res)=>{
          handleClose()
          console.log(res.data);
        }
      )
      .catch()
    }
  return(
    <Modal
    open={isLogin}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
      {
        !isSignUp?
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
            Login
            </Typography>
            <Box>
                <TextField fullWidth sx={{mt:2}} id="standard-basic" label="E-mail" onChange={handleData} name='email' variant="standard" />
                <TextField type='password' fullWidth sx={{mt:2,mb:2}} id="standard-basic" onChange={handleData} name='password' label="Password" variant="standard" />
                Don't have an account? 
                <Typography component={'span'} color='blue' onClick={handleSignUp}> Sign Up</Typography>
                
                <Typography component='div'>
                    <Button variant='outlined' sx={{mt:4}} onClick={Login}>Login</Button>
                </Typography>
            </Box>
        </Box>:
        <SignUp signup={{handleClose,setIsSignUp}} style={style}/>
      }
    </Modal>
  )
}



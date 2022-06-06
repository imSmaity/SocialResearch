import React, { useContext } from 'react'
import { AppBar } from '../pages/home/style/Style'
import MenuIcon from '@mui/icons-material/Menu';
import {Button} from '@mui/material'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Login } from '../pages/Login';
import { useEffect } from 'react';
import { UserContext } from '../App';

const Navbar = ({open,handleDrawerOpen}) => {
  const [isLogin,setIsLogin]=React.useState(false)
  const USER_STATE=useContext(UserContext)
  const {state,dispatch}=USER_STATE

  useEffect(()=>{
    if(!state.payload){
      handleOpen()
    }
    else{
      setIsLogin(false)
    }
  },[state])
  const handleOpen=()=>{
    setIsLogin(true)
  }
  const logOut=()=>{
    dispatch({payload:false})
    handleOpen()
  }
  return (
    <AppBar position="fixed" sx={{boxShadow:0, background:'orange'}} open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' } ),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1,textAlign:'left' }}>
            SocialResearch
          </Typography>
          <Button color="inherit" onClick={logOut}>{!state.payload?'Login':'Logout'}</Button>
          <Login isLogin={isLogin} setIsLogin={setIsLogin}/>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar
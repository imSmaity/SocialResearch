import React from 'react'
import { AppBar } from '../pages/home/style/Style'
import MenuIcon from '@mui/icons-material/Menu';
import {Button} from '@mui/material'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Login } from '../pages/Login';

const Navbar = ({open,handleDrawerOpen}) => {
  const [isLogin,setIsLogin]=React.useState(false)

  const handleOpen=()=>{
    setIsLogin(true)
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
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1,textAlign:'left' }}>
            
          </Typography>
          <Button color="inherit" onClick={handleOpen}>Login</Button>
          <Login isLogin={isLogin} setIsLogin={setIsLogin}/>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar
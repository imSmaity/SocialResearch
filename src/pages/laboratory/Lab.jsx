import { useContext, useState } from 'react'
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import Material from './Material'
import Description from './Description'
import Goal from './Goal'
import axios from 'axios'
import {UserContext} from '../../App'
import { useEffect } from 'react'

const Lab=({data,setData})=>{
    const [isCompleted,setIsCompleted]=useState(false)
    const [material,setMaterial]=useState({title:'',name:''})
    const USER_STATE=useContext(UserContext)
    const {state,dispatch}=USER_STATE

    useEffect(()=>{
      if(state.activeResearch){
        setData(state.activeResearch)
      }
    },[state,setData])

    const handleResearch=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setData({...data,[name]:value})
    }
    const addNewLine=()=>{
      setMaterial({title:'',name:''})
      setData({...data,materials:[...data.materials,{title:'',name:[]}]})
    }
  
    const complate=()=>{
      setIsCompleted(true)
      axios.post(process.env.REACT_APP_API_URL+'/activeresearch',{email:state.email,data})
      .then((res)=>{
        dispatch({payload:true,...res.data.user})
      })
    }
    const share=()=>{
      const research={email:state.email,data:{
        ...data,
        user_id:state.email,
        name:state.name,
        upVote:[],
        downVote:[],
        comments:[],
        date:new Date().toUTCString()
      }}
      axios.post(process.env.REACT_APP_API_URL+'/post',research)
      .then((res)=>{
        if(res.data.success){
          dispatch({payload:true,...res.data.user})
        }
      })
    }
    return(
      <Box>
        <TextField
          sx={{mt:3}}
          fullWidth
          name='title'
          id="outlined-multiline-flexible"
          label="Title"
          disabled={isCompleted}
          value={data.title}
          onChange={handleResearch}
        />
        <Goal data={data} isCompleted={isCompleted} handleResearch={handleResearch}/>
        <Description data={data} isCompleted={isCompleted} handleResearch={handleResearch}/>
        <Button sx={{mt:3}} disabled={isCompleted} onClick={addNewLine}>Add New Line</Button>
        <Material isCompleted={isCompleted} materialData={{data,setData,material,setMaterial}}/>
        {
          isCompleted?
          <>
            <Button variant="contained" color='warning' sx={{mt:3}} onClick={()=>setIsCompleted(false)}>Edit</Button>
            <Button variant="contained" sx={{mt:3,ml:1}} onClick={share}>Share</Button>
          </>:
          <Button variant="contained" sx={{mt:3}} onClick={complate}>Complate</Button>
        }
        
      </Box>
    )
  }



  export default Lab;
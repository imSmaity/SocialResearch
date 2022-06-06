import { Box, Button, Grid, Modal,TextField,Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { UserContext } from '../App';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    maxHeight:'35rem',
    overflow:'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

const PostView = ({open,handleClose,data,setData}) => {
    const [isLiked,setIsLiked]=useState({up:false,down:false})
    const [comme,setComme]=useState('')
    const USER_STATE=useContext(UserContext)
    const {state}=USER_STATE

    useEffect(()=>{
        const userId=state.email
        let i=data.upVote.map(v=>v.uId).indexOf(userId)
        let j=data.downVote.map(v=>v.uId).indexOf(userId)
        if(i!==-1) setIsLiked({up:true,down:false}) 
        if(j!==-1) setIsLiked({up:false,down:true}) 
    },[])
    
    const upVote=()=>{
        const userId=state.email
        let i=data.upVote.map(v=>v.uId).indexOf(userId)
        let j=data.downVote.map(v=>v.uId).indexOf(userId)
        if(i===-1 && j===-1) setIsLiked({up:true,down:false});
        else if(i===-1) setIsLiked({up:true,down:false})
        axios.post(process.env.REACT_APP_API_URL+'/reaction',{email:userId,id:data.id,user_id:data.user_id,action:'up'})
        .then((res)=>{
            console.log(res.data);
        })
        axios.get(process.env.REACT_APP_API_URL+"/allpost")
        .then(res=>{
        setData({
            isLoading:false,
            data:res.data
        })
        })
    }
    const downVote=()=>{
        const userId=state.email
        let i=data.upVote.map(v=>v.uId).indexOf(userId)
        let j=data.downVote.map(v=>v.uId).indexOf(userId)
        if(i===-1 && j===-1) setIsLiked({up:false,down:true})
        else if(i===-1) setIsLiked({up:false,down:true})
        axios.post(process.env.REACT_APP_API_URL+'/reaction',{email:userId,id:data.id,user_id:data.user_id,action:'down'})
        .then((res)=>{
            console.log(res.data);
        })
        axios.get(process.env.REACT_APP_API_URL+"/allpost")
        .then(res=>{
        setData({
            isLoading:false,
            data:res.data
        })
        })

    }
    const handleComment=(e)=>{
        setComme(e.target.value)
    }
    const comment=()=>{
        axios.post(process.env.REACT_APP_API_URL+'/reaction',{email:state.email,id:data.id,comment:comme,user_id:data.user_id,action:''})
        .then(()=>{
            setComme('')
        })
        axios.get(process.env.REACT_APP_API_URL+"/allpost")
        .then(res=>{
        setData({
            isLoading:false,
            data:res.data
        })
        })
    }
  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <CloseIcon onClick={handleClose} sx={{float:'right',width:40,height:40,mt:-2}}/>
            <Grid container>
                <Grid item xs={1}>
                    <Button disabled={isLiked.up}  onClick={upVote}><ArrowDropUpIcon sx={{width:70,height:70,mb:-2.5}}/></Button><br/>
                        <Typography variant="h6" sx={{ml:4.5,}} component="h2">{data.upVote.length-data.downVote.length}</Typography>
                    <Button disabled={isLiked.down} onClick={downVote}><ArrowDropDownIcon sx={{width:70,height:70,mt:-2.5}}/></Button>
                </Grid>
                <Grid item xs={7} sx={{p:.5}}>
                    <Typography id="modal-modal-title" variant="h5" component="h2">{data.title}</Typography>
                    <Typography component={'p'}>
                        {data.description}
                    </Typography>
                </Grid>
                <Grid item xs={4} sx={{p:.5}}>
                    Comments
                    {
                        data.comments.map(c=>{
                            return (
                                <Box key={c.id} sx={{display:'flex',mt:1,boxShadow:1}}>
                                    <Typography sx={{p:.3}}>{c.reply}</Typography>
                                </Box>
                            )
                        })
                        
                    }
                    
                    <Box sx={{display:'flex',mt:4}}>
                        <TextField
                            id="outlined-multiline-static"
                            label='Type your Comment'
                            value={comme}
                            onChange={handleComment}
                        />
                        <Button variant='outlined' sx={{ml:.5}} onClick={comment}>Reply</Button>
                    </Box>
                    
                </Grid>
            </Grid>
        </Box>
    </Modal>
  )
}

export default PostView
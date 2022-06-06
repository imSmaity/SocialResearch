import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { UserContext } from '../App'

const Dashboard = () => {
  const [total,setTotal]=useState({share:0,research:0,tshare:0,vote:0})
  const USER_STATE=useContext(UserContext)
  const {state}=USER_STATE

  useEffect(()=>{
    if(state.payload){
      const share=state.posts&&state.posts.length;
      const research=state.posts&&state.posts.length+1;
      const tshare=state.posts&&Math.max(...(state.posts.map(p=>p.upVote.length))) // fix point
      let vote=0;
      state.posts && state.posts.forEach(p=>{
        vote+=p.upVote.length+p.downVote.length
      })
      setTotal({share,research,tshare,vote})
    }
  },[state])

  return (
    <Container maxWidth='sm'>
      <Grid container sx={{mt:10,textAlign:'center'}} spacing={2}>
        <Grid item xs={6}>
          <Box sx={{backgroundColor:'lightgreen',p:5,borderRadius:3,boxShadow:3}}>
            <Typography variant='h5' component={'h2'}>{total.share}</Typography>
            <Typography variant='h5' component={'h2'}>Total Share</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{backgroundColor:'lightblue',p:5,borderRadius:3,boxShadow:3}}>
            <Typography variant='h5' component={'h2'}>{total.tshare}</Typography>
            <Typography variant='h5' component={'h2'}>Trending Share</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{backgroundColor:'lightsalmon',p:5,borderRadius:3,boxShadow:3}}>
            <Typography variant='h5' component={'h2'}>{total.vote}</Typography>
            <Typography variant='h5' component={'h2'}>Total Vote</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{backgroundColor:'yellow',p:5,borderRadius:3,boxShadow:3}}>
            <Typography variant='h5' component={'h2'}>{total.research}</Typography>
            <Typography variant='h5' component={'h2'}>Total Research</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Dashboard

// TotalPost 
//Research
// Vote
//Trending Post
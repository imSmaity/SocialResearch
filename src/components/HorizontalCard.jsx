import {Typography } from '@mui/material'
import React from 'react'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import PostView from './PostView';



const HorizontalCard = ({data,setData,i}) => {
  const [open,setOpen]=useState(false)

  const handleOpen=()=>{
    setOpen(true)
  }
  const handleClose=()=>{
    setOpen(false)
  }

  return (
    <>
      <Card sx={{ display: 'flex', boxShadow:1,mt: i!==0&&2}} onClick={handleOpen}>
        <Box>
          <CardContent>
            <Typography  xs={12}>{data.upVote.length+data.downVote.length} Votes</Typography>
            <Typography  xs={12}>{data.comments.length} Comments</Typography>
          </CardContent>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography variant='h6' container={'div'}>{data.title}</Typography>
            <Typography variant="subtitle1" sx={{textAlign:'right'}} color="text.secondary" component="div">
              {data.name} {new Date(data.date).toLocaleString()}
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <PostView open={open} handleClose={handleClose} data={data} setData={setData}/>
    </>
  )
}

export default HorizontalCard

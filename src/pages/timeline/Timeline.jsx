import React from 'react'
import {Grid} from '@mui/material'
import {HorizontalCard} from '../../components'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Container } from '@mui/system'

const Timeline = () => {
  const [data,setData]=useState({
    isLoading:true,
    data:null
  })

  useEffect(()=>{
    axios.get(process.env.REACT_APP_API_URL+"/allpost")
    .then(res=>{
      setData({
        isLoading:false,
        data:res.data
      })
    })
  },[])

  return (
    <Container maxWidth='md'>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          {
            data.isLoading?
            <div>Loading...</div>:
            data.data.map((post,i)=>{
              return <HorizontalCard key={post.id} setData={setData} i={i} data={post}/>
            })
          }
        </Grid>
      </Grid>
    </Container>
  )
}

export default Timeline
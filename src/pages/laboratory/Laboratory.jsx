
import { Grid } from '@mui/material'
import React, { useState } from 'react'
import Lab from './Lab'
import ResearchPreview from './ResearchPreview'










const Laboratory = () => {
  const [data,setData]=useState({
    title:'',
    goal:'',
    description:'',
    materials:[{title:'',name:[]}]
  })

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={6} sx={{maxHeight:'35rem',p:2,overflow: 'auto'}}>
          <Lab data={data} setData={setData} />
        </Grid>
        <Grid item xs={6} sx={{maxHeight:'35rem',p:2,overflow: 'auto'}}>
          <ResearchPreview data={data}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Laboratory
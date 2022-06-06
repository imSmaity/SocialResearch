import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ResearchPreview = ({data}) => {
  return (
    <Grid container>
        <Typography variant='h3' component={'h1'}>{data.title}</Typography>
        <Typography variant='h6' component={'h1'}>{data.goal}</Typography>
        <Typography component={'p'}>{data.description}</Typography>
        {
            data.materials.map((r,i)=>{
                return (
                    <Box key={r.title+i}>
                        <Typography variant='h6' component={'div'}>{r.title}</Typography>
                        {
                            r.name.map((m,i)=>{
                                return <Typography key={m+i} sx={{ml:1}} component={'span'}>{m}</Typography>
                            })
                        }
                    </Box>
                )
            })
        }
    </Grid>
  )
}

export default ResearchPreview
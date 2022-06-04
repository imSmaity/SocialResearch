import React from 'react'
import {Grid} from '@mui/material'
import {HorizontalCard} from '../components'

const Timeline = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={7}>
        <HorizontalCard/>
      </Grid>
      <Grid item xs={5}>
        Side
      </Grid>
    </Grid>
  )
}

export default Timeline
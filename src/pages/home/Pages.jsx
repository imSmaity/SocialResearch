import { Box } from '@mui/system'
import React from 'react'
import { DrawerHeader } from './style/Style'
import Dashboard from '../Dashboard'
import Timeline from '../Timeline'
import Laboratory from '../Laboratory'
import Article from '../Article'

const Pages = ({activePage}) => {

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {
            activePage==='Dashboard'?
            <Dashboard/>:
            activePage==='Timeline'?
            <Timeline/>:
            activePage==='Laboratory'?
            <Laboratory/>:
            <Article/>
        }
    </Box>
  )
}

export default Pages
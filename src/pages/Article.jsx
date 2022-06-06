import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';


const Cards=({data})=>{

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={data.image_url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><a href={data.link} target={'_blank'}>Learn More</a></Button>
      </CardActions>
    </Card>
  );
}


const Article = () => {
  const [data,setData]=useState({isLoading:true,data:null})
  useEffect(()=>{
    axios.get('https://newsdata.io/api/1/news?apikey=pub_65940dd47f8c725cf5ef39fa683d900b87ae')
    .then(res=>{
      setData({
        isLoading:false,
        data:res.data.results
      })
    })
  },[])
  
  return (
    <Container maxWidth='lg'>
      <Grid container spacing={2}>
      {
        data.isLoading?
        <div>Loading...</div>:
        data.data.map(c=>{
          return <Grid key={c.link} item xs={4}>
            <Cards data={c} />
          </Grid>
          
        })
      }
      </Grid>
    </Container>
  )
}

export default Article
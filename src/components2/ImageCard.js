import { Button, Card, CardActions, CardContent, CardMedia, Fab, Typography } from '@mui/material'
import React from 'react'

const ImageCard = () => {
  return (
    <Card sx={{ maxWidth: 300, ml:1, mt:1 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://picsum.photos/300/300"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Fab size="small" variant="extended" color="primary">Share</Fab>
        <Fab size="small" variant="extended" color="secondary">Learn More</Fab>
      </CardActions>
    </Card>
  )
}

export default ImageCard
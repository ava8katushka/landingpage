import * as React from "react"
import "./emailCollector.module.css";
import { Box, Card, Button, Typography, CardContent, TextField, CardActions} from '@mui/material';

export default function AirtableUI() {
  return (
    <Card sx={{ maxWidth: '300px', p: '10px' }}>
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          I want to get the book!
        </Typography>
      <form action="/api/airtable" method="POST">
      <Box sx={{ my: '15px'}}>
      <TextField name="name" label="Name" variant="outlined"/>
      </Box>
      <Box sx={{ my: '15px'}}>
      <TextField name="email" label="Email" variant="outlined"/>
      </Box>
      <Box sx={{ mt: '15px'}}>
      <Button type="submit" variant="contained">Get the book</Button>
      </Box>
      </form>
    </CardContent>
    </Card>
  )
}
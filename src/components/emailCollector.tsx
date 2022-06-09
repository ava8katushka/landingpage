import * as React from "react"
import {emailBox, emailCard, emailField} from "../css/emailCollector.module.css";
import { Box, Card, Button, Typography, CardContent, TextField, CardActions} from '@mui/material';

export default function AirtableUI() {
  return (
    <div className={emailBox}>
    <Card>
      <CardContent className={emailCard}>
      <Typography gutterBottom variant="h5" component="div">
         New chapter updates
        </Typography>
      <p>This is the first chapter of the book. I'm writting new chapters right now. To be the first one to see them, subscribe here!</p>
      <form action="/api/airtable" method="POST">
      <Box sx={{ my: '15px'}}>
      <TextField className={emailField} name="name" label="Name" variant="outlined"/>
      </Box>
      <Box sx={{ my: '15px'}}>
      <TextField className={emailField} name="email" label="Email" variant="outlined"/>
      </Box>
      <Box sx={{ mt: '15px'}}>
      <Button type="submit" variant="contained">Become a beta reader</Button>
      </Box>
      </form>
    </CardContent>
    </Card>
    </div>
  )
}
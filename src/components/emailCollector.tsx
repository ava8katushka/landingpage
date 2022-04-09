import * as React from "react"
import "./emailCollector.module.css";
import { Card, Button, Typography, CardContent} from '@mui/material';

export default function AirtableUI() {
  return (
    <Card sx={{ maxWidth: 500, p: '10px' }}>
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          I want to get the book!
        </Typography>
      <form action="/api/airtable" method="POST">
        <div style={{ marginBottom: `8px` }}>
          <label style={{ display: `block`, marginBottom: `4px` }} htmlFor="name">
            Name:
          </label>
          <input name="name" id="name" />
        </div>
        <div style={{ marginBottom: `8px` }}>
          <label
            style={{ display: `block`, marginBottom: `4px` }}
            htmlFor="email"
          >
            Email:
          </label>
          <input name="email" id="email" type="email" />
        </div>
        <div>
          <Button type="submit" variant="contained">Get the book</Button>
        </div>
      </form>
    </CardContent>
    </Card>
  )
}
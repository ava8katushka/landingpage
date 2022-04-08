import * as React from "react"
import "./emailCollector.module.css";
import Button from '@mui/material/Button';

export default function AirtableUI() {
  return (
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
        {/* <button>Get the book</button> */}
        <Button type="submit" variant="contained">Get the book</Button>
      </div>
    </form>
  )
}
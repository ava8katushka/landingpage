import * as React from "react"
import {cardTitle, emailBox, emailCard, emailField, errorMessage, signUpButton} from "../css/emailCollector.module.css";
import { Box, Card, Button, CardContent, TextField} from '@mui/material';
import {addNameAndEmailToDB} from '../api/airtable.js';

function signUp() {
  let button = document.querySelector(`.${signUpButton}`) as HTMLButtonElement;
  button.disabled = true;
  let name = document.querySelector(`input[name=name]`) as HTMLInputElement;
  let email = document.querySelector(`input[name=email]`) as HTMLInputElement;
  let errors = checkErrors(name, email);
  setErrorsIfAny(errors);
  if (errors) {
    button.disabled = false;
    return;
  }

  addNameAndEmailToDB(name.value, email.value, showSuccessMessage, setErrorsIfAny);
 
}

function setErrorsIfAny(errors : string) {
  let existingField = document.querySelector(`.${errorMessage}`) as HTMLElement;
  if (existingField) {
    existingField.innerText = errors;
    return;
  }
  if (errors) {
    let errorField = document.createElement('div');
    errorField.classList.add(`${errorMessage}`);
    errorField.innerHTML = errors;
    let card = document.querySelector(`.${emailCard}`) as HTMLElement;
    card.appendChild(errorField);
  }
  
}

function showSuccessMessage() {
  let card = document.querySelector(`.${emailCard}`) as HTMLElement;
  card.textContent = '';
  let header = document.createElement('div');
  header.classList.add(cardTitle);
  header.innerText = 'Congrats!';
  let text = document.createElement('p');
  text.innerText = 'So great! You have successfully submitted your request. You will receive the new chapters of the book in your email!';
  card.appendChild(header);
  card.appendChild(text);
}

function checkErrors(name : HTMLInputElement, email : HTMLInputElement) : string {
  if (name == null || name.value == '')  {
    name.setAttribute('aria-invalid', 'true');
    return 'The name is empty';
  }
  if (email == null || email.value == '') {
    
    return 'The email is empty';
  }
  const emailRegExp = new RegExp('[A-Za-z0-9_\.-]+@[A-Za-z0-9_\.-]+\.[A-Za-z0-9_\.-]+');
  if (!emailRegExp.exec(email.value)) {
    email.setAttribute('aria-invalid', 'true');
    return `'${email.value}' is not a valid email`;
  } 
  name.removeAttribute('aria-invalid');
  email.removeAttribute('aria-invalid');
  return '';
}

export default function AirtableUI() {
  return (
    <div className={emailBox}>
    <Card>
      <CardContent className={emailCard}>
      <div className={cardTitle}>
        Want to see more?
      </div>
      <p>This is the first chapter of the book. I'm writting new chapters right now. To be the first one to see them, subscribe here!</p>
      <Box sx={{ my: '15px'}}>
      <TextField className={emailField} name="name" label="Name" variant="outlined"/>
      </Box>
      <Box sx={{ my: '15px'}}>
      <TextField className={emailField} name="email" label="Email" variant="outlined"/>
      </Box>
      <Box sx={{ mt: '15px'}}>
      <Button className={signUpButton} onClick={signUp} variant="contained">
         Become a beta reader
      </Button>
      </Box>
    </CardContent>
    </Card>
    </div>
  )
}
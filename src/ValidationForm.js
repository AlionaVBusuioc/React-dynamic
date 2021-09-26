import React, {useState, useEffect} from 'react';
import {Avatar, Grid, Paper, TextField} from "@mui/material";
import "./ValidationForm.css";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from '@mui/material/Button';
import validation from './validation';

const ValidationForm = ({submitForm}) => {
  const [values, setValues] = useState({
    email: ""
})
const [errors, setErrors] = useState({});
const [dataIsCorrect, setDataIsCorrect] = useState(false);
const handleChange = (event) => {
  setValues({
      ...values,
      [event.target.name]: event.target.value
  })
}
const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setDataIsCorrect(true);
}
useEffect(() =>{
 if(Object.keys(errors).length === 0 && dataIsCorrect){
     submitForm(true);
 }
}, [errors]);
    return (
       <Grid>
         <Paper elevation={10} className="paperStyle">
         <Grid align="center">
         <Avatar className="avatarColor"><LockOutlinedIcon/></Avatar>
         <h2>Sign In</h2>
         </Grid>
         <br /><br /><br /> <br /><br /><br /> 
         <TextField 
         variant="standard" 
         label="Email" 
         name="email" 
         placeholder="Enter your email address" 
         type="email"
         fullWidth required
         value={values.email} onChange={handleChange}/>
         {errors.email && <p className="error">{errors.email}</p>}
         <div className="space">
         <Button type="submit" color="primary" variant="contained" fullWidth onClick={handleFormSubmit}>Sign In</Button>
         </div>
         </Paper>
       </Grid>
    )
}

export default ValidationForm;

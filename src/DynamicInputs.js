import React, {useState} from "react";
import './App.css';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';

const DynamicInputs = () => {
    const [inputFields, setInputFields] = useState([
        {Name: ""}
      ])
    const handleSubmit = (e) => {
     e.preventDefault();
     console.log("InputFields", inputFields);
    }
    const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
    }
    const handleAddFields = () => {
      setInputFields([...inputFields, {Name: ""}]);
    } 
    const handleRemoveFields = (index) => {
      const values = [...inputFields];
      values.splice(index, 1);
      setInputFields(values);
    }
      return (
        <Container className="App">
        <h1>Add Input Fields</h1>
        <form onSubmit={handleSubmit}>
          {inputFields.map((inputField, index) => (
            <div key={index}>
             <TextField 
             name="Name"
             label="Name"
             value={inputField.firstName}
             variant="filled"
             onChange={event => handleChangeInput(index, event)}
             />
             <IconButton onClick={() => handleRemoveFields(index)}>
               <RemoveIcon/>
             </IconButton>
             <IconButton onClick={() => handleAddFields()}>
               <AddIcon/>
             </IconButton>
            </div>
          ))}
          <br />
          <Button 
          variant="contained" 
          color="primary" 
          type="submit" 
          endIcon={<SendIcon>Send</SendIcon>}
          onClick={handleSubmit}
          >Send</Button>
        </form>
        </Container>
      );
}

export default DynamicInputs;

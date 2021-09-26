import React, {useState} from 'react';
import ValidationForm from './ValidationForm';
import DynamicInputs from './DynamicInputs';


export const ValidForm = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const submitForm = () =>{
        setFormIsSubmitted(true);
    }
    return (
        <div>
            {!formIsSubmitted ? <ValidationForm submitForm={submitForm}/> : <DynamicInputs/>}
        </div>
    )
}

export default ValidForm;
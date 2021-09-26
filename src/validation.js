const validation = (values) => {
    let errors={};
    if(!values.email){
        errors.email="Email is required"
    }else if(!/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(values.email)){
        errors.email="Email is invalid"
    }
    return errors;
}

export default validation;
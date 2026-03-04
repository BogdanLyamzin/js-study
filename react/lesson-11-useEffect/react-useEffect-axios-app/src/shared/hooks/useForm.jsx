import { useState } from "react";

const useForm = ({initialState, submitForm})=> {
    const [state, setState] = useState({...initialState});

    const handleChange = (event)=> {
      const {value, checked, name, type} = event.target;
      const newValue = type !== "checkbox" ? value : checked;
      setState(prevState => ({...prevState, [name]: newValue}));
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      submitForm(state);
      setState({...initialState})
    };

    return {state, setState, handleChange, handleSubmit};
}

export default useForm;
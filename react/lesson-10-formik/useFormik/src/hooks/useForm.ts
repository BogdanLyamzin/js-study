import { useRef } from "react";
type FormControl = HTMLInputElement | HTMLSelectElement;
const useForm = <FormProps>({
  initialValues,
}: {
  initialValues: FormProps;
}) => {
  const valuesRef = useRef({...initialValues});
  const fieldsRef = useRef({});

  const register = (name) => {
    return {
      name,
      ref: el => {
        if(!el) return;
        fieldsRef.current[name] = el;
        if(el.type === "checkbox") {
          el.checked = Boolean(valuesRef.current[name]);
        }
        else {
          el.value = valuesRef.current[name] ?? "";
        }
      },
      onChange: el => {
        const { name, value, type, checked } = el.target;
        const val = type === "checkbox" ? checked : value;
        valuesRef.current[name] = val;
      }
    }
  }

  const reset = () => {
    valuesRef.current = {
      ...initialValues,
    }

    for(const key in fieldsRef.current) {
      const value = initialValues[key];
      fieldsRef.current[key] = value;
    }
  }

  const getValues = ()=> ({...valuesRef.current});
  const handleSubmit = (callback) => {
    return (e)=> {
        e.preventDefault();
        callback({...valuesRef.current});
        reset();
    }
  };
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   submitForm({...valuesRef.current});
  //   reset();
  // };
    return { getValues, register, handleSubmit, reset };
};
export default useForm;

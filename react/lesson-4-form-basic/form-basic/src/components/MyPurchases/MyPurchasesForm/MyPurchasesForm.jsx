import { useState } from "react";

const MyPurchaseForm = ({onSubmit})=> {
    const [values, setValues] = useState({
        name: "",
        count: "",
        price: 0,
    });

    return (
        <form></form>
    )
}

export default MyPurchaseForm;
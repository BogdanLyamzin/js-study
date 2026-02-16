import { useFormikContext } from "formik";

const TotalShopFormPrice = ()=> {
    const {values} = useFormikContext();

    return (
        <p>Price: {Number(values.price) * Number(values.quantity)}</p>
    )
}

export default TotalShopFormPrice;
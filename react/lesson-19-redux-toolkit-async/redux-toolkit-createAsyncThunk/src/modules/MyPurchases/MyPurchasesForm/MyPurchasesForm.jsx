import { useForm } from "react-hook-form";

const MyPurchasesForm = ({submitForm})=> {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const onSubmit = handleSubmit(values => {
        submitForm(values);
        reset();
    });

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input type="text" {...register("title", {required: "Title required"})} placeholder="Purchase title" />
                {errors.title && <p style={{color: "red"}}>{errors.title.message}</p>}
            </div>
            <div>
                <input type="number" {...register("count", {required: "Count required"})} placeholder="Title count" />
                {errors.count && <p style={{color: "red"}}>{errors.count.message}</p>}
            </div>
            <button>Add purchase</button>
        </form>
    )
}

export default MyPurchasesForm;
import { useForm } from "react-hook-form";

const MyBooksForm = ({submitForm})=> {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const onSubmit = handleSubmit(values => {
        submitForm(values);
        reset();
    });

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input type="text" {...register("name", {required: "Name required"})} placeholder="Book name" />
                {errors.name && <p style={{color: "red"}}>{errors.name.message}</p>}
            </div>
            <div>
                <input type="text" {...register("author", {required: "Author required"})} placeholder="Book author" />
                {errors.author && <p style={{color: "red"}}>{errors.author.message}</p>}
            </div>
            <div>
                <input type="checkbox" {...register("favorite", {required: true})} />
            </div>
            <button>Add book</button>
        </form>
    )
}

export default MyBooksForm;
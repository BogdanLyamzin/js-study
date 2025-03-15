const serializeForm = form => {
    const elements = form.querySelectorAll("[name]");
    const result = [...elements].reduce((acum, el) => {
        const {name, value} = el;
        return {...acum, [name]: value};
    }, {});
    return result;
}

export default serializeForm;
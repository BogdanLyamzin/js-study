export const validateName = async value => {
    if(value === "food for cats") return true;
    throw new Error("name must be unique");
}
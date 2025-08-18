import axios from "axios";
// import type { State } from "./types";

// const getMessageFromState = (state: State): string => {
//     switch(state) {
//         case "idle":
//             return "not start load";
//         case "loading":
//             return "Start loading";
//         case "success":
//             return "Data loaded successfully";
//         case "error":
//             return "Data loaded error";
//         default:
//             const exeption: never = state;
//             return exeption;
//     }
// }

// console.log(getMessageFromState("loading")); // "Start loading"
// console.log(getMessageFromState("success")); // "Data loaded successfully"
// console.log(getMessageFromState("error")); // "Data loaded error"
// console.log(getMessageFromState("idle")); // "Data loaded error"

class ErrorWithData extends Error {
    data: string = "";
    constructor(data: string) {
        super();
        this.data = data;
    }
}

interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

const fetchPosts = async(): Promise<Post[]> => {
    try {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return data;
    }
    catch(error) {
        if(error instanceof ErrorWithData) {
            console.log(error.data);
        }
        throw error;
    }
}

fetchPosts()
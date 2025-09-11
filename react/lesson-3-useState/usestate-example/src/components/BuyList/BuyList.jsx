import { useState } from "react";

const BuyList = ({items = []})=> {
    const [list, setList] = useState([...items]);

    const onDelete = id => setList(prevList => prevList.filter(item => item.id !== id));

    const elements = list.map(({id, name}) => (
        <li key={id}>{name} <button onClick={()=> onDelete(id)} type="button">Delete</button></li>
    ));

    return <ol>{elements}</ol>
}

export default BuyList;
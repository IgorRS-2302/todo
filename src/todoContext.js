import { createContext, useState } from "react";

export const TodoContext = createContext();

export function AllToDo({children}){
    const [idInput, setIdInput] = useState(0);
    const [all, setAll] = useState([]);
    const [active, setActive] = useState([]);
    const [confirmed, setConfirmed] = useState([]);
    const [deleted, setDeleted] = useState([]);
    const [editing, setEditing] = useState()
  
    async function editItem(item){
        await setAll(prev => prev.filter((v, i) => v.id !== item.id));
        await setAll((prev) => [...prev, item]);
        await setActive(prev => prev.filter((v, i) => v.id !== item.id));
        await setActive((prev) => [...prev, item]);
    }

    async function add(txt){
        const item = {
            text: txt,
            id: idInput,
        }
        await setAll((prev) => [...prev, item]);
        await setActive((prev) => [...prev, item]);
        await setIdInput((prev) => prev + 1);
    }


    return (
        <TodoContext.Provider value={{add, editItem, all, setAll, active, setActive, confirmed, setConfirmed, deleted, setDeleted}}>
            {children}
        </TodoContext.Provider>
    )
}

import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({children}) =>{
    const [todo, setTodo] = useState([]);
   
    const handleTodo = (data) =>{
        setTodo(data);
    }
    const handleNewTodo = (newData) => {
        setTodo([...todo, newData]);
    }
 
  

    return (

        <TodoContext.Provider value= {{ todo, handleTodo, handleNewTodo }}>{children}</TodoContext.Provider>

    )

}
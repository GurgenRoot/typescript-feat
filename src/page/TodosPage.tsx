import {ITodo} from "../types/types";
import TodoItem from "../components/TodoItem";
import List from "../components/List";
import {FC, useEffect, useState} from "react";
import axios from "axios";

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = async () => {
        try {
            const {data} = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(data)
        } catch (e) {
        }
    }
    return (
        <List
            items={todos}
            renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo}/>}
        />
    );
};

export default TodosPage;
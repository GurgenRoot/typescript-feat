import {FC} from "react";
import {ITodo} from "../types/types";

interface ITodoItem {
    todo: ITodo
}

const TodoItem: FC<ITodoItem> = ({todo}) => {
    return (
        <div>
            <input type="checkbox" checked={todo.completed}/>
            {todo.id}- {todo.title}
        </div>
    );
};

export default TodoItem;
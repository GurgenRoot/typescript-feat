import {useEffect, useState} from "react";
import Card from "./components/Card";
import {CardVariant} from "./components/Card";
import Userlist from "./components/UserList";
import axios from "axios";
import {ITodo, IUser} from "./types/types";
import List from "./components/List";
import TodoItem from "./components/TodoItem";
import EventItem from "./components/EventItem";

const App = () => {

  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
      fetchUsers()
      fetchTodos()
  },[])

  const fetchUsers = async () => {
      try {
          const {data} = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
          setUsers(data)
      } catch (e) {
      }
  }

  const fetchTodos = async () => {
      try {
          const {data} = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
          setTodos(data)
      } catch (e) {
      }
  }

  return (
    <div>
        <Card width='200px' height='200px' variant={CardVariant.outlined}>
            <button>Click me</button>
            text
        </Card>

        <List
            items={users}
            renderItem={(user: IUser) => <Userlist key={user.id} user={user}/>}
        />
        <List
            items={todos}
            renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo}/>}
        />
        <EventItem/>
    </div>
  );
}

export default App;

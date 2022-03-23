import {useEffect, useState} from "react";
import Card from "./components/Card";
import {CardVariant} from "./components/Card";
import Userlist from "./components/UserList";
import axios from "axios";
import {IUser} from "./types/types";
import List from "./components/List";

const App = () => {

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
      fetchUsers()
  },[])

  const fetchUsers = async () => {
      try {
          const {data} = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
          setUsers(data)
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
    </div>
  );
}

export default App;

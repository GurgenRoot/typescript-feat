import {FC, useEffect, useState} from "react";
import {IUser} from "../types/types";
import axios from "axios";
import Userlist from "../components/UserList";
import List from "../components/List";

const UserPage: FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        try {
            const {data} = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(data)
        } catch (e) {
        }
    }

    return (
        <List
            items={users}
            renderItem={(user: IUser) => <Userlist key={user.id} user={user}/>}
        />
    );
};

export default UserPage;
import {FC, useEffect, useState} from "react";
import {IUser} from "../types/types";
import axios from "axios";
import {useParams, useNavigate } from "react-router-dom";

interface IuserItemPage {
    id: string | undefined;
}

const UsersItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);

    // @ts-ignore
    const params = useParams<IuserItemPage>();
    const navigate = useNavigate ()

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () => {
        try {
            const {data} = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            setUser(data)
        } catch (e) {
        }
    }

    return (
        <div>
            <button onClick={() => navigate('/users')}>Back</button>
            <h1>Page of User {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.suite}
            </div>
        </div>
    );
};

export default UsersItemPage;
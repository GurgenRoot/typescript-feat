import {FC} from 'react';
import UserList from "./UserList";
import {IUser} from "../types/types";
import {useNavigate} from "react-router-dom";
import {log} from "util";

interface IUserLists {
    users: IUser[];
}

const Userlists: FC<IUserLists> = ({users}) => {
    const navigate = useNavigate();

    return (
        <div>
            {
                users.map(user => {
                    return (
                        <UserList key={user.id} user={user} onClick={(user) => navigate(`/users/${user.id}`)}/>
                    )
                })
            }
        </div>
    );
};

export default Userlists;

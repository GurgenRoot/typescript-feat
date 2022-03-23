import {FC} from 'react';
import UserList from "./UserList";
import {IUser} from "../types/types";

interface IUserLists {
    users: IUser[]
}

const Userlists: FC<IUserLists> = ({users}) => {
    return (
        <div>
            {
                users.map(user => {
                    return (
                        <UserList key={user.id} user={user}/>
                    )
                })
            }
        </div>
    );
};

export default Userlists;

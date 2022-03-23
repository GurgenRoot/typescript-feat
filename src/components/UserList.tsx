import {FC} from "react";
import {IUser} from "../types/types";

interface IUserItem {
    user: IUser
}

const UserList: FC<IUserItem> = ({user}) => {
    return (
        <div>
            {user.name} lives {user.address.city} - {user.address.street} - {user.address.suite} optional info {user.email}
        </div>
    );
};

export default UserList;
import {FC} from "react";
import {IUser} from "../types/types";

interface IUserItem {
    user: IUser;
    onClick: (user: IUser) => void;
}

const UserList: FC<IUserItem> = ({user,onClick}) => {
    return (
        <div onClick={() => onClick(user)}>
            {user.name} lives {user.address.city} - {user.address.street} - {user.address.suite} optional info {user.email}
        </div>
    );
};

export default UserList;
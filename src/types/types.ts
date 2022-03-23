export interface IUserAddress {
    street: string;
    suite: string;
    city: string;
}

export interface IUser {
    id: string;
    name: string;
    email: string;
    address: IUserAddress;
}

export interface ITodo {
    id: string;
    title: string;
    completed: boolean;
}
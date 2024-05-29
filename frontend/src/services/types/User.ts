interface UserData {
    user: {
        __typename: string;
        id: string;
        username: string;
        isAdmin: boolean;
    };
}

class User {
    id: string;
    username: string;
    typename: string;
    isAdmin: boolean;
    constructor(data: UserData) {
        this.typename = data.user.__typename;
        this.id = data.user.id;
        this.username = data.user.username;
        this.isAdmin = data.user.isAdmin;
    }
}

export { User };

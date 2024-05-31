export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
    T extends { [key: string]: unknown },
    K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
    | T
    | {
          [P in keyof T]?: P extends " $fragmentName" | "__typename"
              ? T[P]
              : never;
      };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
};

export type AdminUserList = {
    __typename?: "AdminUserList";
    users: Array<User>;
};

export type AdminUserListError = AdminUserList | Error;

export type AuthenticatedUser = {
    __typename?: "AuthenticatedUser";
    discordId?: Maybe<Scalars["Int"]["output"]>;
    email: Scalars["String"]["output"];
    id: Scalars["String"]["output"];
    role: Role;
    username: Scalars["String"]["output"];
};

export type AuthenticatedUserError = AuthenticatedUser | Error;

export type Error = {
    __typename?: "Error";
    message: Scalars["String"]["output"];
};

export type Mutation = {
    __typename?: "Mutation";
    login: AuthenticatedUserError;
    register: AuthenticatedUserError;
};

export type MutationLoginArgs = {
    password: Scalars["String"]["input"];
    username: Scalars["String"]["input"];
};

export type MutationRegisterArgs = {
    email: Scalars["String"]["input"];
    password: Scalars["String"]["input"];
    username: Scalars["String"]["input"];
};

export type PublicUser = {
    __typename?: "PublicUser";
    username: Scalars["String"]["output"];
};

export type PublicUserError = Error | PublicUser;

export type PublicUserList = {
    __typename?: "PublicUserList";
    users: Array<PublicUser>;
};

export type PublicUserListError = Error | PublicUserList;

export type Query = {
    __typename?: "Query";
    adminUser: UserError;
    adminUsers: AdminUserListError;
    me: AuthenticatedUserError;
    user: PublicUserError;
    users: PublicUserListError;
};

export type QueryAdminUserArgs = {
    userId: Scalars["String"]["input"];
};

export type QueryUserArgs = {
    userId: Scalars["String"]["input"];
};

export enum Role {
    Admin = "ADMIN",
    Tester = "TESTER",
    User = "USER",
}

export type User = {
    __typename?: "User";
    discordId?: Maybe<Scalars["Int"]["output"]>;
    email: Scalars["String"]["output"];
    id: Scalars["String"]["output"];
    role: Role;
    username: Scalars["String"]["output"];
};

export type UserError = Error | User;

import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
    query GetAllUsers {
        users {
            ... on PublicUserList {
                __typename
                users {
                    username
                }
            }
            ... on Error {
                __typename
                message
            }
        }
    }
`;

export const GET_USER_BY_ID = gql`
    query GetUserById($id: String!) {
        user(userId: $id) {
            ... on PublicUser {
                __typename
                username
            }
            ... on Error {
                __typename
                message
            }
        }
    }
`;

export const GET_ME = gql`
    query GetMe {
        me {
            ... on AuthenticatedUser {
                discordId
                email
                username
                role
            }
            ... on Error {
                __typename
                message
            }
        }
    }
`;

export const GET_USERS_AS_ADMIN = gql`
    query GetUsersAsAdmin {
        adminUsers {
            ... on AdminUserList {
                __typename
                users {
                    discordId
                    email
                    id
                    role
                    username
                }
            }
            ... on Error {
                __typename
                message
            }
        }
    }
`;

export const GET_USER_BY_ID_AS_ADMIN = gql`
    query GetUserByIdAsAdmin($id: String!) {
        adminUser(userId: $id) {
            ... on User {
                id
                email
                discordId
                role
                username
            }
            ... on Error {
                __typename
                message
            }
        }
    }
`;

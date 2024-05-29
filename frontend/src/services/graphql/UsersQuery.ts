import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
    query MyQuery {
        users {
            ... on UserList {
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
    query MyQuery {
        user {
            ... on User {
                id
                username
            }
        }
    }
`;

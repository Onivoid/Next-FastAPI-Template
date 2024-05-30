import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation Login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
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

export const REGISTER = gql`
    mutation Register($email: String!, $password: String!, $username: String!) {
        register(email: $email, password: $password, username: $username) {
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

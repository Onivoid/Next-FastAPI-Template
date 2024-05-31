import * as Types from "../types/codegen";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type LoginMutationVariables = Types.Exact<{
    username: Types.Scalars["String"]["input"];
    password: Types.Scalars["String"]["input"];
}>;

export type LoginMutation = {
    __typename?: "Mutation";
    login:
        | {
              __typename?: "AuthenticatedUser";
              id: string;
              discordId?: number | null;
              email: string;
              username: string;
              role: Types.Role;
          }
        | { __typename: "Error"; message: string };
};

export type RegisterMutationVariables = Types.Exact<{
    email: Types.Scalars["String"]["input"];
    password: Types.Scalars["String"]["input"];
    username: Types.Scalars["String"]["input"];
}>;

export type RegisterMutation = {
    __typename?: "Mutation";
    register:
        | {
              __typename?: "AuthenticatedUser";
              id: string;
              discordId?: number | null;
              email: string;
              username: string;
              role: Types.Role;
          }
        | { __typename: "Error"; message: string };
};

export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            ... on AuthenticatedUser {
                id
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
export type LoginMutationFn = Apollo.MutationFunction<
    LoginMutation,
    LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
    baseOptions?: Apollo.MutationHookOptions<
        LoginMutation,
        LoginMutationVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
        LoginDocument,
        options,
    );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
    LoginMutation,
    LoginMutationVariables
>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!, $username: String!) {
        register(email: $email, password: $password, username: $username) {
            ... on AuthenticatedUser {
                id
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
export type RegisterMutationFn = Apollo.MutationFunction<
    RegisterMutation,
    RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useRegisterMutation(
    baseOptions?: Apollo.MutationHookOptions<
        RegisterMutation,
        RegisterMutationVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
        RegisterDocument,
        options,
    );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
    RegisterMutation,
    RegisterMutationVariables
>;

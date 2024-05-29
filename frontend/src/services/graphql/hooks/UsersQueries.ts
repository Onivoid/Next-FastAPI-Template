import * as Types from "../types/codegen";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;
export type GetAllUsersQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetAllUsersQuery = {
    __typename?: "Query";
    users:
        | { __typename: "Error"; message: string }
        | {
              __typename: "PublicUserList";
              users: Array<{ __typename?: "PublicUser"; username: string }>;
          };
};

export type GetUserByIdQueryVariables = Types.Exact<{
    id: Types.Scalars["String"]["input"];
}>;

export type GetUserByIdQuery = {
    __typename?: "Query";
    user:
        | { __typename: "Error"; message: string }
        | { __typename: "PublicUser"; username: string };
};

export type GetMeQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetMeQuery = {
    __typename?: "Query";
    me:
        | { __typename: "Error"; message: string }
        | { __typename: "PublicUser"; username: string };
};

export type GetUsersAsAdminQueryVariables = Types.Exact<{
    [key: string]: never;
}>;

export type GetUsersAsAdminQuery = {
    __typename?: "Query";
    adminUsers:
        | {
              __typename: "AdminUserList";
              users: Array<{
                  __typename?: "User";
                  discordId?: number | null;
                  email: string;
                  id: string;
                  role: Types.Role;
                  username: string;
              }>;
          }
        | { __typename: "Error"; message: string };
};

export type GetUserByIdAsAdminQueryVariables = Types.Exact<{
    id: Types.Scalars["String"]["input"];
}>;

export type GetUserByIdAsAdminQuery = {
    __typename?: "Query";
    adminUser:
        | { __typename: "Error"; message: string }
        | {
              __typename?: "User";
              id: string;
              email: string;
              discordId?: number | null;
              role: Types.Role;
              username: string;
          };
};

export const GetAllUsersDocument = gql`
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

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(
    baseOptions?: Apollo.QueryHookOptions<
        GetAllUsersQuery,
        GetAllUsersQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(
        GetAllUsersDocument,
        options,
    );
}
export function useGetAllUsersLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetAllUsersQuery,
        GetAllUsersQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(
        GetAllUsersDocument,
        options,
    );
}
export function useGetAllUsersSuspenseQuery(
    baseOptions?: Apollo.SuspenseQueryHookOptions<
        GetAllUsersQuery,
        GetAllUsersQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useSuspenseQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(
        GetAllUsersDocument,
        options,
    );
}
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<
    typeof useGetAllUsersLazyQuery
>;
export type GetAllUsersSuspenseQueryHookResult = ReturnType<
    typeof useGetAllUsersSuspenseQuery
>;
export type GetAllUsersQueryResult = Apollo.QueryResult<
    GetAllUsersQuery,
    GetAllUsersQueryVariables
>;
export const GetUserByIdDocument = gql`
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

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(
    baseOptions: Apollo.QueryHookOptions<
        GetUserByIdQuery,
        GetUserByIdQueryVariables
    > &
        (
            | { variables: GetUserByIdQueryVariables; skip?: boolean }
            | { skip: boolean }
        ),
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
        GetUserByIdDocument,
        options,
    );
}
export function useGetUserByIdLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetUserByIdQuery,
        GetUserByIdQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
        GetUserByIdDocument,
        options,
    );
}
export function useGetUserByIdSuspenseQuery(
    baseOptions?: Apollo.SuspenseQueryHookOptions<
        GetUserByIdQuery,
        GetUserByIdQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useSuspenseQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
        GetUserByIdDocument,
        options,
    );
}
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<
    typeof useGetUserByIdLazyQuery
>;
export type GetUserByIdSuspenseQueryHookResult = ReturnType<
    typeof useGetUserByIdSuspenseQuery
>;
export type GetUserByIdQueryResult = Apollo.QueryResult<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
>;
export const GetMeDocument = gql`
    query GetMe {
        me {
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

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(
    baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(
        GetMeDocument,
        options,
    );
}
export function useGetMeLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(
        GetMeDocument,
        options,
    );
}
export function useGetMeSuspenseQuery(
    baseOptions?: Apollo.SuspenseQueryHookOptions<
        GetMeQuery,
        GetMeQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useSuspenseQuery<GetMeQuery, GetMeQueryVariables>(
        GetMeDocument,
        options,
    );
}
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeSuspenseQueryHookResult = ReturnType<
    typeof useGetMeSuspenseQuery
>;
export type GetMeQueryResult = Apollo.QueryResult<
    GetMeQuery,
    GetMeQueryVariables
>;
export const GetUsersAsAdminDocument = gql`
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

/**
 * __useGetUsersAsAdminQuery__
 *
 * To run a query within a React component, call `useGetUsersAsAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersAsAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersAsAdminQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersAsAdminQuery(
    baseOptions?: Apollo.QueryHookOptions<
        GetUsersAsAdminQuery,
        GetUsersAsAdminQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetUsersAsAdminQuery, GetUsersAsAdminQueryVariables>(
        GetUsersAsAdminDocument,
        options,
    );
}
export function useGetUsersAsAdminLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetUsersAsAdminQuery,
        GetUsersAsAdminQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<
        GetUsersAsAdminQuery,
        GetUsersAsAdminQueryVariables
    >(GetUsersAsAdminDocument, options);
}
export function useGetUsersAsAdminSuspenseQuery(
    baseOptions?: Apollo.SuspenseQueryHookOptions<
        GetUsersAsAdminQuery,
        GetUsersAsAdminQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useSuspenseQuery<
        GetUsersAsAdminQuery,
        GetUsersAsAdminQueryVariables
    >(GetUsersAsAdminDocument, options);
}
export type GetUsersAsAdminQueryHookResult = ReturnType<
    typeof useGetUsersAsAdminQuery
>;
export type GetUsersAsAdminLazyQueryHookResult = ReturnType<
    typeof useGetUsersAsAdminLazyQuery
>;
export type GetUsersAsAdminSuspenseQueryHookResult = ReturnType<
    typeof useGetUsersAsAdminSuspenseQuery
>;
export type GetUsersAsAdminQueryResult = Apollo.QueryResult<
    GetUsersAsAdminQuery,
    GetUsersAsAdminQueryVariables
>;
export const GetUserByIdAsAdminDocument = gql`
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

/**
 * __useGetUserByIdAsAdminQuery__
 *
 * To run a query within a React component, call `useGetUserByIdAsAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdAsAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdAsAdminQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdAsAdminQuery(
    baseOptions: Apollo.QueryHookOptions<
        GetUserByIdAsAdminQuery,
        GetUserByIdAsAdminQueryVariables
    > &
        (
            | { variables: GetUserByIdAsAdminQueryVariables; skip?: boolean }
            | { skip: boolean }
        ),
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<
        GetUserByIdAsAdminQuery,
        GetUserByIdAsAdminQueryVariables
    >(GetUserByIdAsAdminDocument, options);
}
export function useGetUserByIdAsAdminLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        GetUserByIdAsAdminQuery,
        GetUserByIdAsAdminQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<
        GetUserByIdAsAdminQuery,
        GetUserByIdAsAdminQueryVariables
    >(GetUserByIdAsAdminDocument, options);
}
export function useGetUserByIdAsAdminSuspenseQuery(
    baseOptions?: Apollo.SuspenseQueryHookOptions<
        GetUserByIdAsAdminQuery,
        GetUserByIdAsAdminQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useSuspenseQuery<
        GetUserByIdAsAdminQuery,
        GetUserByIdAsAdminQueryVariables
    >(GetUserByIdAsAdminDocument, options);
}
export type GetUserByIdAsAdminQueryHookResult = ReturnType<
    typeof useGetUserByIdAsAdminQuery
>;
export type GetUserByIdAsAdminLazyQueryHookResult = ReturnType<
    typeof useGetUserByIdAsAdminLazyQuery
>;
export type GetUserByIdAsAdminSuspenseQueryHookResult = ReturnType<
    typeof useGetUserByIdAsAdminSuspenseQuery
>;
export type GetUserByIdAsAdminQueryResult = Apollo.QueryResult<
    GetUserByIdAsAdminQuery,
    GetUserByIdAsAdminQueryVariables
>;

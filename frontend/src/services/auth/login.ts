import { client } from "@/pages/_app";
import { gql } from "@apollo/client";
import { LoginResponse } from "@/services/types/LoginResponse";

const login = async (username: string, password: string) => {
    const LOGIN = await gql`
        mutation {
            login(username: "${username}", password: "${password}", remember: false) {
                ... on AuthenticatedUser {
                    __typename
                    name
                    token
                    isAdmin
                }
                ... on Error {
                    __typename
                    message
                }
            }
        }
    `;
    const { data } = await client.mutate({ mutation: LOGIN });
    const result = new LoginResponse(data);

    return result;
};

export { login };

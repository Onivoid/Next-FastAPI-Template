import { useEffect } from "react";
import { AuthenticatedUser } from "../graphql/types/codegen";
import { useGetMeQuery } from "@/services/graphql/hooks/UsersQueries";
import { useStore } from "@/services/global/store";

export default function useLoginPersistance(
    isLoading: boolean,
    setIsLoading: (isLoading: boolean) => void,
) {
    const {
        data: meData,
        loading: meLoading,
        error: meError,
    } = useGetMeQuery();

    useEffect(() => {
        if (isLoading) {
            if (!meLoading && meData) {
                const { me } = meData as { me: AuthenticatedUser };
                if (me.__typename === "AuthenticatedUser") {
                    useStore.setState({ user: me });
                }
                setTimeout(() => setIsLoading(false), 2000);
            }
        }
    }, [meLoading, meData, isLoading, setIsLoading]);
}

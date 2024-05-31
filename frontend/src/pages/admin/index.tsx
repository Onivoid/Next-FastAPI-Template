import Head from "next/head";
import Style from "@/styles/pages/admin/Admin.module.scss";
import { useState } from "react";
import LoginComponent from "@/components/admin/login";
import { Notifications } from "@/components/notifications";
import { useStore } from "@/services/global/store";
import useLoginPersistance from "@/services/auth/loginPersistance";
import LoadingComponent from "@/components/loading";
import { useLogoutMutation } from "@/services/graphql/hooks/UsersMutations";

export default function Admin() {
    const pageTitle = process.env.NEXT_PUBLIC_APP_NAME;
    const [notifications, setNotifications] = useState<
        { message: string; type: string }[]
    >([]);
    const user = useStore((state) => state.user);
    const [isLoading, setIsLoading] = useState<boolean>(user === undefined);
    useLoginPersistance(isLoading, setIsLoading);
    const [logoutMutation] = useLogoutMutation();
    return (
        <>
            <Head>
                <title>{pageTitle} - Admin</title>
                <meta name="description" content="Admin page" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Notifications notifications={notifications} />
            <div className={Style.container}>
                {isLoading ? (
                    <LoadingComponent />
                ) : user !== undefined ? (
                    <div>
                        <h1>Welcome {user.username}</h1>
                        <button
                            onClick={() => {
                                useStore.setState({ user: undefined });
                                logoutMutation();
                                localStorage.removeItem("user");
                            }}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <LoginComponent setNotifications={setNotifications} />
                )}
            </div>
        </>
    );
}

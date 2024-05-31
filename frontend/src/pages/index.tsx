import Head from "next/head";
import styles from "@/styles/pages/Home.module.scss";
import useLoginPersistance from "@/services/auth/loginPersistance";
import { useStore } from "@/services/global/store";
import { useEffect, useState } from "react";
import LoadingComponent from "@/components/loading";

export default function Home() {
    const user = useStore((state) => state.user);
    const [isLoading, setIsLoading] = useState<boolean>(user === undefined);
    useLoginPersistance(isLoading, setIsLoading);
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main}`}>
                {isLoading ? (
                    <LoadingComponent />
                ) : (
                    <p>Welcome {user?.username}</p>
                )}
            </main>
        </>
    );
}

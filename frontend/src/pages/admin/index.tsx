import Head from "next/head";
import Style from "@/styles/pages/admin/Admin.module.scss";
import { useEffect, useState } from "react";
import LoginComponent from "@/components/admin/login";
import { Notifications } from "@/components/notifications";

export default function Admin() {
    const pageTitle = process.env.NEXT_PUBLIC_APP_NAME;
    const [notifications, setNotifications] = useState<
        { message: string; type: string }[]
    >([]);
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
                <LoginComponent setNotifications={setNotifications} />
            </div>
        </>
    );
}

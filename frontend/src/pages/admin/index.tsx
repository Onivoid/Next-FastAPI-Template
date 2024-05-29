import Head from "next/head";
import Style from "@/styles/pages/admin/Admin.module.scss";
import { useEffect, useState } from "react";
import LoginComponent from "@/components/admin/login";

export default function Admin() {
    const pageTitle = process.env.NEXT_PUBLIC_APP_NAME;
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
            <div className={Style.container}>
                <LoginComponent />
            </div>
        </>
    );
}

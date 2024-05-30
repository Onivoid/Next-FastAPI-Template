import { FormEvent, useEffect, useState } from "react";
import Style from "@/styles/components/admin/Login.module.scss";
import {
    AuthenticatedUser,
    MutationLoginArgs,
    Error,
} from "@/services/graphql/types/codegen";
import { useLoginMutation } from "@/services/graphql/hooks/UsersMutations";
import { useStore } from "@/services/global/store";

export default function LoginComponent({
    setNotifications,
}: {
    setNotifications: (
        notifications: { message: string; type: string }[],
    ) => void;
}) {
    const [loginMutation, { data, loading, error }] = useLoginMutation();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        await loginMutation({
            variables: data as MutationLoginArgs,
        });
    };

    useEffect(() => {
        if (data === null || data === undefined) return;
        if (
            (data.login as AuthenticatedUser).__typename !== "AuthenticatedUser"
        ) {
            setNotifications([
                { message: (data.login as Error).message, type: "error" },
            ]);
            return;
        } else {
            let userData = data.login as AuthenticatedUser;
            if (userData.role !== "ADMIN") {
                setNotifications([
                    {
                        message: "Vous n'êtes pas Administrateur.",
                        type: "warning",
                    },
                ]);
                return;
            }
            setNotifications([
                { message: "Vous êtes connecté.", type: "success" },
            ]);
            useStore.setState({ user: userData });
        }
    }, [data, setNotifications]);

    return (
        <>
            <div className={Style.cardContainer}>
                <div className={Style.card}>
                    <form
                        onSubmit={handleSubmit}
                        className={Style.formContainer}
                    >
                        <p className={Style.formHeader}>Login</p>
                        <div className={Style.field}>
                            <i className="pi pi-user"></i>
                            <input
                                type="text"
                                className={Style.inputField}
                                name="username"
                                required
                                placeholder="Username"
                                autoComplete="off"
                            />
                        </div>
                        <div className={Style.field}>
                            <i className="pi pi-lock"></i>
                            <input
                                type="password"
                                className={Style.inputField}
                                name="password"
                                required
                                placeholder="Password"
                                autoComplete="off"
                            />
                        </div>
                        <button type="submit" className={Style.connectButton}>
                            Connect
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

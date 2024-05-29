import { FormEvent } from "react";
import Style from "@/styles/components/admin/Login.module.scss";
import {
    AuthenticatedUser,
    MutationLoginArgs,
    Error,
} from "@/services/graphql/types/codegen";
import { useLoginMutation } from "@/services/graphql/hooks/UsersMutations";

export default function LoginComponent() {
    const [loginMutation, { data, loading, error }] = useLoginMutation();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        await loginMutation({
            variables: data as MutationLoginArgs,
        });
    };

    if (data) {
        if (
            (data.login as AuthenticatedUser).__typename === "AuthenticatedUser"
        ) {
            console.log("AuthenticatedUser", data.login);
        } else {
            console.log("Error", (data.login as Error).message);
        }
    }

    return (
        <div className={Style.cardContainer}>
            <div className={Style.card}>
                <form onSubmit={handleSubmit} className={Style.formContainer}>
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
    );
}

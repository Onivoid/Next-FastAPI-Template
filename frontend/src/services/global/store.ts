import { create } from "zustand";
import { AuthenticatedUser } from "@/services/graphql/types/codegen";

type State = {
    user: AuthenticatedUser | undefined;
    setUser: (user: AuthenticatedUser) => void;
};

export const useStore = create<State>((set) => ({
    user: undefined,
    setUser: (user: AuthenticatedUser) => set({ user }),
}));

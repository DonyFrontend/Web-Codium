import { Auth_state } from "@/features/auth/model/state/auth-state";
import { IAuthState } from "@/features/auth/model/types/auth-types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useAuthStore = create(
  devtools<IAuthState>((...set) => ({
    ...Auth_state(...set),
  }))
);

export { useAuthStore };

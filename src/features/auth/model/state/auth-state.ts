import { StateCreator } from "zustand";
import { IAuthState } from "../types/auth-types";

const Auth_state: StateCreator<IAuthState> = () => ({
  async loginUser(loading) {
    try {
      loading(true);
      window.location.href = "http://localhost:3000/auth/github";
      loading(false);
    } catch (error) {
      console.log("Error during login:", error);
    }
  },
});

export { Auth_state };

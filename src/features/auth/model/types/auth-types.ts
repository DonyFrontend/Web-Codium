import { Dispatch, SetStateAction } from "react";

export interface IAuthState {
  loginUser: (loading: Dispatch<SetStateAction<boolean>>) => void;
}
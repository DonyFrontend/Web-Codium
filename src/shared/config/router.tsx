import { ReactNode } from "react";
import { WelcomePage } from "@/pages/welcome-page";
import { Main } from "@/pages/main";
import { CallbackTokenProvider } from "@/app/providers";

export enum RouterEnum {
  WELCOME = "/welcome",
  MAIN = "/",
  AUTH_SUCCESS = "/auth/success",
}

export interface RouterType {
  path: string;
  element: ReactNode;
}

export const RoutesObject: Record<RouterEnum, RouterType> = {
  [RouterEnum.WELCOME]: {
    element: <WelcomePage />,
    path: RouterEnum.WELCOME,
  },
  [RouterEnum.MAIN]: {
    element: <Main />,
    path: RouterEnum.MAIN,
  },
  [RouterEnum.AUTH_SUCCESS]: {
    element: <CallbackTokenProvider />,
    path: RouterEnum.AUTH_SUCCESS,
  },
};

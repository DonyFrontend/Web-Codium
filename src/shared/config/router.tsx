import { ReactNode } from "react";
import { WelcomePage } from "@/pages/welcome-page";
import { Main } from "@/pages/main";

export enum RouterEnum {
  WELCOME = "/",
  MAIN = "/main",
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
};

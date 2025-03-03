"use client"; // فقط این کامپوننت باید در سمت کلاینت اجرا بشه

import { Provider } from "react-redux";
import { store } from "@/app/store/store";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import store from "@/store";
import MainNavigation from "../components/navigation/MainNavigation";
import { Provider } from "react-redux";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname === "/project-details/[projectId]") {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
  return (
    <Provider store={store}>
      <MainNavigation>
        <Component {...pageProps} />
      </MainNavigation>
    </Provider>
  );
}

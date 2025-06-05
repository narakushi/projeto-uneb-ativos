import "@/styles/globals.css";
import { Header } from "@/components/layout/header";
import { FormProvider } from "@/context/FormContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <FormProvider>
        <Component {...pageProps} />
      </FormProvider>
    </>
  );
}

import "../styles/index.css";
import { AppProps } from "next/app";
import { ConsultationProvider } from "../components/Consultation";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Authorize</title>
      </Head>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <ConsultationProvider>
        <Component {...pageProps} />
      </ConsultationProvider>
    </>
  );
}

export default MyApp;

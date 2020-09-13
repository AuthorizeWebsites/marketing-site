import "../styles/index.css";
import { AppProps } from "next/app";
import { ConsultationProvider } from "../components/Consultation";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Authorize</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-177903265-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-177903265-1');
            `,
          }}
        ></script>
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

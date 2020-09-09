import "../styles/index.css";
import { AppProps } from "next/app";
import { ConsultationProvider } from "../components/Consultation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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

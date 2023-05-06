import Navbar from "../components/nabar";
import Footer from "../components/footer";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react"


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
      </SessionProvider>
    </>
  );
}




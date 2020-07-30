import NavBar from "../components/Navbar/navbar.component";
import Footer from "../components/Footer/Footer.component";
import "./global.css";
import "bootstrap/dist/css/bootstrap.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

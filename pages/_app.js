import "bootstrap/dist/css/bootstrap.css";
import Footer from "../components/Footer/Footer.component";
import NavBar from "../components/Navbar/navbar.component";
import "./global.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <div className="layout">
        <div className="child1">
          <Component {...pageProps} />
        </div>

        <div className="child2">
          <Footer />
        </div>
      </div>
    </>
  );
}

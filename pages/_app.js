import Footer from "../components/Footer";
import NavbarComponent from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="overflow-hidden fullcontain">
        <NavbarComponent />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;

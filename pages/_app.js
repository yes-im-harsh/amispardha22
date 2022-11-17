import Footer from "../components/footer";
import NavbarComponent from "../components/navbar";
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

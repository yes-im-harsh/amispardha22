import { ToastContainer } from "react-toastify";
import Footer from "../components/footer";
import NavbarComponent from "../components/navbar";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="overflow-hidden fullcontain">
        <NavbarComponent />
        <Component {...pageProps} />
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
}

export default MyApp;

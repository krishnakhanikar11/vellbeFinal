import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Head } from "next/head";


const Format = ({ children }) => {
  return (
    <div className="w-full overflow-hidden ">
      <Head>
        <title>Vellbe</title>
      </Head>
      <div className="paddingX  flexCenter">
        <div className="boxWidth">
          <header>
            <Navbar />
          </header>
        </div>
      </div>
      <main>{children}</main>
      <div className="paddingX  flexCenter">
        <div className="boxWidth">
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Format;
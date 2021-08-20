import type {NextPage} from "next";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import HeaderSubTitle from "./components/HeaderSubTitle";
import GridProducts from "./components/GridProducts";
import Footer from "./components/Footer";

const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <NavBar/>
      <Header/>
      <HeaderSubTitle/>
      <GridProducts/>
      <Footer/>
    </div>
  );
};

export default Home;

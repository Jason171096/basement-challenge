import type {NextPage} from "next";
import { Drawer } from '@material-ui/core';
import { EventHandler, useState } from "react";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import HeaderSubTitle from "./components/HeaderSubTitle";
import GridProducts from "./components/GridProducts";
import Footer from "./components/Footer";
import YourCart from "./components/YourCart";


const Home: NextPage = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const callbackOnClick = (bool: boolean) => {
    setCartOpen(bool)
  }
  return (
    <div className="bg-black">
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <YourCart functionCallback={callbackOnClick}/>
      </Drawer>
      <NavBar functionCallback={callbackOnClick} />
      <Header/>
      <HeaderSubTitle/>
      <GridProducts/>
      <Footer/>
    </div>
  );
};

export default Home;

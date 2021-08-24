import type {NextPage} from "next";
import { Drawer } from '@material-ui/core';
import { makeStyles, createStyles, Theme, } from '@material-ui/core/styles';
import { useState } from "react";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import HeaderSubTitle from "./components/HeaderSubTitle";
import GridProducts from "./components/GridProducts";
import Footer from "./components/Footer";
import DrawerYourCart from "./components/Drawer";



const Home: NextPage = () => {
  
  const windowWidth = () => {
    let width = 500
    if (typeof window !== "undefined") {
      width = window.innerWidth <= 844 ? window.innerWidth : 500
    }
    return width
}

const windowHeight = () => {
    let height = 500;
    if (typeof window !== "undefined") {
      height = window.innerWidth <= 844 ? window.innerHeight : 500
  }
  return height
}

  const useStyles = makeStyles((theme: Theme) =>
      createStyles({
        drawerPaper: {
          height: 500,//Number(console.log(windowHeight())),
          width: 500//Number(console.log(windowWidth())),
        },
}));

  const classes = useStyles();

  const [cartOpen, setCartOpen] = useState(false);

  const callbackOnClick = (bool: boolean) => {
    setCartOpen(bool)
  }
  return (
    <div className="bg-black">
      <Drawer classes={{ paper: classes.drawerPaper }} anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
          <DrawerYourCart functionCallback={callbackOnClick}/>
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

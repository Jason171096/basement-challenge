import shirtImg from "../../public/products/shirt.png";
import hoodieImg from "../../public/products/hoodie.png";
import capImg from "../../public/products/cap.png";
import Product from "./Product";
import { useState } from "react";

export type ItemProduct = {
  id: number;
  image: StaticImageData;
  nameProduct: string;
  descriptionProduct: string;
  priceProduct: string;
  amount: number
}

const GridProducts = () => {
  const [cartItems, setCartItems] = useState([] as ItemProduct[]);

  const handleAddToCart = (clickedItem: ItemProduct) => {
    setCartItems(prev => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  return (
    <div className="py-5 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-8">
        <div onClick={() => {handleAddToCart}}>
          <Product
            index={0}
            image={shirtImg}
            nameProduct={"Black t-shirt"}
            priceProduct={"$7.95"}
            />
        </div>
        <div>
          <Product
            index={1}
            image={hoodieImg}
            nameProduct={"Black hoodie"}
            priceProduct={"$13"}
          />
        </div>
        <div>
          <Product
            index={2}
            image={capImg}
            nameProduct={"Black cap"}
            priceProduct={"$23"}
          />
        </div>
      </div>
    </div>
  );
};

export default GridProducts;

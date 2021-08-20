import shirtImg from "../../public/products/shirt.png";
import hoodieImg from "../../public/products/hoodie.png";
import capImg from "../../public/products/cap.png";
import Product from "./Product";

const GridProducts = () => {
  return (
    <div className="py-16">
      <div className="grid grid-cols-3 gap-10 mx-10">
        <div>
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

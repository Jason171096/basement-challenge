import shirtImg from "../../public/products/shirt.png";
import hoodieImg from "../../public/products/hoodie.png";
import capImg from "../../public/products/cap.png";
import Product from "./Product";

const GridProducts = () => {
  return (
    <div className="py-5 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-8">
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

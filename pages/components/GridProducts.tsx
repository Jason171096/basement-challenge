import Image from "next/image";
import shirtImg from "../../public/products/shirt.png";
import hoodieImg from "../../public/products/hoodie.png";
import capImg from "../../public/products/cap.png";
import worldIco from "../../public/icons/world.svg";
import addImg from "../../public/add.png";

const GridProducts = () => {
  return (
    <div className="py-16">
      <div className="grid grid-cols-3 gap-10 mx-10">
        <div>
          <div className="bg-gradient-to-b from-black via-primary to-secondary border-b-4">
            <div className="flex justify-center">
                <Image src={shirtImg} />
              <div className="flex items-center justify-center">
                <div className="absolute">
                  <Image src={worldIco} />
                </div>
                <div className="absolute">
                  <Image src={addImg} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-2xl font-bold pt-2">
            <h1>Black t-shirt</h1>
            <h1>$7.95</h1>
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-b from-black via-primary to-secondary border-b-4">
            <Image src={hoodieImg} />
          </div>
          <div className="flex justify-between text-2xl font-bold pt-2">
            <h1>Black hoodie</h1>
            <h1>$13</h1>
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-b from-black via-primary to-secondary border-b-4">
            <Image src={capImg} />
          </div>
          <div className="flex justify-between text-2xl font-bold pt-2">
            <h1>Black cap</h1>
            <h1>$23</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridProducts;

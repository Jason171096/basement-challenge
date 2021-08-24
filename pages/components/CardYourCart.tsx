import Image from "next/image";
import { ItemProduct } from "../components/GridProducts"
import shirtImg from "../../public/products/shirt.png";

type Props = {
    item: ItemProduct
}

const CardYourCart = () => {
  return (
    <div>
      <div className="flex flex-row h-[200px] text-white border p-3 ">
        <div className="w-[150px] bg-gradient-to-b from-black via-primary to-secondary">
          <Image src={shirtImg} />
        </div>
        <div className="w-[300px] flex flex-col justify-between ml-3">
          <div>
            <div>
              <h1>BLACK T-SHIRT</h1>
            </div>
            <div>
              <p>Unisex Basic Softstyle T-Shirt</p>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <div className="inline-flex">
                <div>
                  <h3>QUANTITY:</h3>
                </div>
                <div className="inline-flex ml-3 border rounded-full">
                  <button className="mx-1 px-1">-</button>
                  <p>0</p>
                  <button className="mx-1 px-1">+</button>
                </div>
              </div>
              <div className="inline-flex">
                <div>
                  <h3>SIZE:</h3>
                </div>
                <div className="ml-3">
                  <ul className="inline-flex space-x-2">
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="text-2xl mt-5">
                <h1>$12.50</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardYourCart;

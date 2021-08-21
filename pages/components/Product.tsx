import Image from "next/image";
import worldIco from "../../public/icons/world.svg";
import addImg from "../../public/add.png";

interface IDataProduct {
  index: number;
  image: StaticImageData;
  nameProduct: string;
  priceProduct: string;
}

const Product = (props: IDataProduct) => {
    //let _addToCartImg = (document.querySelectorAll(".addToCart"));
    // for (let index = 0; index < _addToCartImg.length; index++) {
    //   _addToCartImg[index].style.visibility = "hidden";
    // }
    const hiddenElement = () => {
      //_addToCartImg[props.index].style.visibility = "hidden";
    };
    const visibleElement = () => {
      //_addToCartImg[props.index].style.visibility = "visible";
    };
  return (
    <>
      <div className="bg-gradient-to-b from-black via-primary to-secondary border-b-4 cursor-pointer" 
      onMouseEnter={() => { visibleElement() }}
      onMouseLeave={() => { hiddenElement() }}
      >
        <div className="flex relative justify-center items-center">
          <div>
            <Image src={props.image} />
          </div>
          <div className="flex absolute w-auto h-auto justify-center items-center addToCart">
            <div className="absolute">
              <Image src={worldIco} />
            </div>
            <div className="">
              <Image src={addImg} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-2xl font-bold pt-2">
        <h1>{props.nameProduct}</h1>
        <h1>{props.priceProduct}</h1>
      </div>
    </>
  );
};

export default Product;

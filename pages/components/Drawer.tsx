import Image from "next/image";
import closeIco from '../../public/icons/close.svg';
import yourCartImg from '../../public/yourcart.png';
import yourCartImgMobile from '../../public/yourcartmobile.png';
import checkout from '../../public/checkout.png';
import CardYourCart from "./CardYourCart";
import { ItemProduct } from '../components/GridProducts'

type Props = {
    items: ItemProduct[]
}

interface IButton {
    functionCallback: Function
}

const DrawerYourCart = (props: IButton) => {
    let total = 37.50
    return (
        <div className="flex flex-col md:w-[500px] md:h-[500px] bg-black border-l border-b">
            <div className="flex justify-end cursor-pointer pt-5 pb-3 px-2" onClick={() => { props.functionCallback(false) }}>
                <Image src={closeIco} width={110} height={15}/>
            </div>
            <div className="px-4 pt-2">
                <div className="hidden md:flex">
                    <Image src={yourCartImg}/>
                </div>
                <div className="md:hidden">
                    <Image src={yourCartImgMobile}/>
                </div>
                <div className="w-[467px] h-[330px] py-3">
                    {/* {items.length === 0 ? <p>No items</p>: null}
                    {items.map(item => (
                        <CardYourCart key={item.id}/>
                    ))} */}
                    <CardYourCart />
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="w-[300px] h-[50px] text-white text-3xl border-t border-r pl-5 pt-2" >
                    <h1>TOTAL: ${total}</h1>
                </div>
                <div className="w-[200px] h-[50px] border-t px-5 py-3 cursor-pointer">
                    <Image src={checkout} />
                </div>
            </div>
        </div>
    )
}

export default DrawerYourCart

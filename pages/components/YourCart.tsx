import Image from "next/image";
import closeIco from '../../public/icons/close.svg';
import yourCartImg from '../../public/yourcart.png';
import checkout from '../../public/checkout.png';

interface IButton {
    functionCallback: Function
}

const YourCart = (props: IButton) => {
    let total = 37.5

    return (
        <div className="w-96 h-96 bg-black">
            <div className="cursor-pointer" onClick={() => { props.functionCallback(false) }}>
                <Image src={closeIco} />
            </div>
            <div>
                <div>
                    <Image src={yourCartImg}/>
                </div>
                <div>

                </div>
            </div>
            <div>
                <div>
                    <h1>TOTAL: ${total}</h1>
                </div>
                <div>
                    <Image src={checkout} />
                </div>
            </div>
        </div>
    )
}

export default YourCart

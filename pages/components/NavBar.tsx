import Image from "next/image";
import logoImg from '../../public/logo.svg';
import logoIco from '../../public/favicon.png';
import nuclearIco from '../../public/icons/nuclear.svg';
import hdIco from '../../public/icons/hd.svg';
import eyeIco from '../../public/icons/eye.svg';
import four4kIco from '../../public/icons/4k.svg';
import warningIco from '../../public/icons/warning.svg';

interface IButton {
    functionCallback: Function
}
const NavBar = (props: IButton) => {
    let number = 0;
    return (
        <div className="flex flex-row items-center justify-between mt-8 max-w-screen-2xl mx-8 2xl:mx-auto">
            <div>
                <div className="hidden md:flex">
                    <Image className="cursor-pointer" src={logoImg} alt="Basement" onClick={() => {}}/>
                </div>
                <div className="w-16 h-16 flex md:hidden"> 
                    <Image className="cursor-pointer " src={logoIco} alt="Basement" onClick={() => {}}/>
                </div> 
            </div>
            <div className="flex content-center space-x-3 hidden md:flex">
                <div>
                    <Image className="cursor-pointer" src={nuclearIco} onClick={() => {}} />
                </div>
                <div>
                    <Image className="cursor-pointer" src={hdIco} onClick={() => {}}/>
                </div>
                <div>
                    <Image className="cursor-pointer" src={eyeIco} onClick={() => {}}/>
                </div>
                <div>
                    <Image className="cursor-pointer" src={four4kIco} onClick={() => {}}/>
                </div>
                <div>
                    <Image className="cursor-pointer" src={warningIco} onClick={() => {}}/>
                </div>
            </div>
            <div>
                <button className="border-2 px-8 py-2 rounded-full text-base font-bold md:text-xl" onClick={() => { props.functionCallback(true) }}>CART ({number})</button>
            </div>
        </div>
    )
}

export default NavBar

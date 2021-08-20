import Image from "next/image";
import logoImg from '../../public/logo.svg';
import nuclearIco from '../../public/icons/nuclear.svg';
import hdIco from '../../public/icons/hd.svg';
import eyeIco from '../../public/icons/eye.svg';
import four4kIco from '../../public/icons/4k.svg';
import warningIco from '../../public/icons/warning.svg';

const NavBar = () => {
    let number = 0;
    return (
        <div className="flex flex-row items-center justify-between mx-8 mt-8 max-w-screen-2xl mx-auto">
            <div>
                <Image src={logoImg} alt="Basement" onClick={() => {}}/>
            </div>
            <div className="flex content-center space-x-3">
                <div>
                    <Image src={nuclearIco} onClick={() => {}} />
                </div>
                <div>
                    <Image src={hdIco} onClick={() => {}}/>
                </div>
                <div>
                    <Image src={eyeIco} onClick={() => {}}/>
                </div>
                <div>
                    <Image src={four4kIco} onClick={() => {}}/>
                </div>
                <div>
                    <Image src={warningIco} onClick={() => {}}/>
                </div>
            </div>
            <div>
                <button className="border-2 px-8 py-2 rounded-full text-xl font-bold">CART ({number})</button>
            </div>
        </div>
    )
}

export default NavBar

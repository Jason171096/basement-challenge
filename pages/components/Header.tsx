import Image from "next/image";
import headerImg from '../../public/header.svg';

const Header = () => {
    return (
        <div className="flex justify-center py-10">
            <Image src={headerImg} alt="Header" />
        </div>
    )
}

export default Header

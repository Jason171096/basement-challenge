import Image from "next/image";
import footerImg from '../../public/footer.svg';

function Footer() {
    return (
        <div className="flex justify-center py-10">
            <Image src={footerImg} alt="Footer" />
        </div>
    )
}

export default Footer

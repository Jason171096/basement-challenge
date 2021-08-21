import Image from "next/image";
import asteriskIco1 from "../../public/icons/asterisk1.svg";
import asteriskIco2 from "../../public/icons/asterisk2.svg";

const HeaderSubTitle = () => {
  return (
    <>
      <div className="border-b-2 border-t-2 overflow-hidden">
        <h1 className="text-4xl py-2 animate-text-slide">
          - A man can't have enough basement. swag
        </h1>
      </div>
      <div className="absolute right-40 bottom-36">
        {/* <Image src={asteriskIco1}/> */}
      </div>
      <div className="absolute">{/* <Image src={asteriskIco2}/> */}</div>
    </>
  );
};

export default HeaderSubTitle;

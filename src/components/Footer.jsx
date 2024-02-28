import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
function Footer() {
  return (
    <div className="flex flex-row w-full  text-slate-200 justify-center flex-wrap gap-4 px-2  pb-14 pt-6 md:pt-8 md:pb-20 bg-red-700 md:justify-around transition-all">
      <div className="flex flex-row  gap-2 flex-shrink-0">
        <div className="bg-red-100 w-fit rounded-full px-1 py-[5px] ">
          <FaPhone color="#B91C1C" />
        </div>
        <p>
          Toll free <span>1800 200 1234</span>
        </p>
      </div>
      <div className="flex flex-row  gap-2">
        <FaFacebook size="25px" />
        <p>www.facebook.com/cripumps</p>
      </div>
      <div className="flex flex-row  gap-2">
        <FaGlobe size="25px" />
        <p>www.crigroups.com</p>
      </div>
    </div>
  );
}

export default Footer;

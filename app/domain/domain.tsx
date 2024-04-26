import { BsBank } from "react-icons/bs";
import { FaBagShopping } from "react-icons/fa6";
import { FaNetworkWired } from "react-icons/fa6";
import { SiStudyverse } from "react-icons/si";
import { MdOutlineAppShortcut } from "react-icons/md";
const Domain = () => {
    return (<>
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-center mb-8 ">
        <span className="border-b-4 border-blue-500">DOMAINS</span></h2>
        <div className="Domains bg-fixed ">
        <div className="domain-container min-w-full">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5 min-h-full min-w-full">
              <div className="domain">
                <div className="service-icon rounded-full border-8 mb-5 w-20 h-20 flex justify-center items-center border-white-300">
                  <BsBank className="text-3xl text-white"/>
                </div>
                <p className="text-center text-white pt1">Banking</p>
              </div>
              <div className="domain">
                <div className="service-icon rounded-full border-8 mb-5 w-20 h-20 flex justify-center items-center border-white-300">
                  <FaBagShopping className="text-3xl text-white"/>
                </div>
                <p className="text-center text-white pt1">Ecommerce</p>
              </div>
              <div className="domain">
                <div className="service-icon rounded-full border-8 mb-5 w-20 h-20 flex justify-center items-center border-white-300">
                  <FaNetworkWired className="text-3xl text-white"/>
                </div>
                <p className="text-center text-white pt1">Networking</p>
              </div>
              <div className="domain">
                <div className="service-icon rounded-full border-8 mb-5 w-20 h-20 flex justify-center items-center border-white-300">
                  <SiStudyverse className="text-3xl text-white"/>
                </div>
                <p className="text-center text-white pt1">Online Study</p>
              </div>
              <div className="domain">
                <div className="service-icon rounded-full border-8 mb-5 w-20 h-20 flex justify-center items-center border-white-300">
                  <MdOutlineAppShortcut className="text-3xl text-white"/>
                </div>
                <p className="text-center text-white pt1">Apps</p>
              </div>
              
            </div>
        </div>
        </div>
        </>
        )
}
export default Domain;
import { CiDesktop } from "react-icons/ci";
import { DiResponsive } from "react-icons/di";
import { MdDesignServices } from "react-icons/md";
const Service = () => {
    return (<>
   <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-center mb-8 ">
        <span className="border-b-4 border-blue-500">SERVICES</span></h2>
      <div className="  grid grid-cols-1 md:grid-cols-3 gap-5  ">
          <div className=" card rounded shadow-2xl bg-white flex flex-col justify-center p-8 transition duration-300 delay-150 hover:delay-300">
            <div className="service-icon rounded-full border-8 mb-5 w-20 h-20 flex justify-center items-center border-blue-300">
              <CiDesktop className="text-3xl "/>
            </div>
            <h2 className="text-2xl font-bold text-center p-4">WEB DEVELOPMENT</h2>
            <p className=" h-40 text-center text-current">Have professional experience in web development using Nextjs, Reactjs, Angular, Redux Toolkit, JavaScript, TypeScript,  RESTful APIs, Jenkins for CI/CD, and GitHub. </p>
          </div>
          <div className=" card rounded shadow-2xl bg-white flex  flex-col justify-center p-8 transition duration-300 delay-150 hover:delay-300">
            <div className=" service-icon rounded-full border-8 mb-5 w-20 h-20 flex justify-center items-center border-blue-300">
              <DiResponsive className="text-5xl"/>
            </div>
            <h2 className="text-2xl font-bold text-center p-4">RESPONSIVE DESIGN</h2>
            <p className=" h-40 text-center text-current">Have professional experience in Responsive Design using Bootrap, Tailwindcss, Meterial UI, css3, LESS/SASS, media Query. </p>
          </div>
          <div className="card rounded shadow-2xl bg-white flex flex-col justify-center p-8 transition duration-300 delay-150 hover:delay-300 ">
            <div className="service-icon rounded-full border-8 mb-5 w-20 h-20 flex justify-center items-center border-blue-300">
              <MdDesignServices className="text-3xl"/>
            </div>
            <h2 className="text-2xl font-bold text-center p-4">WEB DESIGN</h2>
            <p className=" h-40 text-center text-current">Good exposer on Figma wireframe, and Sketch wirefram. </p>
          </div>
      </div>
    </>)
}

export default Service;
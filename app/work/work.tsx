const Work =() => {
    return (<>
     <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-center my-8 ">
        <span className="border-b-4 border-blue-500">WORK</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <a href="https://cpr.heart.org/en/" target="_blank" className="p-4 bg-white shadow-xl rounded-xl work-card">
            <picture className="work-pic rounded-lg overflow-hidden block grid items-center justify-center">
              <img
                className="object-cover hover:scale-125 ease-out duration-300 delay-150 hover:delay-300"
                src="https://upload.wikimedia.org/wikipedia/en/e/e6/American_Heart_Association_Logo.svg"
              />
            </picture>

            <h1 className="mt-4 mb-2 text-xl font-bold">American Heart Association</h1>
            <p className="text-sm text-gray-600">
            The American Heart Association (AHA) is a nonprofit organization in the United States that funds cardiovascular medical research,
             educates consumers on healthy living and fosters appropriate cardiac care in an effort to reduce disability and deaths caused by
              cardiovascular disease and stroke.
            </p>
            
          </a>
          <a  href="https://product-selection.grundfos.com/in/categories/pumps?tab=categories" target="_blank" className="p-4 bg-white shadow-xl rounded-xl work-card">
            <picture className=" work-pic rounded-lg overflow-hidden block grid items-center justify-center">
              <img
                className="object-cover hover:scale-125 ease-out duration-300 delay-150 hover:delay-300"
                src="https://1000logos.net/wp-content/uploads/2020/08/Grundfos-Logo-old.png"
              />
            </picture>

            <h1 className="mt-4 mb-2 text-xl font-bold">Grundfos</h1>
            <p className="text-sm text-gray-600">
            Grundfos is the largest pump manufacturer in the world, based in Denmark, with more than 19,000 employees globally.
             The annual production of more than 16 million pump units, circulator pumps, submersible pumps, and centrifugal pumps.
            </p>
           
          </a>
          <a href="https://www.extremenetworks.com/solutions/wired-access" target="_blank" className="p-4 bg-white shadow-xl rounded-xl work-card">
            <picture className="work-pic rounded-lg overflow-hidden block grid items-center justify-center">
              <img
                className="object-cover hover:scale-125 ease-in duration-300 delay-150 hover:delay-300"
                src="https://supportdocs.extremenetworks.com/wp-content/themes/extremenetworks/newimg/logo.svg"
              />
            </picture>

            <h1 className="mt-4 mb-2 text-xl font-bold">Extreme Networks</h1>
            <p className="text-sm text-gray-600">
            Extreme Networks, Inc., is an American networking company based in Morrisville, North Carolina. 
            Extreme Networks designs, develops, and manufactures wired and wireless network infrastructure equipment and develops 
            the software for network management, policy, analytics, security and access controls.
            </p>
            
          </a>
          <a href="https://www.bankofamerica.com/" target="_blank" className="p-4 bg-white shadow-xl rounded-xl work-card">
            <picture className="work-pic rounded-lg overflow-hidden block grid items-center justify-center">
              <img
                className="object-cover hover:scale-125 ease-out duration-300 delay-150 hover:delay-300"
                src="https://play-lh.googleusercontent.com/qp53mBI8DbQV3fiNlZKVf_6FjDgOAO76DCQLO7WpeJjiJn4lC90KQyKDkNQFtH3Ju-E"
              />
            </picture>

            <h1 className="mt-4 mb-2 text-xl font-bold">Bank of America</h1>
            <p className="text-sm text-gray-600">
            The Bank of America Corporation is an American multinational investment bank and financial services
             holding company headquartered at the Bank of America Corporate Center in Charlotte, North Carolina, 
             with investment banking and auxiliary headquarters in Manhattan.
            </p>
            
          </a>

          <a href="https://www.pearson.com/" target="_blank" className="p-4 bg-white shadow-xl rounded-xl work-card">
            <picture className="work-pic rounded-lg overflow-hidden block grid items-center justify-center">
              <img
                className="object-cover hover:scale-125 ease-in duration-300 delay-150 hover:delay-300"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Pearson_logo.svg/2560px-Pearson_logo.svg.png"
              />
            </picture>

            <h1 className="mt-4 mb-2 text-xl font-bold">Pearson</h1>
            <p className="text-sm text-gray-600">
            Pearson plc is a multinational corporation, headquartered in the UK, focused on educational publishing and services.
            Pearson is a web-based application designed to work in all modern browsers including Google Chrome,
             the sole browser of the Chromebook operating system, and the iOS operating system on iPads. 
             Pearson courses work on Chromebooks and iPads, with some exceptions.
            </p>
          
          </a>

          <a href="https://colortokens.com/products/xshield-workload-protection/" target="_blank" className="p-4 bg-white shadow-xl rounded-xl work-card">
            <picture className="work-pic rounded-lg overflow-hidden block grid items-center justify-center">
              <img
                className="object-cover hover:scale-125 ease-out duration-300 delay-150 hover:delay-300"
                src="https://colortokens.com/wp-content/themes/colortokens-childtheme/assets/images/2024/xshield_logo_menu_.svg"
              />
            </picture>

            <h1 className="mt-4 mb-2 text-xl font-bold">Color Tokens</h1>
            <p className="text-sm text-gray-600">
            The microsegmentation platform is Xshield platform can protect your assets and critical systems, despite an attack.
            it is works on top of the kernal operating system.
            </p>
            
          </a>
          
      </div>
    </>)
}
export default Work;
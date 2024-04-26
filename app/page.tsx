"use client";
import Image from "next/image";
import { Fragment, useRef, useState } from 'react'

import About from "./about/about";
import Service from "./service/service";
import Domain from "./domain/domain";
import Work from "./work/work";
import Link from 'next/link'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'


import TextAnimate from "./header/textAnimate";


export default function Home() {
  const links = [
    {name:"ABOUT"},
    {name:"SERVICE"},
    {name:"DOMAIN"},
    {name:"WORK"}
   ]
  const aboutRef = useRef<null | HTMLDivElement>(null); 
  const ServiceRef = useRef<null | HTMLDivElement>(null); 
  const domainRef = useRef<null | HTMLDivElement>(null); 
  const workRef = useRef<null | HTMLDivElement>(null);
  
  const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
  ]
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [names, setNames] = useState(links);
  
  const sendDataToParent = (name:any) => {
    console.log(name);
    if(name === "ABOUT"){
      aboutRef.current?.scrollIntoView({behavior: 'smooth', block: "end", inline: "nearest"});
      if(mobileMenuOpen) {setMobileMenuOpen(false)}
    }
    else if(name === "SERVICE"){
      ServiceRef.current?.scrollIntoView({behavior: 'smooth', block: "end", inline: "nearest"});
      if(mobileMenuOpen) {setMobileMenuOpen(false)}
    }else if(name === "WORK"){
      workRef.current?.scrollIntoView({behavior: 'smooth', block: "end", inline: "nearest"});
      if(mobileMenuOpen) {setMobileMenuOpen(false)}
    }else if(name === "DOMAIN"){
      domainRef.current?.scrollIntoView({behavior: 'smooth', block: "end", inline: "nearest"});
      if(mobileMenuOpen) {setMobileMenuOpen(false)}
    }
   
    // ServiceRef.current.
  }
  return (
    <main>
     
      <header className="bg-gray-900 header-nav">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex text-white lg:flex-1 ">
                <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only text-white">Your Company</span>
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                </a>
                <h5 className='pl-1 text-2xl sm:text-3xl'><strong>PrevFolio</strong></h5>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only text-white">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className=" links hidden lg:flex lg:gap-x-12 lg:justify-end">
                    {names.map((item, index) => {
                        return (<>
                            <a className="text-sm font-semibold leading-6 text-gray-900 text-white" onClick={() => sendDataToParent(item.name)} key={index+1}>{item.name}</a>
                        </>)
                    })}
                </div>
               
            
            {/* <div className=" links hidden lg:flex lg:gap-x-12 lg:justify-end">
                <a className="text-sm font-semibold leading-6 text-gray-900 text-white">
                   
                    ABOUT
                   
                    
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 text-white">
                    SERVICE
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 text-white">
                    WORK
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 text-white">
                    CONTACT
                </a>
            </div> */}
        </nav>
        <Dialog as="div" className="bg-white lg:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="mobile-menu-popup fixed bg-white inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only text-white">Your Company</span>
                <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                />
                </a>
                <h5 className='pl-1 text-1xl sm:text-3xl'><strong>PrevFolio</strong></h5>
                <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
                >
                <span className="sr-only ">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                    {names.map((item, index) => {
                        return (<>
                            <a className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" onClick={() => sendDataToParent(item.name)} key={index+1}>{item.name}</a>
                        </>)
                    })}
                        {/* <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                        ABOUT
                        </a>
                        <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                        SERVICE
                        </a>
                        <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                        WORK
                        </a>
                        <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                        CONTACT
                        </a> */}
                    </div>
                
                </div>
            </div>
            </Dialog.Panel>
        </Dialog>
        </header>
      <section className="home-banner relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl flex justify-center px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-center">I am Praveen Kumar</h2>
          <h3 className="text-3xl mt-6 text-lg font-bold text-center leading-8 text-gray-300">
          <TextAnimate />
          </h3>
        </div>
      </div>
      </section>
      
      <section className=" about mx-auto max-w-7xl p-6 lg:px-8 my-8 rounded shadow bg-white" ref={aboutRef}>
     
        <About />

      </section>

      <section className="service mx-auto max-w-7xl my-8" ref={ServiceRef}>
      <Service />
      
      </section>

      <section ref={domainRef}>
        <Domain />
        
      </section>


      <section className=" mx-auto max-w-7xl my-8" ref={workRef}>
          <Work />
      </section>
      <footer className="mt-5">
        <div className="mx-auto max-w-7xl">
        <p className="copyright text-center text-white">© Copyright PrevFolio. All Rights Reserved <strong>PrevFolio</strong>. All Rights Reserved</p>
        </div>

      </footer>
      

      
     
    </main>
  );
}

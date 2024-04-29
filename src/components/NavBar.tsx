"use client";
import ComponentLogo from "./ComponentLogo";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import navLinks from "@/data/navLinks";

// import "./NavBar.css";

const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return(
  <>
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between pb-4 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <ComponentLogo
          size={80}
          src={"/brigantium-logo.png"}
          alt={"Brigantium logo"}
          href={"#"}
          classNameA="-m-1.5 p-1.5"
        />
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-8 w-8" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-semibold leading-6 text-white"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-grey-900/10">
        <div className="flex items-center justify-between">
          <ComponentLogo
            size={60}
            src={"/brigantium-logo.png"}
            alt={"Brigantium logo"}
            href={"#"}
            classNameA="-m-1.5 p-1.5"
          />
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  </>
  )

  //   <nav>
  //     <div>
  //       <button
  //         id="menu-btn"
  //         className={`hamburger sm:hidden ${isOpen ? "open" : ""}`}
  //         type="button"
  //         onClick={toggleMenu}
  //       >
  //         <span className="hamburger-top"></span>
  //         <span className="hamburger-middle"></span>
  //         <span className="hamburger-bottom"></span>
  //       </button>
  //       <div
  //         className={`${
  //           isOpen ? "flex" : "hidden"
  //         } sm:hidden absolute bg-black p-6 rounded-lg left-6 right-6 top-20 z-50 flex-col items-center justify-center w-full space-y-6 font-bold text-white`}
  //       >
  //         {navLinks.map((link, index) => (
  //           <Link
  //             key={index}
  //             href={link.href!}
  //             className="text-gray-500 hover:text-gray-800"
  //           >
  //             {link.name}
  //           </Link>
  //         ))}
  //       </div>

  //       <div className="hidden sm:flex space-x-8 items-center font-bold">
  //         {navLinks.map((link, index) => (
  //           <Link
  //             key={index}
  //             href={link.href!}
  //             className="text-gray-500 hover:text-gray-800"
  //           >
  //             {link.name}
  //           </Link>
  //         ))}
  //       </div>
  //     </div>
  //   </nav>
  // );
};

export default NavBar;

"use client";

import NavLink from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex w-full pt-6">
      <div className="lg:flex w-full justify-between hidden items-center">
        <div className="flex ">
          <NavLink href={"/"} className="flex gap-2 flex-center w-14 h-14">
            <Image
              className="opacity-100 rounded-full ms-8"
              width={60}
              height={60}
              src="/assets/images/ng-logo2.png"
              alt="Nikolay Gavazov Logo"
            />
          </NavLink>
        </div>
        <div className="flex gap-3 me-8">
          <NavLink
            className={`text-lg font-semibolt text-[#ffb000] ease-in-out duration-150 hover:text-xl link ${
              pathname === "/about" ? "active" : ""
            }`}
            href={"/about"}
          >
            About
          </NavLink>
          <NavLink
            className={`text-lg font-semibolt text-[#ffb000] ease-in-out duration-150 hover:text-xl link ${
              pathname === "/services" ? "active" : ""
            }`}
            href={"/services"}
          >
            Services
          </NavLink>
          <NavLink
            className={`text-lg font-semibolt text-[#ffb000] ease-in-out duration-150 hover:text-xl link ${
              pathname === "/projects" ? "active" : ""
            }`}
            href={"/projects"}
          >
            Projects
          </NavLink>
          <NavLink
            className={`text-lg font-semibolt text-[#ffb000] ease-in-out duration-150 hover:text-xl link ${
              pathname === "/contacts" ? "active" : ""
            }`}
            href={"/contacts"}
          >
            Contact
          </NavLink>
        </div>
      </div>
      {/* Mobile nav */}
      <div className="sm:flex justify-between w-full hidden">
        <NavLink href={"/"} className="flex gap-2 flex-center w-14 h-14">
          <Image
            className="opacity-100 rounded-full ms-8"
            width={60}
            height={60}
            src="/assets/images/ng-logo.png"
            alt="Nikolay Gavazov Logo"
          />
        </NavLink>
        <div className="flex flex-col ">
          <NavLink
            className="text-lg font-medium text-white opacity-80 ease-in-out duration-150 hover:opacity-100 hover:text-xl"
            href={"/about"}
          >
            About
          </NavLink>
          <NavLink
            className="text-lg font-medium text-white opacity-80 ease-in-out duration-150 hover:opacity-100 hover:text-xl"
            href={"/services"}
          >
            Services
          </NavLink>
          <NavLink
            className="text-lg font-medium text-white opacity-80 ease-in-out duration-150 hover:opacity-100 hover:text-xl"
            href={"/projects"}
          >
            Projects
          </NavLink>
          <NavLink
            className="text-lg font-medium text-white opacity-80 ease-in-out duration-150 hover:opacity-100 hover:text-xl"
            href={"/contacts"}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

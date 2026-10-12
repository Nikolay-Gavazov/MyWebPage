"use client";

import NavLink from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contacts", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="w-full pt-6">
      <div className="hidden w-full items-center justify-between lg:flex">
        <div className="flex">
          <NavLink href={"/"} className="flex h-14 w-14 items-center justify-center">
            <Image
              className="rounded-full opacity-100 ms-8"
              width={60}
              height={60}
              src="/assets/images/ng-logo2.png"
              alt="Nikolay Gavazov Logo"
            />
          </NavLink>
        </div>

        <div className="me-8 flex gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`text-lg font-semibold text-[#ffb000] transition-all duration-150 hover:text-xl link ${
                pathname === item.href ? "active" : ""
              }`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="flex w-full items-center justify-between px-4 lg:hidden">
        <NavLink href={"/"} className="flex h-14 w-14 items-center justify-center">
          <Image
            className="rounded-full opacity-100"
            width={52}
            height={52}
            src="/assets/images/ng-logo2.png"
            alt="Nikolay Gavazov Logo"
          />
        </NavLink>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-[#ffb000]/60 bg-[#0f1b2c]/60 p-2.5 shadow-lg"
        >
          <span
            className={`block h-0.5 w-6 rounded-full bg-[#ffb000] transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded-full bg-[#ffb000] transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded-full bg-[#ffb000] transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <div id="mobile-navigation" className="px-4 pb-4 lg:hidden flex justify-end">
          <div className="w-[70%] mt-2 flex flex-col gap-2 rounded-2xl border border-[#ffb000]/50 bg-[#0f1b2c]/80 p-4 shadow-xl backdrop-blur-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-base font-semibold text-[#ffb000] transition-all duration-150 ${
                  pathname === item.href ? "bg-[#ffb000]/10" : ""
                }`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

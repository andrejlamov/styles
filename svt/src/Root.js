import * as icons from "./components/icons";
import clsx from "clsx";
import { useState } from "react";
import { Popover } from "@headlessui/react";
import { Router, Link, Match } from "@reach/router";

export default function Root() {
  return (
    <>
      <div className="h-full text-neutral-700 bg-neutral-50">
        <header>
          <NavigationBar />
        </header>
        <main className="h-full ">
          <div path="/" className="h-full bg-neutral-100 flex justify-center">
            hej hej hej
          </div>
        </main>
        <footer></footer>
      </div>
    </>
  );
}

const data = {
  header_links: [
    {
      label: "Nyheter",
      theme: "news",
      menu: ["Nyheter", "Nyheter", "Nyheter"],
    },
    {
      label: "Lokalt",
      theme: "news",
      menu: ["Lokalt", "Lokalt", "Lokalt"],
    },
    {
      label: "Sport",
      theme: "sport",
      menu: ["Lokalt", "Lokalt", "Lokalt"],
    },
    { label: "Om SVT" },
  ],
};

function NavigationBar() {
  return (
    <nav className="flex relative md:justify-center items-center h-20 border-b-4  border-red-600">
      <Link to="/Nyheter" href="#" className="flex pb-2 items-baseline  px-3  mr-auto md:mr-0 md:mr-5">
        <span className="font-semibold text-4xl pr-4">svt</span>
        <span className="font-extralight text-3xl">NYHETER</span>
      </Link>
      <div className=" h-full hidden md:flex  ">
        <NavbarPopoverLinkMenu label="Nyheter" className="border-l-[1px] border-neutral-300" />
        <NavbarPopoverLinkMenu label="Lokalt" className="border-l-[1px] border-neutral-300" />
        <NavbarPopoverLinkMenu label="Sport" className="border-x-[1px] border-neutral-300" />
      </div>
      <NavbarPopoverLinkMenu label="Lokalt" className="md:hidden border-l-[1px] border-neutral-300" />
      <Popover className="h-full md:hidden border-l-[1px] border-neutral-300">
        {({ open }) => (
          <>
            <Popover.Button
              className="h-full px-4"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              {open ? (
                <icons.X className="w-10 h-10" pathProps={{ strokeWidth: 1 }} />
              ) : (
                <icons.Menu className="w-10 h-10" pathProps={{ strokeWidth: 1 }} />
              )}
            </Popover.Button>

            <Popover.Panel className={clsx("absolute   left-0 right-0 top-[calc(theme(spacing.20))] bg-neutral-50")}>
              <Menu />
            </Popover.Panel>
          </>
        )}
      </Popover>
    </nav>
  );
}

function NavbarPopoverLinkMenu({ label, className }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Match path={`/${label}`}>
      {({ match }) => (
        <div className={clsx("flex h-full justify-center  items-center   relative", className)}>
          <Link
            to={`/${label}`}
            className={clsx("flex items-center pl-3 h-full w-full pr-10 ", { "bg-neutral-100": match })}
          >
            <span className="font-semibold text-base ">{label}</span>
          </Link>
          <Popover className={clsx("absolute border-neutral-300 right-3")}>
            {({ open }) => (
              <>
                <Popover.Button className={clsx("flex items-center ")}>
                  <span
                    className={clsx(
                      "rounded-full bg-red-600 w-min h-min block text-neutral-50",
                      {
                        "bg-neutral-300 text-neutral-600 hover:bg-neutral-400": !open,
                      },
                      { "hover:bg-red-700": open }
                    )}
                  >
                    {open ? <icons.ChevronUp className="w-5 h-5" /> : <icons.ChevronDown className="w-5 h-5" />}
                  </span>
                </Popover.Button>
                <Popover.Panel
                  className={clsx(
                    "absolute right-0 top-[calc(theme(spacing.12)_+_5px)] w-[theme(spacing.72)] ",
                    "md:right-[calc(-0.5_*_theme(spacing.72)_+_17px)]",
                    "before:content('') before:absolure before:border-[7px] before:absolute before:border-t-transparent before:border-r-transparent before:border-b-red-600 before:border-l-transparent before:left-[calc(100%-17px)] before:top-[-17px]",
                    "md:before:left-[calc(theme(spacing.72)_*_0.5)]"
                  )}
                >
                  <LinkSubMenu />
                </Popover.Panel>
              </>
            )}
          </Popover>
        </div>
      )}
    </Match>
  );
}
function Menu() {
  return (
    <div className="flex flex-col justify-center">
      <div>hej</div>
      <div>hej</div>
      <div>hej</div>
      <div>hej</div>
      <div>hej</div>
      <div>hej</div>
    </div>
  );
}

function LinkSubMenu({ className }) {
  return (
    <div className={clsx(" flex flex-1 flex-col bg-neutral-50 ", className)}>
      <div className="flex">
        <a className="flex-1">asd</a>
        <a className="flex-1 bg-red-100">asd</a>
        <a className="flex-1">asd</a>
      </div>
      <div className="flex">
        <a className="flex-1">asd</a>
        <a className="flex-1">asd</a>
        <a className="flex-1">asd</a>
      </div>
      <div className="flex">
        <a className="flex-1">asd</a>
        <a className="flex-1">asd</a>
        <a className="flex-1">asd</a>
      </div>
    </div>
  );
}

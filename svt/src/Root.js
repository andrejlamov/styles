import * as icons from "./components/icons";
import clsx from "clsx";
import { useState } from "react";
import { Popover } from "@headlessui/react";

export default function Root() {
  return (
    <>
      <div className="h-full text-neutral-700 bg-neutral-50">
        <header>
          <NavigationBar />
        </header>
        <main className="h-full ">
          <div className="h-full bg-neutral-100 flex justify-center">hej hej hej</div>
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
    <nav className="flex relative items-center h-20 border-b-4 border-red-600">
      <a href="#" className="flex pb-2 items-baseline mr-auto px-2 md:px-5">
        <span className="font-semibold text-4xl pr-4">svt</span>
        <span className="font-extralight text-3xl">NYHETER</span>
      </a>
      <Popover className="relative  h-full">
        {({ open }) => (
          <>
            <Popover.Button
              className={clsx("flex items-center border-l-[1px] px-3 border-r-[1px] border-neutral-300 h-full", {
                "bg-neutral-100": open,
              })}
            >
              <a>
                <span className="font-semibold text-base">Lokalt</span>
              </a>
              <span className="pr-3"></span>
              <a className="rounded-full bg-red-600 text-neutral-50">
                {open ? <icons.ChevronUp className="w-5 h-5" /> : <icons.ChevronDown className="w-5 h-5" />}
              </a>
            </Popover.Button>
            <Popover.Panel
              className={clsx(
                "absolute right-0 top-[calc(theme(spacing.20))] w-72 ",
                "before:content('') before:absolure before:border-[7px] before:absolute before:border-t-transparent before:border-r-transparent before:border-b-red-600 before:border-l-transparent before:left-[calc(100%-30px)] before:top-[-17px]"
              )}
            >
              <LinkSubMenu />
            </Popover.Panel>
          </>
        )}
      </Popover>
      <Popover className="h-full">
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

/* {data.header_links.map(({ label, menu }, i) => {
 *         const isActive = label === rootLabel;
 *         const isOpen = showSubMenu;
 *         return (
 *           <span className={clsx("h-full relative ", { hidden: false })} key={label}>
 *             <a
 *               className={clsx(
 *                 "  self-stretch px-3 h-full flex flex-row relative justify-center items-center hover:bg-neutral-50",
 *                 { "bg-neutral-50": isActive },
 *                 "border-neutral-300 self-stretch h-full border-r-[1px]",
 *                 { "border-l-[1px]": i == 0 }
 *               )}
 *               href={`#${label}`}
 *               onClick={(e) => {
 *                 setShowSubMenu(null);
 *                 setRootLabel(label);
 *               }}
 *             >
 *               <span className="font-semibold text-base">{label}</span>
 *               {!!menu && (
 *                 <button
 *                   onClick={(e) => {
 *                     if (label === rootLabel && !showSubMenu) {
 *                       setShowSubMenu(menu);
 *                       setRootLabel(label);
 *                     } else if (label == rootLabel) {
 *                       setShowSubMenu(null);
 *                     } else {
 *                       setShowSubMenu(menu);
 *                       setRootLabel(label);
 *                     }
 *                     e.stopPropagation();
 *                   }}
 *                   className={clsx(
 *                     " rounded-full ml-3 relative",
 *                     { "bg-red-600 text-white hover:bg-red-700": isActive },
 *                     { "bg-neutral-200 text-neutral-500 hover:bg-neutral-300": !isActive }
 *                   )}
 *                 >
 *                   {isActive && isOpen && <ChevronUp className="h-5 w-5" />}
 *                   {isActive && !isOpen && <ChevronDown className="h-5 w-5" />}
 *                   {!isActive && isOpen && <ChevronUp className="h-5 w-5" />}
 *                   {!isActive && !isOpen && <ChevronDown className="h-5 w-5" />}
 *                 </button>
 *               )}
 *             </a>
 *             {showSubMenu && rootLabel === label && <LinkSubMenu />}
 *           </span>
 *         );
 * })
 * } */

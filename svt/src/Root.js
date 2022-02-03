import { ChevronDown, ChevronUp } from "./components/icons";
import clsx from "clsx";
import { useState } from "react";

export default function Root() {
  return (
    <>
      <div className="h-full text-neutral-700">
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
      label: "Sport",
      theme: "sport",
      menu: ["Lokalt", "Lokalt", "Lokalt"],
    },
    { label: "Om SVT" },
  ],
};

function NavigationBar() {
  const [rootLabel, setRootLabel] = useState(null);
  const [showSubMenu, setShowSubMenu] = useState(null);

  return (
    <nav className="flex relative justify-center items-center h-20 border-b-4 border-red-600">
      <a href="#" className="flex pb-2 items-baseline">
        <span className="font-semibold text-5xl pr-4">svt</span>
        <span className="font-extralight text-4xl">NYHETER</span>
      </a>
      <span className="pr-9"></span>
      {data.header_links.map(({ label, menu }, i) => {
        const isActive = label === rootLabel && showSubMenu;
        return (
          <span className="h-full relative" key={label}>
            <a
              className={clsx(
                "  self-stretch px-3 h-full flex flex-row relative justify-center items-center hover:bg-neutral-50",
                { "bg-neutral-50": isActive },
                "border-neutral-300 self-stretch h-full border-r-[1px]",
                { "border-l-[1px]": i == 0 }
              )}
              href={`#${label}`}
              onClick={(e) => {
                setShowSubMenu(null);
                setRootLabel(label);
              }}
            >
              <span className="font-semibold text-base">{label}</span>
              {!!menu && (
                <button
                  onClick={(e) => {
                    if (label === rootLabel && !showSubMenu) {
                      setShowSubMenu(menu);
                      setRootLabel(label);
                    } else if (label == rootLabel) {
                      setShowSubMenu(null);
                      setRootLabel(null);
                    } else {
                      setShowSubMenu(menu);
                      setRootLabel(label);
                    }
                    e.stopPropagation();
                  }}
                  className={clsx(
                    " rounded-full ml-3 relative",
                    isActive
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-neutral-200 text-neutral-500 hover:bg-neutral-300"
                  )}
                >
                  {isActive ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
              )}
            </a>
            {showSubMenu && rootLabel === label && <LinkSubMenu />}
          </span>
        );
      })}
    </nav>
  );
}

function LinkSubMenu({ className }) {
  return (
    <div
      className={clsx(
        " bg-white shadow-sm font-light  absolute w-[512px] left-[calc(100%-25px-256px)] top-[calc(theme(space.20))] ",
        "before:content('') before:absolure before:border-[7px] before:absolute before:border-t-transparent before:border-r-transparent before:border-b-red-600 before:border-l-transparent before:left-[calc(50%-5px)] before:top-[-16px]",
        className
      )}
    >
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

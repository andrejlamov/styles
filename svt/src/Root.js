import { ChevronDown, ChevronUp } from "./components/icons";
import clsx from "clsx";
import { surroundEach } from "./utils";
import { useState } from "react";

export default function Root() {
  return (
    <>
      <div className="h-full text-neutral-800">
        <header>
          <NavigationBar />
        </header>
        <main className="h-full ">
          <div className="h-full bg-neutral-100 flex justify-center">
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
    { label: "Nyheter", active: true, menu: ["Nyheter", "Nyheter", "Nyheter"] },
    { label: "Lokalt", menu: ["Lokalt", "Lokalt", "Lokalt"] },
    { label: "SVT Play" },
  ],
};

function NavigationBar() {
  const [rootLabel, setRootLabel] = useState(null);
  const [showSubMenu, setShowSubMenu] = useState(null);

  return (
    <nav className="flex relative justify-center items-center h-20 border-b-4 border-red-500">
      <a href="#" className="flex gap-2 pb-2 items-baseline">
        <span className="font-semibold text-4xl">svt</span>
        <span className="font-extralight text-3xl">NYHETER</span>
      </a>
      <span className="pr-5"></span>
      {surroundEach(
        data.header_links.map(({ label, menu }) => {
          const isActive = label === rootLabel && showSubMenu;
          return (
            <a
              className="h-full relative "
              href={`#${label}`}
              onClick={(e) => {
                setShowSubMenu(null);
                setRootLabel(label);
              }}
            >
              <span
                key={label}
                className={clsx(
                  "  self-stretch px-3 h-full flex flex-col justify-center hover:bg-neutral-50",
                  { "bg-neutral-50": isActive }
                )}
              >
                <span className=" font-bold flex gap-2 items-center">
                  <span>{label}</span>
                  {menu && (
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
                        " rounded-full ",
                        isActive
                          ? "bg-red-500 text-white hover:bg-red-700"
                          : "bg-neutral-200 text-neutral-500 hover:bg-neutral-300"
                      )}
                    >
                      {isActive ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                  )}
                </span>
              </span>

              {showSubMenu && rootLabel === label && <LinkSubMenu />}
            </a>
          );
        }),
        <span className=" border-neutral-300 self-stretch h-full border-r-[1px]"></span>
      )}
    </nav>
  );
}

function LinkSubMenu({ className }) {
  return (
    <div
      className={clsx(
        ` bg-white shadow-sm font-light  absolute
 w-[512px] left-[calc(-256px+50%)]
 top-[calc(theme(space.20))]`,
        className
      )}
    >
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
      <div className="flex">
        <a className="flex-1">asd</a>
        <a className="flex-1">asd</a>
        <a className="flex-1">asd</a>
      </div>
    </div>
  );
}

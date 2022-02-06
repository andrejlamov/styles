import * as icons from "./components/icons";
import clsx from "clsx";
import { Popover } from "@headlessui/react";
import { Router, Link, Match } from "@reach/router";
import useHover from "./hooks/useHover";

export default function Root() {
  return (
    <>
      <div className="h-full text-neutral-700 bg-neutral-50">
        <header>
          <NavigationBar />
        </header>

        <main className="h-full bg-neutral-200  " path="/">
          <MainContainer>
            <Router>
              <Nyheter path="/nyheter" />
              <Lokalt path="/lokalt" />
              <Sport path="/sport" />
            </Router>
          </MainContainer>
        </main>
        <footer></footer>
      </div>
    </>
  );
}

function MainContainer({ children }) {
  return <div className=" max-w-screen-md m-auto  h-full pt-4 md:px-0 px-2">{children}</div>;
}

function Nyheter() {
  return (
    <div className="flex flex-col gap-4">
      <RightNow title="Senaste nytt om corona och annat langt" alarm={true} />
      <RightNow title="Misstankt mordforsok" />
      <ArticleCollectionCard />
      <ArticleCard />
    </div>
  );
}

function Sport() {
  return <div className="h-full  flex justify-center">sport sport sport</div>;
}

function Lokalt() {
  return <div className="h-full  flex justify-center">lokalt lokalt lokalt</div>;
}

function NavigationBar() {
  return (
    <nav className="flex justify-center   h-20 border-b-4  border-red-600 ">
      <div className="flex relative justify-between items-center w-full md:w-auto ">
        <Link to="/nyheter" href="#" className="flex pb-2 items-baseline px-1 mr-auto md:mr-5 md:px-0 px-2">
          <span className="font-semibold text-4xl pr-4">svt</span>
          <span className="font-extralight text-3xl">NYHETER</span>
        </Link>
        <div className=" h-full hidden md:flex border-r-[1px] border-neutral-300 ">
          <NavbarPopoverLinkMenu link="nyheter" label="Nyheter" className="border-l-[1px]" />
          <NavbarPopoverLinkMenu link="lokalt" label="Lokalt" className="border-l-[1px]" />
          <NavbarPopoverLinkMenu link="sport" label="Sport" className="border-l-[1px] " />
          <NavbarLink link="play" disabled={true} label="SVT Play" className="border-l-[1px] disabled " />
          <NavbarLink link="barn" label="Barn" className="border-l-[1px] " disabled={true} />
          <NavbarLink link="tv" label="Tv tabell" className="border-l-[1px]" disabled={true} />
          <NavbarLink link="program" label="Alla program" className="border-l-[1px]" disabled={true} />
          <NavbarLink link="om" label="Om SVT" className="border-l-[1px] " disabled={true} />
        </div>

        <NavbarPopoverLinkMenu link="lokalt" label="Lokalt" className="md:hidden border-l-[1px] border-neutral-300" />
        <NavbarMenu />
      </div>
    </nav>
  );
}

function NavbarMenu() {
  return (
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
            <MenuContent />
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}

function NavbarLink({ link, label, className, disabled = false }) {
  return (
    <Match path={link} className>
      {({ match }) => (
        <Link
          to={`/${link}`}
          className={clsx(
            "flex items-center h-full w-full px-2 hover:bg-neutral-100 whitespace-nowrap border-neutral-300",
            match && "bg-neutral-100",
            disabled && "opacity-50 pointer-events-none line-through",
            className
          )}
        >
          <span className="font-semibold text-base ">{label}</span>
        </Link>
      )}
    </Match>
  );
}

function NavbarPopoverLinkMenu({ link, label, className, disabled }) {
  return (
    <Match path={`/${link}`}>
      {({ match }) => (
        <div
          className={clsx(
            "flex h-full justify-center  items-center hover:bg-neutral-100 border-neutral-300  relative",
            className,
            disabled && "opacity-50 pointer-events-none line-through"
          )}
        >
          <NavbarLink link={link} label={label} className="pl-2 pr-10" />
          <Popover className={clsx("absolute border-neutral-300 right-3")}>
            {({ open }) => (
              <>
                <Popover.Button className={clsx("flex items-center ")}>
                  <span
                    className={clsx(
                      "rounded-full bg-red-600 w-min h-min block text-neutral-50",
                      !open && !match && "bg-neutral-300 text-neutral-600 hover:bg-neutral-400",
                      (open || match) && "hover:bg-red-700"
                    )}
                  >
                    {open ? <icons.ChevronUp className="w-5 h-5" /> : <icons.ChevronDown className="w-5 h-5" />}
                  </span>
                </Popover.Button>
                <Popover.Panel
                  className={clsx(
                    "absolute right-[-13px] top-[calc(theme(spacing.12)_+_5px)] w-[theme(spacing.72)] ",
                    "md:right-[calc(-0.5_*_theme(spacing.72)_+_17px)]",
                    "before:content('') before:absolure before:border-[7px] before:absolute before:border-t-transparent before:border-r-transparent before:border-b-red-600 before:border-l-transparent before:left-[calc(100%-30px)] before:top-[-17px]",
                    "md:before:left-[calc(theme(spacing.72)_*_0.5)]"
                  )}
                >
                  <LinkSubMenuContent />
                </Popover.Panel>
              </>
            )}
          </Popover>
        </div>
      )}
    </Match>
  );
}
function MenuContent() {
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

function LinkSubMenuContent({ className }) {
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

//    TODO: need a hoverHook for correct underline when hovering
function RightNow({ title, alarm = false }) {
  const [hoverRef, hasHover] = useHover();
  return (
    <article ref={hoverRef}>
      <a
        href="#"
        className={clsx("items-center flex bg-neutral-50 w-full shadow-sm font-medium", alarm && "bg-neutral-800")}
      >
        <span className="text-lg bg-red-600 font-medium text-lg px-2 py-2 self-stretch flex items-center text-neutral-50 whitespace-nowrap ">
          JUST NU
        </span>
        <span
          className={clsx(
            hasHover && "underline decoration-2 underline-offset-1",
            "  py-1 pl-4   text-lg ",
            alarm && "text-2xl font-semibold uppercase text-neutral-50 bg-neutral-800 mr-auto"
          )}
        >
          {title}
        </span>
        {alarm && (
          <span
            className={clsx(
              "md:visible invisible",
              hasHover && "underline dectoration-2 underline-offset-1",
              "text-neutral-50 pr-4 whitespace-nowrap flex  items-center"
            )}
          >
            LAS MER
            <icons.RightArrow className=" w-4 h-4 ml-1" />
          </span>
        )}
      </a>
    </article>
  );
}

function ArticleCollectionCard({}) {
  return (
    <div className="flex flex-col bg-neutral-50 ">
      <article className="px-4 py-1  border-t-2 border-red-600 shadow-sm">
        <span>MELODIFESTIVALEN</span>
        <img />
        <span>Gamlinagarna skickade fel lat till final</span>
      </article>
      <article className="border-t-[1px] border-neutral-300 px-4 py-1">Hello</article>
      <article className="border-t-[1px] border-neutral-300 px-4 py-1">Hello</article>
      <article className="border-t-[1px] border-neutral-300 px-4 py-1">Hello</article>
    </div>
  );
}

function ArticleCard() {
  return <div></div>;
}

import Link from "next/link";
import logoRS from "@/assets/logo-rs.svg";
import IconHamburger from "@/components/icons/IconHamburger";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setIsHamburgerMenuSelected } from "@/store/reducers/buttonSlice";

const MainNavigation = (props: any) => {
  const dispatch = useDispatch();
  const [isCustomized, setIsCustomized] = useState(false);

  useEffect(() => {
    const scrollTriggerPosition = 50;

    const handleScroll = () => {
      if (window.scrollY > scrollTriggerPosition) {
        setIsCustomized(true);
      } else {
        setIsCustomized(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hamburgerHandler = () => {
    dispatch(setIsHamburgerMenuSelected());
  };
  return (
    <>
      <header
        className={`flex flex-row items-center justify-between fixed w-full h-[4.5rem] py-[1rem] px-[6.9rem] z-30 transition duration-500 ${
          isCustomized ? "bg-[#191919]" : "bg-transparent"
        } font-semibold | max-lg:px-[4rem] | max-md:px-[3rem]`}
      >
        <Link
          href={"/#home"}
          className="flex min-w-[5.6rem] h-[3.125rem] cursor-pointer hover:font-bold hover:border-[#ffffff] hover:scale-110 hover:shadow-2xl duration-300"
        >
          <img
            src={logoRS.src}
            alt="Logo RS"
            loading="lazy"
            className="object-cover w-full h-full"
          />
        </Link>
        <div className="flex w-[43.75rem] gap-[4.375rem] | max-lg:w-[30.75rem] max-md:hidden">
          <Link
            href={"/#home"}
            className="flex items-center justify-center flex-1 text-center cursor-pointer hover:font-bold hover:border-b-[3px]"
          >
            HOME
          </Link>

          <Link
            href={"/#about"}
            className="flex items-center justify-center flex-1 text-center cursor-pointer hover:font-bold hover:border-b-[3px]"
          >
            ABOUT
          </Link>

          <Link
            href={"/#skills"}
            className="flex items-center justify-center flex-1 text-center cursor-pointer hover:font-bold hover:border-b-[3px]"
          >
            SKILLS
          </Link>

          <Link
            href={"/#contact"}
            className="flex items-center justify-center flex-1 text-center cursor-pointer hover:font-bold hover:border-b-[3px]"
          >
            CONTACT
          </Link>
        </div>
        <button type="button" onClick={hamburgerHandler} className="md:hidden">
          <IconHamburger height={40} width={40} />
        </button>
      </header>
      {props.children}
    </>
  );
};

export default MainNavigation;

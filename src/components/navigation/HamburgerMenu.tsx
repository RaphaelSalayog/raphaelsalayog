import Link from "next/link";
import IconClose from "../icons/IconClose";
import { useDispatch, useSelector } from "react-redux";
import { setIsHamburgerMenuSelected } from "@/store/reducers/buttonSlice";
import logoRS from "@/assets/logo-rs.svg";

const HamburgerMenu = () => {
  const isHamburgerMenuSelected = useSelector(
    (store: any) => store.button.isHamburgerMenuSelected
  );
  const dispatch = useDispatch();

  return (
    <div>
      {isHamburgerMenuSelected && (
        <div
          className={`fixed w-full h-screen bg-black bg-opacity-60 z-40 | md:hidden`}
          onClick={() => dispatch(setIsHamburgerMenuSelected())}
        ></div>
      )}

      <div
        className={`fixed w-[60%] min-h-screen flex flex-col p-8 bg-[#191919] z-50 ${
          !isHamburgerMenuSelected && "transition-transform -translate-x-[100%]"
        } ${
          isHamburgerMenuSelected && "transition-transform translate-x-0"
        } | md:hidden | max-sm:w-[80%] | max-[425px]:w-[100%]`}
      >
        <div className="flex flex-row justify-between mb-[3rem]">
          <Link
            href={"/#home"}
            onClick={() => dispatch(setIsHamburgerMenuSelected())}
            className="flex min-w-[5rem] h-[3.125rem] cursor-pointer hover:font-bold hover:border-[#ffffff] hover:scale-110 hover:shadow-2xl duration-300"
          >
            <img
              src={logoRS.src}
              alt="Logo RS"
              loading="lazy"
              className="object-cover w-full h-full"
            />
          </Link>
          <button
            type="button"
            onClick={() => dispatch(setIsHamburgerMenuSelected())}
          >
            <IconClose height={35} width={35} />
          </button>
        </div>
        <ul className="flex flex-col items-center">
          <li>
            <Link
              href={"/#home"}
              onClick={() => dispatch(setIsHamburgerMenuSelected())}
              className="w-[7rem] p-1 flex items-center justify-center mb-[2rem] text-lg"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href={"/#about"}
              onClick={() => dispatch(setIsHamburgerMenuSelected())}
              className="w-[7rem] p-1 flex justify-center mb-[2rem] text-lg"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href={"/#skills"}
              onClick={() => dispatch(setIsHamburgerMenuSelected())}
              className="w-[7rem] p-1 flex justify-center mb-[2rem] text-lg"
            >
              SKILLS
            </Link>
          </li>
          <li>
            <Link
              href={"/#contact"}
              onClick={() => dispatch(setIsHamburgerMenuSelected())}
              className="w-[7rem] p-1 flex justify-center text-lg"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;

import logoSti from "@/assets/sti-logo.png";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const SchoolContent = () => {
  const [ref, view] = useInView({ triggerOnce: true });
  // const [ref, view] = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <>
      <section
        id="school"
        className="relative flex justify-center items-center min-h-screen bg-[url('../assets/student-pic.jpg')] bg-cover bg-center h-screen -z-2 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-1" />

        <div
          ref={ref}
          className="absolute w-3/4 max-w-[96rem] min-w-[313.59px] | max-md:w-[80%] | max-md:w-[85%] | max-[375px]:w-[90%] | max-[320px]:w-[98%]"
        >
          <h1
            className={`${
              view && "animate-scale-forward-title"
            } text-center uppercase mb-5 text-2xl font-bold opacity-0 | max-[375px]:mb-3`}
            style={{ fontFamily: "Days One, sans-serif" }}
          >
            - Education -
          </h1>
          <div className="bg-black bg-opacity-60 border border-4 border-red-500 rounded-md overflow-hidden">
            <div className="relative flex justify-center items-center gap-12 p-10 | max-lg:p-6 max-lg:gap-6 | max-md:flex-col">
              <Link
                href="https://www.sti.edu/"
                target="_blank"
                className={`${
                  view && "animate-spin-scale-forward-content1"
                } h-auto w-[20%] min-w-[165px] rounded-full overflow-hidden ${
                  !view && "opacity-0"
                } hover:scale-105 duration-300 | max-md:w-[30%] | max-sm:min-w-[100px]`}
              >
                <img
                  src={logoSti.src}
                  alt="Logo STI"
                  loading="lazy"
                  className="w-full max-h-full object-cover"
                />
              </Link>
              <div
                className={`${
                  view && "animate-fade-bottom-to-top-content2"
                } w-[80%] opacity-0 | max-md:w-[100%]`}
              >
                <p className="mb-3 | max-md:mb-2">
                  Bachelor of Science in Information Technology
                </p>
                <p className="mb-3 | max-md:mb-2">STI College</p>
                <p className="mb-3 | max-md:mb-2">2019 - 2023</p>
                <p className="mb-3 | max-md:mb-2">San Jose del Monte Bulacan</p>
                <ul className="ml-5 list-disc text-justify">
                  <li>Graduated with Cum Laude</li>
                  <li>
                    Accomplished the development of Ordering and Inventory
                    Management with Decision Support System for a pet shop.
                  </li>
                  <li>
                    Developed strong foundational knowledge in Java, HTML, CSS,
                    JavaScript programming through coursework and hands-on
                    projects.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SchoolContent;

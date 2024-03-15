import logoXurpas from "@/assets/xurpas-logo-pic.png";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const ExperienceContent = () => {
  const [ref, view] = useInView({ triggerOnce: true });
  // const [ref, view] = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <>
      <section
        ref={ref}
        className="relative flex justify-center items-center bg-[url('../assets/team-collaboration1.jpg')] bg-cover bg-center h-screen -z-2 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-1" />

        <div className="absolute w-3/4 min-w-[313px] max-w-[96rem] | max-md:w-[80%] | max-md:w-[85%] | max-[375px]:w-[90%] | max-[320px]:w-[98%] overflow-hidden">
          <h1
            className={`${
              view && "animate-scale-forward-title"
            } text-center uppercase mb-5 text-2xl font-bold opacity-0 | max-[375px]:mb-3`}
            style={{ fontFamily: "Days One, sans-serif" }}
          >
            - Experience -
          </h1>
          <div className="bg-black bg-opacity-60 border border-4 border-red-500 rounded-md">
            <div className="relative flex justify-center items-center gap-12 p-10 | max-lg:p-6 max-lg:gap-6 | max-md:flex-col">
              <Link
                href="https://xurpasgroup.com/"
                target="_blank"
                className={`${
                  view && "animate-scale-forward-content1"
                } h-auto w-[20%] min-w-[165px] hover:scale-105 duration-300 ${
                  !view && "opacity-0"
                } | max-md:w-[30%]`}
              >
                <img
                  src={logoXurpas.src}
                  alt="Logo Xurpas"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </Link>
              <div
                className={`${
                  view && "animate-fade-bottom-to-top-content2"
                } w-[80%] opacity-0 | max-md:w-[100%]`}
              >
                <p className="mb-3 | max-md:mb-2">
                  Front-end Web Developer Intern
                </p>
                <p className="mb-3 | max-md:mb-2">Xurpas Inc.</p>
                <p className="mb-3 | max-md:mb-2">Mar 2023 - Jun 2023</p>
                <p className="mb-3 | max-md:mb-2">Makati, Philippines</p>
                <ul className="ml-5 list-disc text-justify">
                  <li>
                    Participated actively in daily stand-up meetings in
                    accordance with agile development principles in order to
                    report on progress, spot any obstacles, and work with the
                    development team to jointly organize the day's tasks.
                  </li>
                  <li>
                    Developed the front-end of a website by utilizing a tech
                    stack that includes HTML, CSS, JavaScript, React.js,
                    Next.js, TypeScript, GraphQL, Ant Design, and version
                    control through Bitbucket.
                  </li>
                  <li>Collaborated with other development teams.</li>
                  <li>Completed React.js training course in Udemy.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceContent;

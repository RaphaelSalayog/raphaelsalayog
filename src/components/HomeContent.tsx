import { useInView } from "react-intersection-observer";

const HomeContent = () => {
  const [ref, view] = useInView({ triggerOnce: true });
  // const [ref, view] = useInView({ threshold: 0.2, triggerOnce: true });

  const buttonHandler = () => {
    const link = document.createElement("a");
    link.href = "/SALAYOG-RAPHAEL-EARL-RESUME.pdf";
    link.download = "SALAYOG-RAPHAEL-EARL-RESUME.pdf";
    document.body.appendChild(link);
    link.click();
  };

  return (
    <>
      <section
        id="home"
        className="relative flex justify-center items-center bg-[url('../assets/bg-coding1.png')] bg-cover bg-left h-screen -z-2 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 -z-1" />

        <div
          ref={ref}
          className="absolute p-10 bg-black bg-opacity-50 m-5 border border-4 border-red-500 rounded-md overflow-hidden | max-lg:p-8 | max-w-[30rem] | max-lg:max-w-[24rem]"
        >
          <p
            className={`${
              view && "animate-fade-left-to-right-content1"
            } mb-3 text-lg ${!view && "opacity-0"} | max-lg:text-base`}
            style={{ animationDelay: `${0.3}s` }}
          >
            Hello there,
          </p>
          <p
            className={`${
              view && "animate-fade-left-to-right-content1"
            } mb-3 font-bold tracking-wide text-6xl text-left ${
              !view && "opacity-0"
            } | max-lg:text-5xl`}
            style={{ animationDelay: `${0.9}s` }}
          >
            I'm Raphael Salayog
          </p>
          <p
            className={`${
              view && "animate-fade-left-to-right-content1"
            } mb-3 font-semibold text-[#eb4a4a] text-lg ${
              !view && "opacity-0"
            } | max-lg:text-base`}
            style={{ animationDelay: `${1.5}s` }}
          >
            - Web Developer
          </p>
          <p
            className={`${
              view && "animate-fade-left-to-right-content1"
            } mb-3 text-justify ${!view && "opacity-0"}`}
            style={{ animationDelay: `${2.1}s` }}
          >
            Focusing primarily on front-end technologies and will continuously
            broaden my expertise by exploring back-end technologies.
          </p>
          {/* <a
              href="/SALAYOG-RAPHAEL-EARL-RESUME.pdf"
              download="SALAYOG-RAPHAEL-EARL-RESUME.pdf"
              className="flex justify-end pt-6 | max-lg:pt-2 | max-sm:justify-center"
            >
              <button className="bg-[#eb4a4a] text-white font-inherit font-semibold py-2 px-4 hover:bg-[#d94645] | max-lg:px-3 max-lg:text-sm">
                Download CV
              </button>
            </a> */}
          <div className="flex justify-end pt-6 | max-lg:pt-2 | max-sm:justify-center">
            <button
              onClick={buttonHandler}
              className={`${
                view && "animate-fade-bottom-to-top-content2"
              } bg-[#eb4a4a] text-white font-inherit font-semibold py-2 px-4 hover:bg-[#d94645] ${
                !view && "opacity-0"
              } | max-lg:px-3 max-lg:text-sm`}
              style={{ animationDelay: `${2.7}s` }}
            >
              Download CV
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeContent;

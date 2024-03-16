import imageProfile from "@/assets/gad-pic-nb.png";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const [ref, view] = useInView({ triggerOnce: true });
  // const [ref, view] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <>
      <section
        id="about"
        className="flex justify-center items-center min-h-screen overflow-hidden"
      >
        <div
          ref={ref}
          className="flex bg-[#0b0a14] w-5/6 max-w-[123rem] min-w-[304px] rounded-lg overflow-hidden shadow-2xl | max-md:flex-col max-md:items-center"
        >
          <div
            className={`${
              view &&
              "animate-fade-left-to-right-content1 | max-lg:animate-scale-forward-content1"
            } flex w-[30%] min-w-[10rem] px-10 ${
              !view && "opacity-0 "
            }| max-[1480px]:w-[35%] | max-[1480px]:px-8 | max-lg:w-[40%] max-lg:py-[1rem] max-lg:px-[1rem] | max-md:max-w-[11.6rem]`}
          >
            <img
              src={imageProfile.src}
              alt="Profile Picture"
              className="w-full min-h-full object-cover | max-lg:w-[100%] max-lg:min-h-[50%] max-lg:self-center max-lg:rounded-full max-lg:border max-lg:border-2 max-lg:border-white"
            />
          </div>
          <div
            className={`${
              view && "animate-fade-bottom-to-top-content2"
            } flex flex-col w-[70%] justify-center items-center p-16 opacity-0 | max-[1480px]:w-[65%] | max-[1480px]:px-8 | max-lg:w-[60%] max-lg:p-[1.5rem] | max-md:w-[100%] max-md:pt-[0rem]`}
          >
            <h1 className="mb-4">About Me</h1>
            <p className="text-justify">
              I am Raphael Salayog, an aspiring web developer. I am a
              hard-working, continuous learner, creative, and proactive
              individual. I constantly strive to improve my skills by learning
              new things and trying different methods of doing things.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;

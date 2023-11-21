import CustomCard from "@/util/CustomCard";
import imageReactJS from "@/assets/skills/reactjs.svg";
import imageJavasrcipt from "@/assets/skills/javascript.svg";
import imageHtml from "@/assets/skills/html.svg";
import imageCss from "@/assets/skills/css.svg";
import imageNextJS from "@/assets/skills/nextjs.svg";
import imageJava from "@/assets/skills/java.svg";
import imageMySQL from "@/assets/skills/MySQL.svg";
import imageAntd from "@/assets/skills/antdesign.svg";
import imageBitbucket from "@/assets/skills/bitbucket.svg";
import imageRedux from "@/assets/skills/redux.svg";
import imageGraphQL from "@/assets/skills/graphql.svg";
import imageGit from "@/assets/skills/git.svg";
import imageTypescript from "@/assets/skills/typescript.svg";
import imageTailwind from "@/assets/skills/tailwind.svg";
import imageBootstrap from "@/assets/skills/bootstrap.svg";
import { useInView } from "react-intersection-observer";

const skills = [
  {
    title: "HTML",
    image: imageHtml.src,
  },
  {
    title: "CSS",
    image: imageCss.src,
  },
  {
    title: "JavaScript",
    image: imageJavasrcipt.src,
  },
  {
    title: "React.js",
    image: imageReactJS.src,
  },
  {
    title: "Redux",
    image: imageRedux.src,
  },
  {
    title: "TypeScript",
    image: imageTypescript.src,
  },
  {
    title: "Next.js",
    image: imageNextJS.src,
  },
  {
    title: "GraphQL",
    image: imageGraphQL.src,
  },
  {
    title: "Java",
    image: imageJava.src,
  },
  {
    title: "MySQL",
    image: imageMySQL.src,
  },
  {
    title: "Git",
    image: imageGit.src,
  },
  {
    title: "Bitbucket",
    image: imageBitbucket.src,
  },
  {
    title: "Ant Design",
    image: imageAntd.src,
  },
  {
    title: "Tailwind",
    image: imageTailwind.src,
  },
  {
    title: "Bootstrap",
    image: imageBootstrap.src,
  },
];

const SkillsContent = () => {
  const [ref, view] = useInView({ threshold: 0.2, triggerOnce: true });
  let delay = 0.4;
  return (
    <>
      <section
        id="skills"
        className="flex justify-center items-center min-h-screen p-[2rem] overflow-hidden"
      >
        <div
          ref={ref}
          className="flex flex-col justify-center items-center min-w-[320px]"
        >
          <h1
            className={`${
              view && "animate-scale-forward-title"
            } text-center text-black uppercase mb-5 text-2xl font-bold opacity-0 | max-[375px]:mb-3`}
            style={{ fontFamily: "Days One, sans-serif" }}
          >
            - Skills -
          </h1>
          <div className="grid grid-cols-5 grid-rows-3 h-auto w-[80%] max-w-[110rem] justify-center items-center gap-x-[6rem] gap-y-10 | max-xl:gap-x-[5rem] max-xl:w-[85%] | max-lg:grid-cols-4 max-lg:grid-rows-4 max-lg:gap-y-4 | max-md:grid-cols-3 max-md:grid-rows-5 max-md:gap-y-5 | max-sm:grid-cols-2 max-sm:grid-rows-6 max-sm:gap-x-5 max-sm:w-[90%]">
            {skills.map((items) => {
              delay += 0.2;
              return (
                <CustomCard
                  key={items.title}
                  title={items.title}
                  image={items.image}
                  delay={delay}
                  view={view}
                />
              );
            })}
            {/* <div
              className={`${
                view && "animate-fade-bottom-to-top-card"
              } rounded-lg border border-1 bg-[#0b0a14] ${
                !view && "opacity-0"
              } hover:-translate-y-1 hover:scale-110 hover:shadow-2xl duration-300`}
              style={{ animationDelay: `${delay}s` }}
            >
              <img
                src={skills[0].image}
                alt={`Logo ${skills[0].title}`}
                loading="lazy"
                className="w-full max-h-full object-cover p-1"
              />
              <h1 className="flex justify-center items-center px-1 pb-1">
                {skills[0].title}
              </h1>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsContent;

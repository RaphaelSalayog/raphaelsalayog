import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import { useInView } from "react-intersection-observer";
import { Project } from "./project/Project";

const projects = [
  {
    image: project1,
    title: "Sales and Inventory Management System",
    description: `The Sales and Inventory Management System is a comprehensive
    software solution designed to streamline the processes of managing
    sales transactions and inventory levels for businesses. It
    provides a centralized platform for businesses to efficiently
    monitor sales activities and track product inventory.`,
    route: "/project-details/1",
  },
  {
    image: project2,
    title: "Job Board",
    description: `A simple job board application is a web-based platform designed to streamline the process of posting and viewing job listings. 
    I developed this project as a means to hone my skills with Apollo GraphQL.`,
    route: "/project-details/2",
  },
];

const Projects = () => {
  const [ref, view] = useInView({ triggerOnce: true });

  return (
    <>
      <section
        id="project"
        className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden"
      >
        <h1
          ref={ref}
          className={`${
            view && "animate-scale-forward-title"
          } text-center text-black uppercase mb-5 text-2xl font-bold opacity-0 | max-[375px]:mb-3`}
          style={{ fontFamily: "Days One, sans-serif" }}
        >
          - Project -
        </h1>
        <div className="flex flex-wrap justify-center items-center items-stretch gap-10">
          {projects.map((projectDetails) => (
            <Project projectDetails={projectDetails} title view={view} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;

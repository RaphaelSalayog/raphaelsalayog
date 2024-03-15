import project1 from "@/assets/project1.png";
import { useInView } from "react-intersection-observer";
const Projects = () => {
  const [ref, view] = useInView({ triggerOnce: true });

  return (
    <>
      <section
        ref={ref}
        id="project"
        className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden"
      >
        <h1
          className={`${
            view && "animate-scale-forward-title"
          } text-center text-black uppercase mb-5 text-2xl font-bold opacity-0 | max-[375px]:mb-3`}
          style={{ fontFamily: "Days One, sans-serif" }}
        >
          - Project -
        </h1>
        <div className="w-[30%] border border-4 border-[#0b0a14] bg-[#0b0a14] rounded-lg overflow-hidden">
          <img src={project1.src} />
          <div className="p-[1rem]">
            <div className={`${view && "animate-fade-left-to-right-content1"}`}>
              <p className="text-2xl pb-7">
                Sales and Inventory Management System
              </p>
              <p className="pb-4">
                The Sales and Inventory Management System is a comprehensive
                software solution designed to streamline the processes of
                managing sales transactions and inventory levels for businesses.
                It provides a centralized platform for businesses to efficiently
                monitor sales activities and track product inventory.
              </p>
              <p>
                Tech Stack : HTML, CSS, JavaScript, TypeScript, React.js,
                Next.js, Redux, Node.js, Express.js, MongoDB, JSON Web Token,
                RESTful API, Socket.io, Ant-Design
              </p>
            </div>
            <div className="flex justify-end pt-6">
              <button
                className={`${
                  view && "animate-fade-bottom-to-top-content2"
                } bg-[#eb4a4a] text-white font-inherit font-semibold py-2 px-4 hover:bg-[#d94645]`}
              >
                View Project
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

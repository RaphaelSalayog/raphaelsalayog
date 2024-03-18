import Link from "next/link";

const ProjectDetails = () => {
  const techStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Redux",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JSON Web Token",
    "RESTful API",
    "Socket.io",
    "Ant-Design",
  ];
  return (
    <>
      <div
        className="relative flex justify-center items-center min-h-screen"
        style={{ color: "black" }}
      >
        <Link
          href={"/"}
          className="absolute top-20 left-20 text-blue-500 hover:text-blue-700 underline | max-xl:top-10 max-xl:left-10 | max-sm:top-5 max-sm:left-5"
        >
          Click here to go back to homepage
        </Link>
        <div className="relative flex w-[80%] | max-xl:flex-col max-xl:items-center | max-sm:w-[90%] | max-[345px]:pt-10">
          <div className="w-[50%] mr-5 flex-item | max-xl:w-[70%] max-xl:order-2 max-xl:mr-0 | max-md:max-xl:w-[100%]">
            <p className="block mb-5 text-2xl | max-xl:text-center max-xl:mt-5">
              Sales and Inventory Management System
            </p>
            <p className="mb-2 | max-xl:text-center">Tech Stack</p>
            <ul className="flex flex-wrap list-disc list-inside mb-5 | max-xl:justify-center">
              {techStack.map((techStack) => (
                <li
                  key={techStack}
                  className="mr-4 mb-4 p-2 bg-gray-100 rounded-md shadow-md"
                >
                  {techStack}
                </li>
              ))}
            </ul>
            <div className="flex | max-xl:justify-center">
              <Link
                href={"https://github.com/RaphaelSalayog/zyamura"}
                target="_blank"
                className="w-[30%] bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mr-2 rounded shadow-lg text-center | max-[1550px]:w-[45%]"
              >
                <button>Frontend Source Code</button>
              </Link>
              <Link
                href={
                  "https://github.com/RaphaelSalayog/zyamura-backend-expressjs"
                }
                target="_blank"
                className="w-[30%] bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-lg text-center | max-[1550px]:w-[45%]"
              >
                <button>Backend Source Code</button>
              </Link>
            </div>
          </div>

          <div className="w-[50%] flex-item | max-xl:w-[70%] max-xl:order-1 | max-md:max-xl:w-[100%]">
            <video controls>
              <source src="/zyamura-website.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;

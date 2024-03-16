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
          className="absolute top-20 left-20 text-blue-500 hover:text-blue-700 underline"
        >
          Click here to go back to homepage
        </Link>
        <div className="relative flex w-[80%]">
          <div className="w-[50%] mr-5">
            <div className="flex mb-5 text-2xl">
              <p>Sales and Inventory Management System</p>
            </div>
            <p className="mb-2">Tech Stack</p>
            <ul className="flex flex-wrap list-disc list-inside mb-5">
              {techStack.map((techStack) => (
                <li
                  key={techStack}
                  className="mr-4 mb-4 p-2 bg-gray-100 rounded-md shadow-md"
                >
                  {techStack}
                </li>
              ))}
            </ul>
            <div className="flex">
              <Link
                href={"https://github.com/RaphaelSalayog/zyamura"}
                target="_blank"
                className="w-[30%] bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mr-2 rounded shadow-lg text-center"
              >
                <button>Frontend Source Code</button>
              </Link>
              <Link
                href={
                  "https://github.com/RaphaelSalayog/zyamura-backend-expressjs"
                }
                target="_blank"
                className="w-[30%] bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-lg text-center"
              >
                <button>Backend Source Code</button>
              </Link>
            </div>
          </div>

          <video controls className="w-[50%]">
            <source src="/project1Video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;

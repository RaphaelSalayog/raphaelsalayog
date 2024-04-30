import { useRouter } from "next/router";

export const Project = ({ projectDetails, view }: any) => {
  const router = useRouter();
  const { image, title, description, route } = projectDetails;
  return (
    <>
      <div className="w-[30%] min-w-[304px] border border-4 border-[#0b0a14] bg-[#0b0a14] rounded-lg overflow-hidden | max-[1250px]:w-[40%] | max-lg:w-[50%] | max-md:w-[60%] | max-[640px]:w-[90%]">
        <img alt={title} src={image.src} />
        <div className="p-[2rem] | max-[425px]:p-[1rem]">
          <div className={`${view && "animate-fade-left-to-right-content1"}`}>
            <p className="text-2xl pb-7">{title}</p>
            <p className="pb-7">{description}</p>
          </div>
          <div className="flex justify-end">
            <button
              className={`${
                view && "animate-fade-bottom-to-top-content2"
              } bg-[#eb4a4a] text-white font-inherit font-semibold py-2 px-4 hover:bg-[#d94645]`}
              onClick={() => {
                router.push(route);
              }}
            >
              View Project
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

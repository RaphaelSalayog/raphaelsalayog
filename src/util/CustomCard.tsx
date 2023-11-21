export interface CustomCard {
  title: string;
  image: any;
  delay: number;
  view: boolean;
}

const CustomCard: React.FC<CustomCard> = ({ title, image, delay, view }) => {
  return (
    <>
      <div
        className={`${
          view && "animate-fade-bottom-to-top-card"
        } rounded-lg border border-1 bg-[#0b0a14] ${
          !view && "opacity-0"
        } hover:-translate-y-1 hover:scale-110 hover:shadow-2xl duration-300`}
        style={{ animationDelay: `${delay}s` }}
      >
        <img
          src={image}
          alt={`Logo ${title}`}
          className="w-full max-h-full object-cover p-1"
        />
        <h1 className="flex justify-center items-center px-1 pb-1">{title}</h1>
      </div>
    </>
  );
};

export default CustomCard;

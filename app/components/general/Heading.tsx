interface HeadingProps {
  center?: boolean;
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ center, text }) => {
  return (
    <div>
      <div
        className={`text-slate-500 my-3 md:my-5 px-3 md:px-10 md:text-xl ${
          center ? "text-center" : "text-start"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Heading;

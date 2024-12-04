import Logo from "../Navbar/Logo";
import Category from "./Category";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div className="w-full bg-[#FC4100] text-white py-3 md:py-10 px-3 md:px-10 flex justify-between text-sm md:text-base items-start flex-wrap gap-3 md:gap-10">
      <Logo />
      <Category />
      <Contact />
    </div>
  );
};

export default Footer;

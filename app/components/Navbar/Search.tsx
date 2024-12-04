import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="flex-1 md:flex hidden relative items-center">
      <input
        type="search"
        name="search"
        id="search"
        className=" flex flex-1 placeholder-white p-1 outline-none bg-transparent border-b border-b-slate"
        placeholder="Axtarış..."
      />
      <button className="w-12 outline-none absolute -right-2 top-2 flex items-center justify-center">
        <IoSearchOutline />
      </button>
    </div>
  );
};

export default Search;

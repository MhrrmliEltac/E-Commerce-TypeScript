"use client";
const categoryList = [
  {
    name: "Kateqori 1",
  },
  {
    name: "Kateqori 1",
  },
  {
    name: "Kateqori 1",
  },
  {
    name: "Kateqori 1",
  },
  {
    name: "Kateqori 1",
  },
  {
    name: "Kateqori 1",
  },
  {
    name: "Kateqori 1",
  },
];

const Category = () => {
  return (
    <div className="flex justify-center flex-col">
      <div className="text-center">Tüm Kateqoriya</div>
      <div className="flex md:w-[550px] sm:w-full flex-row flex-wrap justify-center">
        {categoryList.map((category, index) => (
          <div
            key={index}
            className="rounded-full min-w-[120px] flex items-start justify-start cursor-pointer px-4 py-2 flex"
          >
            {category.name}
            <span className="pl-5">|</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

"use client";
const Category = () => {
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

  return (
    <div className="flex items-center justify-center px-3 md:px-10 gap-3 md:gap-10 py-5 md:py-8 overflow-x-auto">
      {categoryList.map((category, index) => (
        <div
          key={index}
          className="border text-slate-500 rounded-full min-w-[120px] flex items-center justify-center flex-1 cursor-pointer text-center px-4 py-2"
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Category;

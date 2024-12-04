"use client"
interface Children {
  children: any;
}

const PageContainer = ({ children }: Children) => {
  return <div className="px-3 md:px-10">{children}</div>;
};

export default PageContainer;

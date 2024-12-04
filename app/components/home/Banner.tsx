"use client"
import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-[237px] flex items-center justify-center">
      <div className="h-[187px] relative w-full">
        <Image
          src={"/banner-final3.png"}
          alt="banner"
          fill
          className="object-contain md:object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import Image from "next/image"; // For optimized images in Next.js
import Link from "next/link";

function BasicCard({ title, buttonText, link, image }) {
  return (
    <div className="flex flex-col justify-between items-center border-2 border-red-600 p-6 h-[22rem] w-full shadow-lg">
      {/* Image */}
      <div className="w-30 h-30 ">
        <Image src={image} alt={title} width={100} height={100}  />
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold mt-4 text-center">{title}</h2>

      {/* Button */}
      <Link href={link} className="my-6">
        <button className="py-3 bg-red-600 border-red-600 border text-white rounded-full hover:bg-white hover:text-red-600 transition duration-300 px-10">
          {buttonText}
        </button>
      </Link>
    </div>
  );
}

export default BasicCard;

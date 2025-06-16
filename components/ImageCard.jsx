import React from "react";
import Image from "next/image"; // For optimized images in Next.js
import Link from "next/link";

function ImageCard({ title, subtitle, buttonText, link, image }) {
  return (
    <div className="flex flex-col items-center border-2 border-red-600 p-6 w-full shadow-lg">
      {/* Image */}
      <div className="-mt-20">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
        />
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold mt-6 text-center">{title}</h2>
      <p className="text-xl my-6 text-center">{subtitle}</p>


      {/* Button */}
      <Link href={link} className="my-6">
        <button className="py-3 bg-red-600 text-white rounded-full hover:bg-red-600 transition px-20">
          {buttonText}
        </button>
      </Link>
    </div>
  );
}

export default ImageCard;

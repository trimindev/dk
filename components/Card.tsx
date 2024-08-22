import React from "react";
import Image from "next/image";

type CardProps = {
  imageUrl: string;
  name: string;
  price: string;
};

function Card({ imageUrl, name, price }: CardProps) {
  return (
    <div className="bg-white shadow-sm rounded-xl overflow-hidden cursor-pointer">
      <div className="relative w-full aspect-[183/174.64] overflow-hidden bg-black rounded-xl">
        <Image
          src={imageUrl}
          alt={name}
          width={1000}
          height={1000}
          objectFit="cover"
          className=""
        />
      </div>
      <div className="py-2 px-2">
        <h2 className="text-md sm:text-lg font-semibold mb-2 truncate">
          {name}
        </h2>
        <p className="text-gray-600 font-medium">{price}k</p>
      </div>
    </div>
  );
}

export default Card;

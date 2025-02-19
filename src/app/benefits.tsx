"use client"
import Image from "next/image";
import { useState } from "react";
import { Banks } from "./index";
const images = [
  { src: "/offer-1.webp", alt: "Image 1" },
  { src: "/offer-2.webp", alt: "Image 2" },
  { src: "/offer-1.webp", alt: "Image 1" },
  { src: "/offer-2.webp", alt: "Image 2" },
];
const Benefits = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col gap-20 px-10 py-10">
      <div className="flex flex-col lg:flex-row mt-6">
        <div className="flex flex-col border-r flex-[0.5] cursor-pointer rounded-tl-2xl rounded-bl-2xl bg-[#f7f6f4]">
          {Banks.map((bank, index) => (
            <div
              key={index}
              className={`flex gap-3 p-6 border-b hover:bg-white 
            ${
              activeIndex === index
                ? "border-l-2 border-l-blue-900 rounded-tl-lg bg-white"
                : ""
            } `}
              onClick={() => setActiveIndex(index)}
            >
              <div className="bg-black size-6 min-w-6" />
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl">{bank.title}</h3>
                <p className="text-gray-600">{bank.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 bg-gradient-to-b from-[#f7f6f4] via-[#f7f6f4] to-transparent rounded-tr-2xl rounded-br-2xl flex items-center justify-center">
          <div className="relative w-96 h-96">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={900}
                height={900}
                className={`object-cover absolute transition-all duration-700 ease-in-out rounded-2xl
                ${
                  activeIndex === index
                    ? "z-10 rotate-0 scale-100"
                    : "z-0 rotate-12 scale-90"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-20 items-center flex-col lg:py-20 lg:flex-row lg:gap-40">
        <div className="border flex-1 min-h-[450px] w-full min-w-[280px] border-gray-200 bg-[#f7f6f4] rounded-2xl" />
        <div className="flex flex-col gap-5 lg:justify-center flex-1">
          <p className="text-blue-700">BENEFITS</p>
          <div className="flex flex-col gap-5 text-center mx-auto max-w-2xl">
            <h1 className="font-semibold lg:text-5xl md:text-3xl text-start text-xl">
              Save timeand money with our powerful tools.
            </h1>
            <p className="text-gray-500 text-start text-base md:text-lg lg:text-xl">
              Ground give you the blocks neede to create a truly professional
              thing for your saas without you worring on the design
            </p>
          </div>
          <div className="block">
            <button className="bg-slate-900 text-white py-2 px-8 rounded-full flex items-center justify-center gap-2 text-sm font-medium">
              Start with Ground
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-20 items-center flex-col py-10 lg:py-20 px-10 lg:flex-row lg:gap-40">
        <div className="border flex-1 min-h-[450px] w-full min-w-[280px] border-gray-200 bg-[#f7f6f4] rounded-2xl lg:order-2" />
        <div className="flex flex-col gap-5 lg:justify-center flex-1 lg:order-1">
          <p className="text-blue-700">BENEFITS</p>
          <div className="flex flex-col gap-5 text-center mx-auto max-w-2xl">
            <h1 className="font-semibold lg:text-5xl md:text-3xl text-start text-xl">
              More than 14000+ professionals use Ground
            </h1>
            <p className="text-gray-500 text-start text-base md:text-lg lg:text-xl">
              Ground give you the blocks neede to create a truly professional
              thing for your saas without you worring on the design
            </p>
          </div>
          <div className="block">
            <button className="bg-slate-900 text-white py-2 px-8 rounded-full flex items-center justify-center gap-2 text-sm font-medium">
              Start with Ground
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

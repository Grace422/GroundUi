import Image from "next/image";
import Benefits from "./benefits";
import Features from "./features";
import Integrations from "./Integrations";
import PriceAndFaq from "./PriceAndFaq";

export default function Home() {
  const iconData = [
    { icon: "/apple.png", name: "Apple" },
    { icon: "/github.png", name: "Github" },
    { icon: "/instagram.png", name: "Instagram" },
    { icon: "/linkedin.png", name: "Linkedin" },
    { icon: "/twitter.png", name: "Twitter" },
    { icon: "/facebook.png", name: "Facebook" },
    { icon: "/youtube.png", name: "Youtube" },
    { icon: "/messager.png", name: "Messenger" },
  ];
  return (
    <>
      <div className="flex flex-col gap-10 items-center justify-center">
        <div className="h-full w-full maw-w-[1350px] mx-auto px-10 md:px-60 md:py-40 py-10">
          <div className="h-full w-full overflow-x-clip mb-10">
            <div className="border pl-3 pr-2 py-1 w-fit mx-auto flex items-center gap-2 rounded-full">
              <div className="flex items-center">
                <div className="bg-slate-900 text-white flex items-center justify-center p-2 rounded-full size-10 border-4 border-white">
                  1
                </div>
                <div className="bg-slate-900 text-white flex items-center justify-center p-2 rounded-full size-10 border-4 border-white -ml-2">
                  2
                </div>
                <div className="bg-slate-900 text-white flex items-center justify-center p-2 rounded-full size-10 border-4 border-white -ml-2">
                  3
                </div>
              </div>
              <div>
                <p>Trusted by 21,000+ people</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center">
            <h1 className="font-bold text-2xl lg:text-6xl text-center mb-4">
              Fastest way to manage payment anytime you want
            </h1>
            <div className="flex gap-6">
              <button className="text-sm rounded-full py-2 px-10 bg-white">
                Download from App Store
              </button>
              <button className="text-sm rounded-full py-2 px-10 bg-slate-900 text-white">
                Download from App Store
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/hero.webp"
            alt="hero photo"
            width={900}
            height={800}
            className="object-cover image-shadow"
          />
        </div>
        <div className="py-10 w-full md:py-20">
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden marquee py-10">
            <div className="w-full h-full flex overflow-hidden p-2 flex-row gap-20 marquee-content">
              <div className="flex flex-row gap-20">
                {iconData.map((data, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center justify-center gap-2"
                  >
                    <img
                      src={data.icon}
                      alt={data.name}
                      className="w-10 text-white dark:text-black"
                    />
                    <p className="text-white dark:text-black">{data.name}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-row gap-20">
                {iconData.map((data, index) => (
                  <div
                    key={index + iconData.length}
                    className="flex flex-row items-center justify-center gap-2"
                  >
                    <img src={data.icon} alt={data.name} className="w-10" />
                    <p className="text-white dark:text-black">{data.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col md:flex-row px-10 py-32 justify-between gap-10 border-b">
        <div className="w-1/2">
          <h1 className="font-bold text-4xl">
            Top used financial app by millions of happy users
          </h1>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex flex-col gap-1 items-center">
            <h1 className="text-5xl text-blue-800 font-bold">1.2M+</h1>
            <p className="text-gray-700">Download on App Store</p>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <h1 className="text-5xl text-blue-800 font-bold">4.0</h1>
            <p className="text-gray-700">Rating out of 5</p>
          </div>
        </div>
      </div>

      <Benefits/>
      <Features/>
      <Integrations/>
      <PriceAndFaq/>
    </>
  );
}

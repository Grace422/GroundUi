"use client"
import { useState, useEffect } from "react";
import {
  Star,
  Calendar,
  Bell,
  Banana,
  Table2,
  ScrollText,
  TicketsPlane,
  Camera,
  Clock,
} from "lucide-react";

const icons = [
  Calendar,
  Bell,
  Banana,
  Table2,
  ScrollText,
  TicketsPlane,
  Camera,
  Clock,
];
const Integrations = () => {
  const [displayCount1, setDisplayCount1] = useState(8);
  const [displayCount2, setDisplayCount2] = useState(8);
  const [displayCount3, setDisplayCount3] = useState(8);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDisplayCount1(4); 
        setDisplayCount2(3); 
        setDisplayCount3(2); 
      } else if (window.innerWidth < 768) {
        setDisplayCount1(6); 
        setDisplayCount2(5); 
        setDisplayCount3(4); 
      } else {
        setDisplayCount1(8);
        setDisplayCount2(7); 
        setDisplayCount3(6); 
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="px-10 py-20 flex flex-col gap-16">
      <div className="h-full w-full flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col gap-4 items-center mx-auto max-w-2xl text-center">
          <h1 className="font-bold text-3xl lg:text-5xl">
            Over 100+ Integrations
          </h1>
          <p className="text-gray-500 text-xl text-center">
            Ground gives you the block needed to create a truly professional
            thing for your saas without you worring on the design
          </p>
        </div>
        <div className="mx-auto flex flex-col gap-5 w-fit relative">
          <div className="flex gap-10 mx-auto w-fit ">
            {icons.slice(0, displayCount1).map((Icon, index) => (
              <div
                key={index}
                className="rounded-full bg-white size-16 flex items-center justify-center shadow-sm shadow-slate-200"
              >
                <Icon className="w-8 h-8" />
              </div>
            ))}
          </div>
          <div className="flex gap-10 mx-auto w-fit">
            {icons.slice(0, displayCount2).map((Icon, index) => (
              <div
                key={index}
                className="rounded-full bg-white size-16 flex items-center justify-center shadow-sm shadow-slate-200"
              >
                <Icon className="w-8 h-8" />
              </div>
            ))}
          </div>
          <div className="flex gap-10 mx-auto w-fit">
            {icons.slice(0, displayCount3).map((Icon, index) => (
              <div
                key={index}
                className="rounded-full bg-white size-16 flex items-center justify-center shadow-sm shadow-slate-200"
              >
                <Icon className="w-8 h-8"/>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full overflow-hidden relative">
        <div className="z-10 rounded-2xl py-8 flex flex-col items-center justify-center absolute">
          <h1 className="font-bold text-2xl lg:text-5xl text-white px-2 text-center">
            Trusted by 21,000+ customers
          </h1>
          <div className="w-screen py-10 md:py-20 overflow-hidden h-screen ">
            <div className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden py-10">
              <div className="marquee">
                <div className="group flex gap-4 p-2 select-none flex-row [--duration.20s] marquee-content bg-transparent text-white dark:text-black">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <figure
                      key={index}
                      className="relative w-80 p-4 borders rounded-xl cursor-pointer bg-transparent"
                    >
                      <div className="flex flex-col gap-4 text-white">
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index}>
                              <Star color="yellow" />
                            </div>
                          ))}
                        </div>
                        <p className="text-sm font-medium">
                        &quot;Ground took the guesswork out of investing for me.
                          I&apos;m seeing real returns with no hassle.&quot;
                        </p>
                        <p className="text-sm font-medium text-white">
                          @username
                        </p>
                      </div>
                    </figure>
                  ))}
                  {Array.from({ length: 10 }).map((_, index) => (
                    <figure
                      key={index}
                      className="relative w-80 p-4 borders over:lg-zinc-50/[.15] rounded-xl bg-transparent cursor-pointer"
                    >
                      <div className="flex flex-col gap-4 text-white">
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index}>
                              <Star color="yellow" />
                            </div>
                          ))}
                        </div>
                        <p className="text-sm font-medium">
                        &quot;Ground took the guesswork out of investing for me.
                          I&apos;m seeing real returns with no hassle.&quot;
                        </p>
                        <p className="text-sm font-medium text-white">
                          @username
                        </p>
                      </div>
                    </figure>
                  ))}
                </div>
              </div>
              <div className="marquee-bottom text-white dark:text-black">
                <div className="group flex gap-4 p-2 select-none flex-row [--duration.20s] marquee-content">
                  <div className="flex gap-4 marquee-inner flex-row">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <figure
                        key={index}
                        className="relative w-80 p-4 borders over:lg-zinc-50/[.15] rounded-xl cursor-pointe bg-transparent"
                      >
                        <div className="flex flex-col gap-4">
                          <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <div key={index}>
                                <Star color="yellow" />
                              </div>
                            ))}
                          </div>
                          <p className="text-sm font-medium text-white">
                            &quot;Ground took the guesswork out of investing for me.
                            I&apos;m seeing real returns with no hassle.&quot;
                          </p>
                          <p className="text-sm font-medium text-white">
                            @username
                          </p>
                        </div>
                      </figure>
                    ))}
                  </div>
                  <div className="flex gap-4 marquee-inner flex-row">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <figure
                        key={index}
                        className="relative w-80 p-4 borders over:lg-zinc-50/[.15] rounded-xl cursor-pointer bg-transparent"
                      >
                        <div className="flex flex-col gap-4">
                          <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <div key={index}>
                                <Star color="yellow" />
                              </div>
                            ))}
                          </div>
                          <p className="text-sm font-medium text-white">
                            &quot;Ground took the guesswork out of investing for me.
                            I&apos;m seeing real returns with no hassle.&quot;
                          </p>
                          <p className="text-sm font-medium text-white">
                            @username
                          </p>
                        </div>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="py-1">
            <button className="border-2 py-2 px-10 text-white rounded-full">
              Check all 1000+ reviews
            </button>
          </div>
        </div>

        <div className="min-h-screen bg-[#151424] z-0 rounded-2xl w-screen overflow-hidden">
          <div className="relative flex items-center justify-center">
            <div className="w-[1000px] h-[1000px] rounded-full bg-transparent flex items-center justify-center transition-all duration-300 borders">
              <div className="w-[800px] h-[800px] rounded-full bg-transparent flex items-center justify-center transition-all duration-300 borders">
                <div className="w-[600px] h-[600px] rounded-full bg-transparent flex items-center justify-center transition-all duration-300 borders">
                  <div className="w-[400px] h-[400px] rounded-full bg-transparent flex items-center justify-center transition-all duration-300 borders">
                    <div className="w-[200px] h-[200px] rounded-full bg-transparent transition-all duration-300 borders" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;

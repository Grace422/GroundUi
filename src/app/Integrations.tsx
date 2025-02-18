import { Star } from "lucide-react";
const Integrations = () => {
  return (
    <div className="px-10 py-20 flex flex-col gap-16">
      <div className="h-full w-full flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col gap-4 items-center mx-auto max-w-2xl">
          <h1 className="font-bold text-6xl">Over 100+ Integrations</h1>
          <p className="text-gray-500 text-xl text-center">
            Ground gives you the block needed to create a truly professional
            thing for your saas without you worring on the design
          </p>
        </div>
        <div>icons motion</div>
      </div>
      <div className="bg-gray-700 rounded-2xl py-16 flex flex-col items-center justify-center">
        <h1 className="font-bold text-5xl text-white py-1">
          Trusted by 21,000+ customers
        </h1>
        <div className="w-full py-10 md:py-20">
          <div className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden py-10">
            <div className="marquee">
              <div className="group flex gap-4 overflow-hidden p-2 select-none flex-row [--duration.20s] marquee-content bg-transparent text-white dark:text-black">
                {Array.from({ length: 10 }).map((_, index) => (
                  <figure
                    key={index}
                    className="relative w-80 p-4 borders overflow-hidden rounded-xl cursor-pointer bg-transparent"
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
                        "Ground took the guesswork out of investing for me.
                        I&apos;m seeing real returns with no hassle."
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
                    className="relative w-80 p-4 borders over:lg-zinc-50/[.15] overflow-hidden rounded-xl bg-transparent cursor-pointer"
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
                        "Ground took the guesswork out of investing for me.
                        I&apos;m seeing real returns with no hassle."
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
              <div className="group flex  gap-4 overflow-hidden p-2 select-none flex-row [--duration.20s] marquee-content">
                <div className="flex gap-4 marquee-inner flex-row">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <figure
                      key={index}
                      className="relative w-80 p-4 borders over:lg-zinc-50/[.15] overflow-hidden rounded-xl cursor-pointe bg-transparent"
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
                          "Ground took the guesswork out of investing for me.
                          I&apos;m seeing real returns with no hassle."
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
                      className="relative w-80 p-4 borders over:lg-zinc-50/[.15] overflow-hidden rounded-xl cursor-pointer bg-transparent"
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
                          "Ground took the guesswork out of investing for me.
                          I&apos;m seeing real returns with no hassle."
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
    </div>
  );
};

export default Integrations;

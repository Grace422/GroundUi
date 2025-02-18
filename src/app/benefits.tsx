const Benefits = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex gap-20 items-center flex-col py-10 lg:py-20 px-10 lg:flex-row lg:gap-40">
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
        <div className="border flex-1 min-h-[450px] w-full min-w-[280px] border-gray-200 bg-[#f7f6f4] rounded-2xl lg:order-2"/>
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

import { Icons } from './index'
const Features = () => {
  return (
    <div className="px-10 py-10 bg-[#f7f6f4]">
      <h2 className="text-center text-2xl lg:text-4xl font-bold py-8">Loaded with more features</h2>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 py-5">
        {Icons.map((feature, index) => (
          <div
            className="flex gap-4 px-4 py-4 border rounded-lg bg-white"
            key={index}
          >
            <feature.icon color='blue'/>
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-sm lg:text-xl">{feature.title}</h3>
              <p className="text-gray-500 text-start text-sm md:text-lg lg:text-sm">
                {feature.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-10 mx-auto max-w-2xl py-10">
        <h2 className="font-semibold text-center text-lg">
          Ground gives you the block needed to create a truly professional thing
          for your saas without you worring on the design
        </h2>
        <button className="bg-slate-900 flex items-center justify-center px-10 py-2 text-white rounded-full">
            Download app for free
        </button>
      </div>
    </div>
  );
};

export default Features;

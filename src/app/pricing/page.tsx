import { Check } from "lucide-react"
const Pricing = () => {
  return (
    <div className="py-20 md:py-40 px-20 md:px-40 flex flex-col gap-6 h-[600px] bg-[#f7f6f4]">
      <h1 className="font-bold text-3xl lg:text-5xl">Simple, transparent pricing</h1>
      <p className="text-xl text-gray-500">
        Unlock all features including unlimited posts for you blog.
      </p>
      <div className="border py-10 px-10 flex flex-col lg:flex-row justify-between rounded-md">
        <div className="flex flex-col gap-6">
            <h2 className="font-bold text-xl">What&apos;s included in the PRO plan</h2>
            <div className="flex gap-40 items-center justify-between text-gray-500 text-sm">
                <div>
                    <ul className="flex flex-col gap-2">
                        <li className="flex gap-2 items-center"><Check size={18}/>Unlimited Posts</li>
                        <li className="flex gap-2 items-center"><Check size={18}/>Custom Domain</li>
                        <li className="flex gap-2 items-center"><Check size={18}/>Access to Discord</li>
                    </ul>
                </div>
                <div>
                    <ul className="flex flex-col gap-2">
                        <li className="flex gap-2 items-center"><Check size={18}/>Unlimited Users</li>
                        <li className="flex gap-2 items-center"><Check size={18}/>Dasboard Analytics</li>
                        <li className="flex gap-2 items-center"><Check size={18}/>Premium Support</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-2">
            <div className="flex flex-col items-center">
                <h1 className="text-7xl font-bold">$19</h1>
                <p className="text-xs text-gray-500">Billed Monthly</p>
            </div>
            <button className="text-white bg-slate-900 py-2 px-14 rounded-full">Get Started</button>
        </div>
      </div>
      <p className="text-gray-500 text-sm">
        Ground is a demo app.
        <span className="font-bold text-gray-500">
          You can test the upgrade and won't be charged.
        </span>
      </p>
    </div>
  );
};

export default Pricing;

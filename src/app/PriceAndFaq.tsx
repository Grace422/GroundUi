"use client";
import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import data from "../../data/data.json";

const PriceAndFaq = () => {
  const [activeFaqs, setActiveFaqs] = useState<number | null>(null);
  const faqs = data.faqs;

  return (
    <div className="px-5 py-6 flex flex-col gap-10">
      <div className="flex flex-col gap-16 items-center justify-center">
        <div className="flex flex-col gap-4 items-center mx-auto max-w-2xl text-center">
          <h1 className="font-bold text-xl lg:text-5xl">
            Pricing that&apos;s simple, predictable and built to scale
          </h1>
          <p className="text-gray-500 text-sm lg:text-xl">
            Ground give you the blocks needed to create a truly professional
            thing for your saas without you worring on the design in the long
            run{" "}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 mx-auto max-w-3xl">
          <div className="border rounded-2xl px-4 py-4 flex flex-col gap-4 h-fit">
            <div className="flex flex-col gap-2 border-b py-2">
              <p>Free</p>
              <p className="text-gray-400">
                Ground give you the blocks needed o create a truly professional
                layout
              </p>
              <h1 className="text-6xl font-bold">
                $0<sub className="text-gray-400 text-sm">/month</sub>
              </h1>
            </div>
            <div className="flex flex-col gap-6">
              <p className="flex gap-2 items-center">
                <Check color="blue" size={20} /> Budgeting and expence tracking
              </p>
              <button className="drop-shadow-md px-10 py-2 bg-[#f7f6f4] flex items-center justify-center rounded-full">
                Get started now
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 border rounded-2xl border-black px-4 py-4 bg-[#f5f5f5] h-fit">
            <div className="flex flex-col gap-2 border-b py-2">
              <p>Pro</p>
              <p className="text-gray-400">
                Ground give you the blocks needed o create a truly professional
                layout
              </p>
              <h1 className="text-6xl font-bold">
                $9<sub className="text-gray-400 text-sm">/month</sub>
              </h1>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="flex gap-2">
                  <Check color="blue" /> Budgeting and expence tracking
                </p>
                <p className="flex gap-2">
                  <Check color="blue" /> Budgeting and expence tracking
                </p>
                <p className="flex gap-2">
                  <Check color="blue" /> Budgeting and expence tracking
                </p>
                <p className="flex gap-2">
                  <Check color="blue" /> Budgeting and expence tracking
                </p>
                <p className="flex gap-2">
                  <Check color="blue" /> Budgeting and expence tracking
                </p>
              </div>
              <button className="px-10 py-2 bg-slate-900 text-white flex items-center justify-center rounded-full">
                Get started now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 pb-20 lg:px-20">
        <h1 className="font-bold text-5xl text-center py-6">
          Frequently Asked Questions
        </h1>
        <div className="h-full w-full overflow-x-clip">
        {faqs.map((faq) => (
          <div key={faq.id} className="border-b md:px-10 py-5">
            <div
              className="flex justify-between"
              onClick={() => {
                console.log(`Clicked on FAQ 1ID: ${faq.id}`);
                setActiveFaqs(activeFaqs === faq.id ? null : faq.id);
              }}
            >
              <div>
                <h4 className="font-bold text-sm lg:text-xl">{faq.title}</h4>
              </div>
              {activeFaqs === faq.id ? (
                <ChevronUp
                  size={20}
                  onClick={() => {
                    console.log(`Clicked on FAQ 2ID: ${faq.id}`);
                    setActiveFaqs(activeFaqs === faq.id ? null : faq.id);
                  }}
                />
              ) : (
                <ChevronDown
                  size={20}
                  onClick={() => {
                    console.log(`Clicked on FAQ 3ID: ${faq.id}`);
                    setActiveFaqs(activeFaqs === faq.id ? null : faq.id);
                  }}
                />
              )}
            </div>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                activeFaqs === faq.id ? "opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-500 text-sm py-2">{faq.text}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default PriceAndFaq;

"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 bg-green-50 hover:bg-green-100 transition-colors duration-300"
      >
        <span className="text-gray-900 font-medium text-base md:text-lg">{question}</span>
        {open ? (
          <ChevronUp className="h-5 w-5 text-green-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-green-600" />
        )}
      </button>
      {open && (
        <div className="px-6 py-4 bg-white text-gray-700 text-sm md:text-base leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;

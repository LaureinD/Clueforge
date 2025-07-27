"use client";

import { useState } from "react";
import { faqs } from "./faqs";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export function FaqAccordion() {
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggle = (key: string) => {
        setOpenIndex((prev) => (prev === key ? null : key));
    };

    return (
        <div className="w-2/3 mx-auto px-4 py-8">
            {faqs.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-20">
                    <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
                        {section.icon}
                        {section.title}
                    </h2>
                    <div className="space-y-6">
                        {section.items.map((faq, faqIndex) => {
                            const key = `${sectionIndex}-${faqIndex}`;
                            const isOpen = openIndex === key;

                            return (
                                <div key={key} className="border rounded-md overflow-hidden">
                                    <button
                                        onClick={() => toggle(key)}
                                        className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-gray-50"
                                    >
                                        <p className="font-medium">{faq.question}</p>
                                        <ChevronDownIcon
                                            className={`w-5 h-5 transition-transform duration-200 ${
                                                isOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>
                                    {isOpen && (
                                        <div className="px-4 pb-4 my-3 text-gray-700">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
}

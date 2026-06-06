"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is Creed OTC safe for trading?",
    answer:
      "Yes. All trades, messages, and transactions are fully encrypted, auditable, and SEC-compliant. We also use multi-factor authentication, biometric verification, and continuous monitoring to keep your data secure.",
  },
  {
    question: "Who can use the platform?",
    answer:
      "Creed OTC is open to verified institutional traders, high-net-worth individuals, and accredited investors. All participants undergo KYC and AML screening before gaining access to the platform.",
  },
  {
    question: "How fast are trades settled?",
    answer:
      "Most trades settle within T+1, with same-day settlement available for qualifying asset pairs. Our infrastructure is optimized for speed without compromising compliance or security.",
  },
  {
    question: "Can I trade multiple types of assets?",
    answer:
      "Yes. Creed OTC supports equities, fixed income, foreign exchange, digital assets, and structured products — all within a single regulated environment.",
  },
  {
    question: "How do I know my counterparties are verified?",
    answer:
      "Every counterparty on the platform completes identity verification and compliance checks. You can view counterparty verification status directly from the trading interface before confirming any deal.",
  },
  {
    question: "Can I monitor my portfolio and performance easily?",
    answer:
      "Absolutely. The Creed OTC dashboard provides real-time portfolio analytics, trade history, P&L tracking, and exportable reports — giving you full visibility into your positions at any time.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-8 py-20 md:px-24 lg:px-32">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="mb-7 inline-block border border-white/25 px-4 py-1 text-xs tracking-widest text-white/80">
            FAQ
          </span>
          <h2 className="mb-3 font-matter text-4xl font-semibold tracking-tight text-[#f0ede8] md:text-5xl">
            Answers to every question
          </h2>
          <p className="text-sm font-light leading-relaxed text-white/50">
            Creed OTC replaces informal trading channels with a
            <br className="hidden sm:block" /> regulated, professional-grade
            platform.
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto max-w-3xl border-t border-white/[0.12]">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/[0.12]">
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left text-sm text-[#f0ede8] transition-colors hover:text-white/70"
              >
                <span>{faq.question}</span>
                <span
                  className={`flex-shrink-0 text-lg text-white/50 transition-transform duration-200 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <p className="pb-6 text-sm font-light leading-relaxed text-white/50">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
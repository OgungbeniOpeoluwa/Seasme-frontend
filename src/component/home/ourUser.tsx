"use client";

import { useState } from "react";

type Tab = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
};

const tabs: Tab[] = [
  {
    id: "brokers",
    label: "BROKERS",
    title: "For Brokers",
    image: "/images/broker.png",
    description:
      "Creed OTC replaces informal trading channels with a regulated, professional-grade platform. Every counterparty is verified, every transaction is recorded, and every settlement is processed automatically. You can communicate securely through encrypted, auditable broker-to-broker messaging, hold voice and video trade discussions on a single platform, and track settlements in real time with automated reconciliation.",
  },
  {
    id: "asset-managers",
    label: "ASSET MANAGERS",
    title: "For Asset Managers",
    image: "/images/asset-manager.jpg",
    description:
      "Access institutional-grade OTC trading tools, streamline deal execution, manage portfolios efficiently, and gain better visibility into market opportunities through a secure trading environment.",
  },
  {
    id: "investors",
    label: "INSTITUTIONAL AND RETAIL INVESTORS",
    title: "For Investors",
    image: "/images/investor.jpg",
    description:
      "Trade confidently in a transparent marketplace designed to improve liquidity discovery, automate settlement processes, and provide real-time insights for investment decisions.",
  },
];

export default function OurUsers() {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

  return (
    <section className="bg-[#f7f7f7] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 flex justify-center">
          <div className="border border-gray-300 bg-white px-6 py-3 text-sm font-medium uppercase tracking-wide text-gray-800">
            OUR USERS
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-300">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-20">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-5 text-sm font-semibold transition-all duration-300 ${
                  activeTab.id === tab.id
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {tab.label}

                {activeTab.id === tab.id && (
                  <span className="absolute bottom-0 left-0 h-[3px] w-full bg-sky-500" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          {/* Image */}
          <div className="h-[350px] md:h-[500px] lg:h-[560px]">
            <img
              src={activeTab.image}
              alt={activeTab.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center">
            <div>
              <h2 className="mb-6 text-3xl font-semibold text-gray-900 lg:text-4xl">
                {activeTab.title}
              </h2>

              <p className="text-base leading-8 text-gray-700">
                {activeTab.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
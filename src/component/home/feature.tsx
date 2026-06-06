import { features } from "@/lib/about";

export default function Features() {
  return (
    <section className="bg-[#0F0F0F] text-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Badge */}
        <div className="flex justify-center mb-20">
          <span className="border border-zinc-700 px-5 py-2 text-xs uppercase tracking-widest">
            Core Features
          </span>
        </div>
        <div className="border-t border-zinc-800 my-10" />
        {features.map((feature, index) => (
          <div key={feature.title}>
            {/* Insert image after Asset Management */}
            {index === 3 && (
              <>
              

                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src="/images/building.png"
                    alt="Building"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="border-b border-zinc-800 my-10" />
              </>
            )}

            <div
              className={`grid grid-cols-1 gap-10 py-10 lg:grid-cols-2 ${
                index !== features.length - 1
                  ? "border-b border-zinc-800"
                  : ""
              }`}
            >
              {/* Left */}
              <div>
                <h3 className="text-[24px] font-semibold leading-tight">
                  {feature.title}
                </h3>

                <p className="mt-4 max-w-md text-[16px] leading-8 text-zinc-500">
                  {feature.description}
                </p>
              </div>

              {/* Right */}
              <div>
                <ul className="space-y-5">
                  {feature.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-4 text-[18px] leading-8"
                    >
                      <span className="text-zinc-500">✦</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default function MissionVision() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        {/* Mission */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative h-[240px] sm:h-[320px] md:h-[450px] overflow-hidden">
            <img
              src="/images/mission.png"
              alt="Mission"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="max-w-lg">
            <span className="inline-block border border-white/30 px-4 py-2 text-xs font-medium uppercase tracking-wider">
              Our Mission
            </span>

            <h2 className="mt-8 text-2xl font-semibold leading-[1.3]">
              To build the infrastructure that powers Nigeria's capital
              markets, making OTC trading and asset management more
              trustworthy, transparent, and efficient.
            </h2>
          </div>
        </div>

        {/* Divider */}
        <div className="my-20 h-px bg-white/15" />

        {/* Vision */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 max-w-lg">
            <span className="inline-block border border-white/30 px-4 py-2 text-xs font-medium uppercase tracking-wider">
              Our Vision
            </span>

            <h2 className="mt-8 text-2xl font-semibold leading-[1.3]">
              To become Africa's most trusted digital marketplace where
              brokers, asset managers, and investors can trade, settle,
              and create assets on one regulated and reliable platform.
            </h2>
          </div>

          <div className="order-1 lg:order-2 relative h-[240px] sm:h-[320px] md:h-[450px] overflow-hidden">
            <img
              src="/images/vision.png"
              alt="Vision"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
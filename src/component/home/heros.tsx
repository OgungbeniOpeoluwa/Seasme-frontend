export default function Hero() {
  return (
    <section className="relative h-[600px] overflow-hidden bg-black sm:h-[700px] md:h-[920px]">
      {/* Background */}
      <img
        src="/images/hero-bg.png"
        alt="Creed OTC"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/70 to-transparent sm:h-48 md:h-64" />

      {/* Content */}
      <div className="relative z-10 h-full">
        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-8 sm:pt-12 md:px-20 md:pt-20">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 sm:gap-3">
              <img src="/images/creed-logo.png" alt="Creed" style={{ width: "120px" }} className="sm:w-[160.83px]" />
              <span className="font-matter text-lg font-bold leading-[1.2] text-white sm:text-xl md:text-2xl">
                OTC
              </span>
            </div>
          </div>

          {/* Top Button */}
          <button className="bg-white/20 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/30 sm:px-4 sm:py-2 sm:text-[16px]">
            Get started
          </button>
        </div>

        {/* Hero Copy */}
        <div className="mt-16 px-6 sm:mt-24 md:mt-40 md:px-20">
          <div className="max-w-[820px]">
            <h2 className="text-[36px] font-bold leading-[1.05] tracking-tight text-white sm:text-[44px] md:text-[56px]">
              Manage Your OTC Trades
              <br />
              on One Platform
            </h2>

            <p className="mt-6 max-w-[760px] text-sm leading-[1.7] text-zinc-200 sm:text-[16px] md:mt-10">
              Creed OTC is a licensed digital OTC platform for brokers,
              asset managers, and investors to <br className="hidden sm:block" />trade, settle, and manage
              assets in one secure and compliant system.
            </p>

            <button className="mt-8 bg-white px-6 py-3 text-sm font-semibold text-[#1A1A1A] transition hover:bg-zinc-200 sm:px-8 sm:py-4 sm:text-[16px] md:mt-12">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
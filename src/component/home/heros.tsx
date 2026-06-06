export default function Hero() {
  return (
    <section className="relative h-[920px] overflow-hidden bg-black">
      {/* Background */}
      <img
        src="/images/hero-bg.png"
        alt="Creed OTC"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full">
        {/* Header */}
        <div className="flex items-start justify-between px-20 pt-20">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <img src="/images/creed-logo.png" alt="Creed" style={{ width: "160.83px"}} />
              <span className="font-matter text-2xl font-bold leading-[1.2] text-white">
                OTC
              </span>
            </div>
          </div>

          {/* Top Button */}
          <button className="bg-white/20 px-4 py-2 text-[16=-px] font-semibold text-white backdrop-blur-sm transition hover:bg-white/30">
            Get started
          </button>
        </div>

        {/* Hero Copy */}
        <div className="mt-40 px-20 pt-15">
          <div className="max-w-[820px]">
            <h2 className="text-[56px] font-bold leading-[1.05] tracking-tight text-white">
              Manage Your OTC Trades
              <br />
              on One Platform
            </h2>

            <p className="mt-10 max-w-[760px] text-[16px] leading-[1.7] text-zinc-200">
              Creed OTC is a licensed digital OTC platform for brokers,
              asset managers, and investors to <br/>trade, settle, and manage
              assets in one secure and compliant system.
            </p>

            <button className="mt-12 bg-white px-4 py-2 text-[16px] font-semibold text-[#1A1A1A] transition hover:bg-zinc-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
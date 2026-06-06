export default function OurStory() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-10">
          <span className="inline-block border border-neutral-300 bg-white px-4 py-2 text-sm font-medium uppercase tracking-wide text-neutral-800">
            Our Story
          </span>
        </div>

        {/* Intro */}
        <div className="max-w-6xl">
          <p className="text-2xl font-medium leading-[1.54] text-neutral-900">
            Nigeria&apos;s OTC market has long operated through informal
            channels with unrecorded conversations, unverified counterparties,
            and manual processes that create unnecessary risk for everyone
            involved.
          </p>

          <p className="mt-4 text-2xl font-medium leading-[1.54] text-neutral-900">
            Creed OTC was built to fix that.
          </p>

          <p className="mt-8 text-2xl font-medium leading-[1.54] text-neutral-900">
            Creed OTC was built on a simple idea: Nigeria&apos;s capital markets
            should be connected, transparent, and accessible to everyone.
          </p>
        </div>

        {/* Image */}
        <div className="relative mt-14 h-[300px] overflow-hidden md:h-[500px] lg:h-[650px]">
          <img
            src="/images/office.png"
            alt="Our Story"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Bottom Text */}
        <div className="mt-12 max-w-5xl">
          <p className="text-base font-normal leading-[1.54] text-neutral-900">
            We are building the digital infrastructure that transforms how
            securities are traded, settled, and managed. Starting with Nigeria,
            we empower brokers, asset managers, and investors to collaborate
            seamlessly.
          </p>

          <p className="mt-8 text-base font-normal leading-[1.54] text-neutral-900">
            From institutional portfolios to first-time investments, Creed OTC
            is built for every serious market participant.
          </p>
        </div>
      </div>
    </section>
  );
}
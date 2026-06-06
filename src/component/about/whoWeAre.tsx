import { serveItems } from "@/lib/about";

export default function WhoWeServe() {
  return (
    <section className="bg-white pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-12">
          <span className="inline-block border border-neutral-300 bg-white px-4 py-2 text-sm font-medium uppercase tracking-wide text-neutral-800">
            Who We Serve
          </span>
        </div>

        {/* Grid */}
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {serveItems.map((item) => (
            <article key={item.id}>
              <div className="relative h-[200px] overflow-hidden sm:h-[280px] md:h-[350px] lg:h-[420px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="mt-6 border-t border-neutral-300 pt-5">
                <h3 className="text-2xl font-semibold leading-[1.2] text-neutral-900">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
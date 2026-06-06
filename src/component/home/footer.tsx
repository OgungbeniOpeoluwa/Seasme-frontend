import Link from "next/link";

const navLinks = [
  { label: "Core features", href: "#" },
  { label: "Our story", href: "#" },
  { label: "Our mission & vision", href: "#" },
];

const socialLinks = [
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.738l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.12]">
      <div className="mx-auto max-w-5xl px-8 pb-8 pt-14 md:px-24 lg:px-32">
        {/* Top row */}
        <div className="mb-12 flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          {/* Left — logo + nav */}
          <div>
            <div className="font-matter text-xl font-bold tracking-widest text-[#f0ede8]">
              CREED{" "}
              <span className="text-sm font-light tracking-[0.14em] opacity-70">
                OTC
              </span>
            </div>

            <nav className="mt-7 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/50 transition-colors hover:text-white/80"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right — socials + email + reg */}
          <div className="flex flex-col items-start gap-4 sm:items-end">
            {/* Socials */}
            <div className="flex items-center gap-5">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-white/50 transition-colors hover:text-white/90"
                >
                  {s.icon}
                </Link>
              ))}
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 text-sm text-white/50">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
              creed@gmail.com
            </div>

            {/* Registration note */}
            <p className="max-w-[280px] text-right text-xs leading-relaxed text-white/30 sm:max-w-full">
              Creed OTC is registered and regulated by the Securities and
              Exchange Commission, Nigeria
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between border-t border-white/[0.08] pt-6">
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-white/35 transition-colors hover:text-white/60"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-white/35 transition-colors hover:text-white/60"
            >
              Terms of Use
            </Link>
          </div>
          <p className="text-xs text-white/30">© 2026. creed®</p>
        </div>
      </div>
    </footer>
  );
}
import { SOCIAL_LINKS } from "@/data/navigation"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border/40 bg-card px-8 py-12 text-foreground transition-colors duration-300">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-lg font-bold tracking-tight text-primary">Jonathan.Dev</div>

        <p className="text-sm text-muted-foreground">
          © {currentYear} Jonathan L. Violeta • Jr. Full Stack Developer
        </p>

        <nav aria-label="Social links">
          <ul className="flex gap-6 text-sm">
            {SOCIAL_LINKS.map((socialLink) => (
              <li key={socialLink.label}>
                <a
                  href={socialLink.href}
                  className="font-semibold text-muted-foreground transition-colors duration-200 hover:text-primary cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={socialLink.label}
                >
                  {socialLink.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export { Footer }

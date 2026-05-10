import { SOCIAL_LINKS } from "@/data/navigation"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-16 w-full bg-muted px-8 py-12">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-lg font-bold tracking-tight">Jonathan.Dev</div>

        <p className="text-sm text-primary">
          © {currentYear} Jonathan L. Violeta • Jr. Full Stack Developer
        </p>

        <nav aria-label="Social links">
          <ul className="flex gap-4 text-sm">
            {SOCIAL_LINKS.map((socialLink) => (
              <li key={socialLink.label}>
                <a
                  href={socialLink.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
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

import { CONTACT_DATA } from "@/data/contact"
import { SectionHeader } from "@/components/shared/section-header"
import { ContactForm } from "./contact-form"
import { ContactInfoCard } from "./contact-info-card"
import { SocialLinksCard } from "./social-links-card"
import { LocationMap } from "./location-map"
import { TestimonialBanner } from "./testimonial-banner"

const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-16 md:py-24">
      <SectionHeader
        title={CONTACT_DATA.title}
        subtitle={CONTACT_DATA.description}
        titleClassName="text-primary md:text-6xl"
      />

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-[repeat(3,minmax(280px,auto))]">
        <ContactForm />
        <ContactInfoCard
          email={CONTACT_DATA.email}
          phone={CONTACT_DATA.phone}
        />
        <SocialLinksCard socials={CONTACT_DATA.socials} />
        <LocationMap location={CONTACT_DATA.location} />
        <TestimonialBanner testimonial={CONTACT_DATA.testimonial} />
      </div>
    </section>
  )
}

export { ContactSection }

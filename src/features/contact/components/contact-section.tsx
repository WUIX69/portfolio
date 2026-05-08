import { Variants } from "motion/react"
import { CONTACT_DATA } from "@/data/contact"
import { SectionHeader } from "@/components/shared/section-header"
import { ContactForm } from "./contact-form"
import { ContactInfoCard } from "./contact-info-card"
import { SocialLinksCard } from "./social-links-card"
import { LocationMap } from "./location-map"
import { TestimonialBanner } from "./testimonial-banner"
import { MotionViewport } from "@/components/shared/motion-viewport"

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

import { Container } from "@/components/layout/container"

const ContactSection = () => {
  return (
    <section id="contact" className="w-full">
      <Container>
        <MotionViewport>
          <SectionHeader
            title={CONTACT_DATA.title}
            subtitle={CONTACT_DATA.description}
            titleClassName="text-primary md:text-6xl"
            variants={itemVariants}
          />

          {/* Bento Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-[repeat(3,minmax(280px,auto))]">
            <ContactForm variants={itemVariants} />
            <ContactInfoCard
              variants={itemVariants}
              email={CONTACT_DATA.email}
              phone={CONTACT_DATA.phone}
            />
            <SocialLinksCard
              variants={itemVariants}
              socials={CONTACT_DATA.socials}
            />
            <LocationMap
              variants={itemVariants}
              location={CONTACT_DATA.location}
            />
            <TestimonialBanner
              variants={itemVariants}
              testimonial={CONTACT_DATA.testimonial}
            />
          </div>
        </MotionViewport>
      </Container>
    </section>
  )
}

export { ContactSection }

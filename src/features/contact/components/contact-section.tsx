import { Variants } from "motion/react"
import { CONTACT_DATA } from "@/data/contact"
import { SectionHeader } from "@/components/shared/section-header"
import { ContactForm } from "./contact-form"
import { ContactInfoCard } from "./contact-info-card"
import { SocialLinksCard } from "./social-links-card"
import { LocationMap } from "./location-map"
import { TestimonialBanner } from "./testimonial-banner"
import { MotionViewport } from "@/components/shared/motion-viewport"
import { AnimatedItem } from "@/components/shared/animated-item"

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
import { SectionGradient } from "@/components/layout/section-gradient"

const ContactSection = () => {
  return (
    <section id="contact" className="relative w-full overflow-hidden py-20">
      <SectionGradient side="right" />
      <Container>
        <MotionViewport>
          <AnimatedItem variants={itemVariants}>
            <SectionHeader
              title={CONTACT_DATA.title}
              subtitle={CONTACT_DATA.description}
              titleClassName="text-primary md:text-6xl"
            />
          </AnimatedItem>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-[repeat(3,minmax(280px,auto))]">
            <AnimatedItem
              className="md:col-span-2 md:row-span-2"
              variants={itemVariants}
            >
              <ContactForm />
            </AnimatedItem>
            <AnimatedItem
              className="md:col-span-1 md:row-span-1"
              variants={itemVariants}
            >
              <ContactInfoCard
                email={CONTACT_DATA.email}
                phone={CONTACT_DATA.phone}
              />
            </AnimatedItem>
            <AnimatedItem
              className="md:col-span-1 md:row-span-1"
              variants={itemVariants}
            >
              <SocialLinksCard socials={CONTACT_DATA.socials} />
            </AnimatedItem>
            <AnimatedItem
              className="md:col-span-2 md:row-span-1"
              variants={itemVariants}
            >
              <LocationMap location={CONTACT_DATA.location} />
            </AnimatedItem>
            <AnimatedItem
              className="md:col-span-4 md:row-span-1"
              variants={itemVariants}
            >
              <TestimonialBanner testimonial={CONTACT_DATA.testimonial} />
            </AnimatedItem>
          </div>
        </MotionViewport>
      </Container>
    </section>
  )
}

export { ContactSection }

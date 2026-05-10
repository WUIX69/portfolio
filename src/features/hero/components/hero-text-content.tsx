"use client"

import { FileDown, ArrowRight } from "lucide-react"
import { motion, Variants } from "motion/react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { HERO_DATA } from "@/data/hero"

import Typewriter from "typewriter-effect"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

const HeroTextContent = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="z-10 col-span-1 flex flex-col gap-6 lg:col-span-6"
    >
      <motion.div
        variants={itemVariants}
        className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-2"
      >
        <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
        <span className="text-sm font-semibold tracking-tight text-accent-foreground">
          {HERO_DATA.tagline}
        </span>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="min-h-full text-4xl font-extrabold tracking-wide sm:text-5xl lg:text-[48px] lg:leading-[1.2]"
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "👋 Greetings! I'm <span class='text-primary'>Jonathan L Violeta</span>..."
              )
              .pauseFor(2000)
              .deleteAll()
              .typeString(
                "A Jr. <span class='text-primary'>FullStack Developer</span>..."
              )
              .pauseFor(2000)
              .deleteAll()
              .typeString(
                "Building <span class='text-primary'>modern</span> and <span class='text-primary'>legacy</span> web experiences..."
              )
              .pauseFor(2000)
              .deleteAll()
              .typeString(
                "Passionate about <span class='text-primary'>code excellence</span>..."
              )
              .pauseFor(2000)
              .deleteAll()
              .typeString(
                "Continuously <span class='text-primary'>growing</span> and <span class='text-primary'>learning</span>..."
              )
              .pauseFor(2000)
              .start()
          }}
          options={{
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 75,
            wrapperClassName: "text-foreground",
            cursorClassName: "text-primary ml-1",
          }}
        />
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="max-w-lg text-lg leading-relaxed text-muted-foreground"
      >
        {HERO_DATA.description}
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="mt-4 flex flex-wrap items-center gap-4"
      >
        <Button
          asChild
          size="lg"
          className="h-12 rounded-full px-8 text-sm font-semibold shadow-lg"
        >
          <a href={HERO_DATA.resumeHref} aria-label="Download resume PDF">
            <FileDown className="size-4" />
            Download Resume
          </a>
        </Button>
        <Button
          asChild
          variant="secondary"
          size="lg"
          className="h-12 rounded-full px-8 text-sm font-semibold shadow-md"
        >
          <a href="#projects" aria-label="View portfolio projects">
            View Work
            <ArrowRight className="size-4" />
          </a>
        </Button>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-8 flex items-center gap-6 border-t border-border pt-8"
      >
        {HERO_DATA.stats.map((stat, statIndex) => (
          <div key={stat.label} className="flex items-center gap-6">
            {statIndex > 0 && (
              <Separator
                orientation="vertical"
                className="h-12"
                aria-hidden="true"
              />
            )}
            <div className="flex flex-col">
              <span className="text-2xl font-semibold tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-muted-foreground">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export { HeroTextContent }

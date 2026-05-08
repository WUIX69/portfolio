"use client"

import dynamic from "next/dynamic"

const Threads = dynamic(() => import("@/components/Threads"), {
  ssr: false,
})

const HeroThreadsBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 hidden h-full w-full opacity-40 md:block">
      <Threads
        color={[0.659, 0.333, 0.969]}
        amplitude={1}
        distance={0}
        enableMouseInteraction
      />
    </div>
  )
}

export { HeroThreadsBackground }

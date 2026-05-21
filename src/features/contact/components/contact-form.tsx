"use client"

import * as React from "react"
import { Send } from "lucide-react"
import { motion, HTMLMotionProps } from "motion/react"
import { IconWrapper } from "@/components/shared/icon-wrapper"
import { ButtonWithLoading } from "@/components/shared/button-with-loading"
import { cn } from "@/lib/utils"

const ContactForm = ({ className, ...props }: HTMLMotionProps<"div">) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Construct mailto link
    const subject = `Portfolio Message from ${formData.name}`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    const mailtoUrl = `mailto:jonavioleta19@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`

    window.location.href = mailtoUrl

    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <motion.div
      className={cn(
        "flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lg shadow-primary/5 md:col-span-2 md:row-span-2 md:p-10",
        className
      )}
      {...props}
    >
      <div className="mb-8 flex items-center gap-3">
        <IconWrapper icon={Send} variant="primary" size="md" />
        <h2 className="font-sans text-2xl font-bold text-foreground">
          Send a Message
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-grow flex-col space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="ml-1 font-sans text-sm font-semibold text-muted-foreground">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 font-sans text-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="ml-1 font-sans text-sm font-semibold text-muted-foreground">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 font-sans text-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              required
            />
          </div>
        </div>
        <div className="flex flex-grow flex-col space-y-2">
          <label className="ml-1 font-sans text-sm font-semibold text-muted-foreground">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            rows={6}
            className="w-full flex-grow resize-none rounded-xl border border-border bg-muted/50 px-4 py-3 font-sans text-foreground transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            required
          />
        </div>
        <ButtonWithLoading
          type="submit"
          isLoading={isSubmitting}
          loadingText="Sending..."
          rightIcon={<Send className="size-4" />}
          className="w-full py-6 font-sans text-sm font-bold shadow-lg shadow-primary/20"
        >
          Send Message
        </ButtonWithLoading>
      </form>
    </motion.div>
  )
}

export { ContactForm }


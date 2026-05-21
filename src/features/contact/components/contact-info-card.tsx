import { Mail, Phone } from "lucide-react"
import { IconWrapper } from "@/components/shared/icon-wrapper"
import { cn } from "@/lib/utils"

interface ContactInfoCardProps {
  email: string
  phone: string
  className?: string
}

const ContactInfoCard = ({
  email,
  phone,
  className,
}: ContactInfoCardProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground shadow-lg shadow-primary/20 md:col-span-1 md:row-span-1 md:p-10",
        className
      )}
    >
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <IconWrapper
            icon={Mail}
            variant="ghost"
            size="xl"
            containerClassName="mb-6 h-auto w-auto justify-start p-0 text-white/90"
            iconClassName="size-10"
          />
          <h3 className="mb-4 font-sans text-2xl font-bold">Direct</h3>
          <div className="space-y-1 opacity-90">
            <p className="font-sans text-lg">{email}</p>
            <p className="font-sans opacity-70">{phone}</p>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-2">
          <Phone className="size-4 opacity-60" />
          <span className="text-sm font-medium opacity-80">Quick call?</span>
        </div>
      </div>
      {/* Decorative element */}
      <div className="absolute -bottom-8 -right-8 size-32 rounded-full bg-white/10 blur-2xl" />
    </div>
  )
}

export { ContactInfoCard }


import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface ProgramCardProps {
  title: string
  description: string
  duration: string
  image: string
  href: string
  icon?: React.ReactNode
}

export function ProgramCard({ title, description, duration, image, href, icon }: ProgramCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col border-border bg-card">
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {icon && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-3 rounded-lg">
            {icon}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        <div className="mb-4 mt-auto">
          <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
            {duration}
          </span>
        </div>
        <Button variant="default" asChild className="w-full">
          <Link href={href} className="flex items-center justify-center gap-2">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </Card>
  )
}

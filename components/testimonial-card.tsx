import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  title: string
  company: string
  testimonial: string
  image: string
  rating?: number
}

export function TestimonialCard({
  name,
  title,
  company,
  testimonial,
  image,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <Card className="p-6 border-border bg-white hover:shadow-lg transition-shadow">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'fill-accent text-accent' : 'text-muted-foreground'}`}
          />
        ))}
      </div>
      <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial}"</p>
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-xs text-accent font-semibold">{company}</p>
        </div>
      </div>
    </Card>
  )
}

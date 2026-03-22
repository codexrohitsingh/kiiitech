'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface Subject {
  name: string
  credits: number
}

interface Semester {
  title: string
  subjects: Subject[]
}

interface CurriculumAccordionProps {
  semesters: Semester[]
}

export function CurriculumAccordion({ semesters }: CurriculumAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {semesters.map((semester, index) => (
        <AccordionItem key={index} value={`semester-${index}`}>
          <AccordionTrigger className="text-foreground hover:text-primary">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <span className="font-semibold text-left">{semester.title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="pl-11 space-y-3">
              {semester.subjects.map((subject, subIndex) => (
                <div
                  key={subIndex}
                  className="flex justify-between items-center p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                >
                  <span className="text-foreground font-medium">{subject.name}</span>
                  <span className="text-sm bg-accent/20 text-accent px-3 py-1 rounded-full">
                    {subject.credits} Credits
                  </span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

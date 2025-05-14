"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type ExperienceItem = {
  id: number
  company: string
  location: string
  role: string
  period: string
  description: string
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "Creative Minds",
      location: "New York, USA",
      role: "AI Research Scientist",
      period: "2022 - Present",
      description: "Leading research in deep learning models for computer vision applications.",
    },
    {
      id: 2,
      company: "Innovative Designs Inc.",
      location: "USA",
      role: "Machine Learning Engineer",
      period: "2020 - 2022",
      description: "Developed and deployed machine learning models for production environments.",
    },
    {
      id: 3,
      company: "Visionary Creations Ltd.",
      location: "UK",
      role: "Software Developer",
      period: "2018 - 2020",
      description: "Built web applications and services using modern frameworks and technologies.",
    },
    {
      id: 4,
      company: "FutureTech",
      location: "Berlin, Germany",
      role: "Research Intern",
      period: "2017 - 2018",
      description: "Conducted research on emerging technologies and their applications.",
    },
  ]

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="section-subtitle">Experience</div>
        <h2 className="section-title">Explore My Design Journey</h2>

        <div className="mt-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="timeline-dot"></div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-3">
                  <h3 className="font-medium">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <div className="md:col-span-7">
                  <h4 className="font-medium">{exp.role}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                  <p className="text-sm">{exp.description}</p>
                </div>
                <div className="md:col-span-2 flex md:justify-end items-start gap-2">
                  <Badge variant="outline">View</Badge>
                  <Badge variant="outline">Details</Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="outline" className="rounded-full px-6">
            View Full Resume
          </Button>
        </div>
      </div>
    </section>
  )
}

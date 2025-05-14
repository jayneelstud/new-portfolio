"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

type Certificate = {
  id: number
  title: string
  provider: string
  date: string
  url?: string
}

export function Certificates() {
  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Python for Beginners",
      provider: "Coursera",
      date: "2023",
      url: "https://www.coursera.org/account/accomplishments/certificate/123456"
    },
    {
      id: 2,
      title: "Generative AI",
      provider: "Udacity",
      date: "2024",
      url: "https://confirm.udacity.com/123456"
    }
  ]

  // Define provider badge styles
  const getProviderBadgeStyle = (provider: string): string => {
    switch (provider) {
      case "Coursera":
        return "bg-blue-900/20 text-blue-300 border-0";
      case "Udacity":
        return "bg-indigo-900/20 text-indigo-300 border-0";
      case "DeepLearning.AI":
        return "bg-purple-900/20 text-purple-300 border-0";
      case "Amazon Web Services":
        return "bg-amber-900/20 text-amber-300 border-0";
      default:
        return "bg-slate-900/20 text-slate-300 border-0";
    }
  };

  return (
    <section id="certificates" className="section-padding">
      <div className="container-custom">
      <div className="mb-16 text-center">
          <p className="text-sm font-medium text-amber-600 dark:text-amber-400 tracking-wide mb-2">CREDENTIALS</p>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Certificates & Achievements</h2>
          <p className="text-lg text-muted-foreground">
            I have completed various online courses and certifications to enhance 
            
          </p><p className="text-lg text-muted-foreground">
             my skills and knowledge in the field of AI and machine learning.
            
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="animate-in stagger-1"
            >
              <Link href={cert.url || "#"} target="_blank" rel="noopener noreferrer">
                <Card className="group h-full border-none bg-white dark:bg-slate-900 hover:bg-gradient-to-b hover:from-white hover:to-slate-50 dark:hover:from-slate-900 dark:hover:to-slate-800/80 overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                  <CardHeader className="p-5 pb-3">
                    <div className="flex justify-between items-start">
                      <Award className="h-5 w-5 text-primary mb-2" />
                      {cert.url && <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />}
                    </div>
                    <CardTitle className="text-base font-medium">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-5 pb-5">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className={getProviderBadgeStyle(cert.provider)}>
                        {cert.provider}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{cert.date}</span>
                    </div>
                    <div className="w-full h-0.5 bg-gradient-to-r from-primary/10 to-primary/40 rounded-full mt-2"></div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"

type Publication = {
  id: number
  title: string
  type: "Conference" | "Journal"
  role: string
  year?: string
}

export function Research() {
  const publications: Publication[] = [
    {
      id: 1,
      title: "A Lightweight Deep Learning Framework for Land Cover Classification from Sentinel-2 Imagery",
      type: "Conference",
      role: "2nd Author",
      year: "2023"
    }
  ]

  // Define badge styles based on publication type
  const getTypeBadgeStyle = (type: string): string => {
    if (type === "Conference") 
      return "bg-amber-900/20 text-amber-300 border-0";
    return "bg-teal-900/20 text-teal-300 border-0"; // Journal
  };

  // Define badge styles based on author role
  const getRoleBadgeStyle = (role: string): string => {
    if (role.includes("1st")) 
      return "bg-purple-900/20 text-purple-300 border-0";
    if (role.includes("2nd")) 
      return "bg-emerald-900/20 text-emerald-300 border-0";
    return "bg-indigo-900/20 text-indigo-300 border-0"; // Coauthor
  };

  return (
    <section id="research" className="py-24 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium text-amber-600 dark:text-amber-400 tracking-wide mb-2">SCHOLARLY WORK</p>
          <h2 className="text-4xl font-bold tracking-tight mb-4">Research Publications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My contributions to academic research in remote sensing, deep learning, and environmental monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="group h-full border-none bg-white dark:bg-slate-900 hover:bg-gradient-to-b hover:from-white hover:to-slate-50 dark:hover:from-slate-900 dark:hover:to-slate-800/80 overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="p-6 pb-3 space-y-4">
                  {/* Year label */}
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {pub.year}
                  </div>
                  
                  {/* Title with icon */}
                  <div className="group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-300">
                    <h3 className="text-xl font-medium leading-tight tracking-tight flex items-start gap-3">
                      <FileText className="h-5 w-5 mt-0.5 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                      <span>{pub.title}</span>
                    </h3>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Badge 
                      className={`px-2.5 py-0.5 text-xs rounded-md font-medium ${getTypeBadgeStyle(pub.type)}`}
                    >
                      {pub.type}
                    </Badge>
                    <Badge 
                      className={`px-2.5 py-0.5 text-xs rounded-md font-medium ${getRoleBadgeStyle(pub.role)}`}
                    >
                      {pub.role}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="px-6 pb-6 pt-0">
                  <div className="flex justify-between items-center">
                    <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500/10 to-amber-500/40 dark:from-amber-700/20 dark:to-amber-500/30 rounded-full mt-1"></div>
                    
                    {/* Citation count or other metrics could go here */}
                    <div className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                      Remote Sensing
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
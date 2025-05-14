"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, ExternalLink, Mail } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-16 md:pt-28 pb-16 container-custom overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        {/* Content Column */}
        <div className={cn(
          "order-2 md:order-1",
          isVisible ? "animate-in" : "opacity-0"
        )}>
          <div className="space-y-6">
            {/* <div className="inline-flex items-center px-3 py-1 rounded-full  text-sm mb-2">
            </div> */}

            <h1 className={cn(
              "text-5xl md:text-6xl lg:text-7xl font-light tracking-tight",
              isVisible ? "animate-in" : "opacity-0"
            )}>
              Hello<span className="text-blue-500">.</span>
            </h1>

            <p className={cn(
              "text-xl text-muted-foreground",
              isVisible ? "animate-in stagger-1" : "opacity-0"
            )}>
              I'm <span className="font-medium text-foreground">Poojan Brahmbhatt</span>, a developer specializing in AI, Machine Learning, and Web Development.
            </p>

            <div className={cn(
              "flex flex-wrap gap-3",
              isVisible ? "animate-in stagger-2" : "opacity-0"
            )}>
              <Button asChild variant="default" size="lg" className="rounded-full shadow-md">
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" /> Get in touch
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="#projects">
                  <ExternalLink className="mr-2 h-4 w-4" /> View my work
                </Link>
              </Button>
            </div>

            <div className={cn(
              "flex items-center gap-4 pt-4",
              isVisible ? "animate-in stagger-3" : "opacity-0"
            )}>
              <Link href="https://www.linkedin.com/in/poojan-brahmbhatt/" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://github.com/Poojan3108" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://poojan3108.github.io/Portfolio/" target="_blank" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Resume
              </Link>
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className={cn(
          "order-1 md:order-2 flex justify-center items-center",
          isVisible ? "animate-in stagger-1" : "opacity-0"
        )}>
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -z-10 w-64 h-64 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-70 -right-10 -top-10"></div>
            <div className="absolute -z-10 w-48 h-48 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-3xl opacity-70 -left-5 -bottom-5"></div>

            {/* Profile image with frame */}
            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Poojan Brahmbhatt"
                className="w-full h-full object-cover"
              />

              {/* Optional overlay pattern */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent"></div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-7 -right-7 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-lg transform rotate-6 text-sm font-medium">
              AI Developer
            </div>
            <div className="absolute -bottom-7 -left-4 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-lg transform -rotate-6 text-sm font-medium">
              ML Specialist
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
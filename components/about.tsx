"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="section-subtitle">About Me</div>
            <h2 className="section-title">Who I Am</h2>

            <div className="mt-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-xl font-medium">120%</span>
                </div>
                <div>
                  <h3 className="font-medium">Passion for Innovation</h3>
                  <p className="text-sm text-muted-foreground">Always going the extra mile</p>
                </div>
              </div>

              <div className="aspect-square bg-muted rounded-md overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  Profile Image
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-1 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                  1
                </div>
                <div>
                  <h3 className="font-medium mb-2">10+ years of experience</h3>
                  <p className="text-muted-foreground">
                    Specialized in AI, Machine Learning, and Web Development with a focus on creating innovative
                    solutions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                  2
                </div>
                <div>
                  <h3 className="font-medium mb-2">Published researcher</h3>
                  <p className="text-muted-foreground">
                    Author of multiple research papers in prestigious journals and conferences.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                  3
                </div>
                <div>
                  <h3 className="font-medium mb-2">Diverse project portfolio</h3>
                  <p className="text-muted-foreground">
                    From web applications to AI systems, my work spans multiple domains and technologies.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-black text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Got a Vision? Let's Bring it to Life!</h2>
            <p className="text-white/70 mb-8">
              I'm always excited to collaborate on innovative projects and create impactful solutions. Whether you have
              a specific project in mind or just want to connect, I'd love to hear from you.
            </p>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-white border-white hover:bg-white hover:text-black transition-colors"
            >
              Talk to Me
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

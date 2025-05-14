import { Navbar } from "@/components/navbar"
import  Hero  from "@/components/hero"
import  Projects  from "@/components/projects"
import { Research } from "@/components/research"
import { Certificates } from "@/components/certificates"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Projects />
      <Research />
      <Certificates />
      <Footer />
      
    </main>
  )
}

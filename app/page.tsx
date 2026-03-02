import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Problema } from '@/components/sections/Problema'
import { Productos } from '@/components/sections/Productos'
import { Ingredientes } from '@/components/sections/Ingredientes'
import { MercadoMinero } from '@/components/sections/MercadoMinero'
import { Propuesta } from '@/components/sections/Propuesta'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problema />
      <Productos />
      <Ingredientes />
      <MercadoMinero />
      <Propuesta />
      <CTA />
      <Footer />
    </main>
  )
}

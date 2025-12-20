import PublicNavbar from '@/components/layout/PublicNavbar'
import Hero from '@/components/landing/Hero'
import Features from '@/components/landing/Features'
import HowItWorks from '@/components/landing/HowItWorks'
import CTA from '@/components/landing/CTA'

export default function Home() {
  return (
    <>
      <PublicNavbar />
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
    </>
  )
}

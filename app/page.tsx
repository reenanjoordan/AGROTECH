import { HeroSlider } from "@/components/hero-slider"
import { StatsSection } from "@/components/stats-section"
import { DonationPoints } from "@/components/donation-points"
import { TestimonialsSection } from "@/components/testemonials"
import { FaqSection } from "@/components/faq"

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <StatsSection />
      <DonationPoints />
      <TestimonialsSection/>
      <FaqSection/>
    </main>
  )
}


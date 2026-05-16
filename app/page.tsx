import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
    </>
  )
}

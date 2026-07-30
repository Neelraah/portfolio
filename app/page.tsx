'use client'

import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { CyberSection } from '@/components/sections/CyberSection'
import { AISection } from '@/components/sections/AISection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { AchievementsSection } from '@/components/sections/AchievementsSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/ui/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CyberSection />
      <AISection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

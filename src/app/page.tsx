// ============================================================
// Homepage — Portfolio Mouhamed Ndoye
// ============================================================

import { Hero } from '@/components/sections/hero';
import { AboutPreview } from '@/components/sections/about-preview';
import { ExpertisePreview } from '@/components/sections/expertise-preview';
import { ProjectsGrid } from '@/components/sections/projects-grid';
import { WorkflowSection } from '@/components/sections/workflow-section';
import { TimelineSection } from '@/components/sections/timeline-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ExpertisePreview />
      <ProjectsGrid />
      <WorkflowSection />
      <TimelineSection />
      <ContactSection />
    </>
  );
}

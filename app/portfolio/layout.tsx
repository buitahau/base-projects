'use client';

import '../../styles/portfolio/style.css';
import React from 'react';
import FontsLoader from '@/components/ui/portfolio/FontsLoader';
import Header from '@/components/ui/portfolio/Header';
import HomeSection from '@/components/ui/portfolio/Section/Home';
import AboutSection from '@/components/ui/portfolio/Section/About';
import SkillSection from '@/components/ui/portfolio/Section/Skill';
import EducationSection from '@/components/ui/portfolio/Section/Education';
import WorkSection from '@/components/ui/portfolio/Section/Work';
import ExperienceSection from '@/components/ui/portfolio/Section/Experience';
import ContactSection from '@/components/ui/portfolio/Section/Contact';
import FooterSection from '@/components/ui/portfolio/Section/Footer';

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FontsLoader />
      <body>
        <Header />

        <HomeSection />
        <AboutSection />
        <SkillSection />
        <EducationSection />
        <WorkSection />
        <ExperienceSection />
        <ContactSection />
        <FooterSection />

        <a
          href="#home"
          aria-label="ScrollTop"
          className="fas fa-angle-up"
          id="scroll-top"
        ></a>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
          integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>

        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js"
          integrity="sha512-SttpKhJqONuBVxbRcuH0wezjuX+BoFoli0yPsnrAADcHsQMW8rkR84ItFHGIkPvhnlRnE2FaifDOUw+EltbuHg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>

        <script src="/js/portfolio/particles.min.js"></script>
        <script src="/js/portfolio/script.js"></script>
      </body>
    </>
  );
}

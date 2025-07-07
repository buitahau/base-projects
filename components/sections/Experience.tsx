'use client';

import { Briefcase, Calendar, MapPin } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Experience() {
  const experiences = [
    {
      title: "Senior Fullstack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "Jan 2022 - Present",
      type: "Full-time",
      description: "Lead developer for enterprise-level applications serving 100K+ users",
      achievements: [
        "Architected and implemented microservices architecture using Spring Boot, reducing system downtime by 40%",
        "Built responsive React frontend with Next.js, improving user engagement by 25%",
        "Implemented CI/CD pipelines with Docker and Jenkins, reducing deployment time by 60%",
        "Mentored 3 junior developers and conducted technical interviews"
      ],
      technologies: ["Java", "Spring Boot", "React", "Next.js", "PostgreSQL", "Docker", "AWS"]
    },
    {
      title: "Fullstack Developer",
      company: "InnovateTech",
      location: "Seattle, WA",
      period: "Jun 2020 - Dec 2021",
      type: "Full-time",
      description: "Developed and maintained multiple web applications for fintech clients",
      achievements: [
        "Developed RESTful APIs with Java Spring Boot serving 50K+ daily requests",
        "Created dynamic React dashboards for real-time financial data visualization",
        "Optimized database queries resulting in 30% performance improvement",
        "Collaborated with cross-functional teams using Agile methodologies"
      ],
      technologies: ["Java", "Spring Boot", "React", "MySQL", "Redis", "Git", "Jira"]
    },
    {
      title: "Software Development Intern",
      company: "StartupHub",
      location: "Austin, TX",
      period: "May 2019 - May 2020",
      type: "Internship",
      description: "Contributed to various startup projects and learned industry best practices",
      achievements: [
        "Built full-stack web applications using Java Spring Boot and React",
        "Implemented user authentication and authorization systems",
        "Participated in code reviews and learned clean code principles",
        "Contributed to open-source projects and gained experience with Git workflows"
      ],
      technologies: ["Java", "Spring Boot", "React", "MongoDB", "HTML/CSS", "JavaScript"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building innovative solutions and driving technical excellence
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <p className="text-blue-600 font-semibold text-xl mb-4">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-gray-500 text-sm mb-4">
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </span>
                        <span className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-lg">{exp.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-1">•</span>
                        <span className="text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
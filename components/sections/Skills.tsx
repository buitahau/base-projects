'use client';

import { Server, Globe, Settings, Database, Cloud, Workflow, Brain } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Server className="h-8 w-8 text-blue-600" />,
      title: "Backend Development",
      skills: [
        { name: "Java", level: 95 },
        { name: "Spring Boot", level: 90 },
        { name: "Spring Batch", level: 85 },
        { name: "Apache Camel", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "Microservices", level: 85 }
      ]
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 85 },
        { name: "Angular", level: 80 },
        { name: "RxJS", level: 75 },
        { name: "Next.js", level: 80 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      icon: <Cloud className="h-8 w-8 text-purple-600" />,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS Lambda", level: 85 },
        { name: "API Gateway", level: 80 },
        { name: "EKS", level: 75 },
        { name: "Docker", level: 80 },
        { name: "CI/CD", level: 75 },
        { name: "Cloudflare", level: 70 }
      ]
    },
    {
      icon: <Database className="h-8 w-8 text-orange-600" />,
      title: "Databases & Storage",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 75 },
        { name: "Elasticsearch", level: 80 },
        { name: "Redis", level: 70 },
        { name: "AWS S3", level: 85 }
      ]
    },
    {
      icon: <Workflow className="h-8 w-8 text-indigo-600" />,
      title: "Integration & Messaging",
      skills: [
        { name: "Event Driven", level: 85 },
        { name: "AWS SQS", level: 80 },
        { name: "ActiveMQ", level: 75 },
        { name: "Git", level: 90 }
      ]
    },
    {
      icon: <Brain className="h-8 w-8 text-pink-600" />,
      title: "AI & Automation",
      skills: [
        { name: "n8n", level: 80 },
        { name: "LLM Integration", level: 75 },
        { name: "RAG Systems", level: 70 },
        { name: "AI Workflows", level: 75 }
      ]
    },
    {
      icon: <Settings className="h-8 w-8 text-gray-600" />,
      title: "Tools & Platforms",
      skills: [
        { name: "Kubernetes", level: 75 },
        { name: "Jenkins", level: 70 },
        { name: "Git", level: 90 },
        { name: "Jira", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications with AI integration
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <AnimatedSection key={categoryIndex} delay={categoryIndex * 0.1}>
                <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center mb-6">
                    {category.icon}
                    <h3 className="text-gray-900 font-bold text-lg ml-3">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium text-sm">{skill.name}</span>
                          <span className="text-gray-500 text-xs">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
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
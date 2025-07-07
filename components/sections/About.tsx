'use client';

import { Code, Coffee, Lightbulb, Target } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function About() {
  const highlights = [
    {
      icon: <Code className="h-6 w-6 text-blue-600" />,
      title: "Clean Code Advocate",
      description: "Writing maintainable, scalable code following SOLID principles and best practices"
    },
    {
      icon: <Coffee className="h-6 w-6 text-orange-600" />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and staying updated with industry trends"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-yellow-600" />,
      title: "Problem Solver",
      description: "Passionate about turning complex business requirements into elegant solutions"
    },
    {
      icon: <Target className="h-6 w-6 text-green-600" />,
      title: "Result Oriented",
      description: "Focused on delivering high-quality applications that exceed expectations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Me
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Dedicated fullstack developer with a passion for creating exceptional digital experiences
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Building the Future, One Line at a Time
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  With over 8 years of experience in fullstack development, I specialize in building 
                  robust backend systems using Java and Spring Boot, coupled with modern frontend 
                  technologies like React and Next.js.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  My journey began with a fascination for how complex systems work together seamlessly. 
                  Today, I focus on creating scalable microservices architectures, implementing CI/CD 
                  pipelines, and ensuring optimal user experiences across all devices.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community through technical writing and mentoring.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Developer at work"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.6}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    {highlight.icon}
                    <h4 className="text-gray-900 font-semibold ml-3 text-lg">{highlight.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
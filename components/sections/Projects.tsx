'use client';

import { ExternalLink, Github, Globe, BookOpen, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Projects() {
  const projects = [
    {
      title: "TechBlog Pro",
      description: "A modern technical blog platform built with Next.js and MDX. Features include syntax highlighting, dark mode, SEO optimization, and newsletter integration.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Blog Platform",
      technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
      liveUrl: "https://techblog-pro.vercel.app",
      githubUrl: "https://github.com/alexjohnson/techblog-pro",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "DevTools Dashboard",
      description: "A comprehensive developer productivity dashboard with project tracking, code snippets manager, and API testing tools.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Developer Tools",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://devtools-dashboard.netlify.app",
      githubUrl: "https://github.com/alexjohnson/devtools-dashboard",
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "API Documentation Hub",
      description: "Interactive API documentation generator with live testing capabilities. Supports OpenAPI/Swagger specifications.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Documentation",
      technologies: ["Vue.js", "TypeScript", "Swagger", "Docker"],
      liveUrl: "https://api-docs-hub.com",
      githubUrl: "https://github.com/alexjohnson/api-docs-hub",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Code Snippet Manager",
      description: "Personal code snippet management tool with syntax highlighting, tagging, and search functionality.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Productivity Tool",
      technologies: ["React", "Firebase", "Prism.js", "Material-UI"],
      liveUrl: "https://snippet-manager.web.app",
      githubUrl: "https://github.com/alexjohnson/snippet-manager",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Learning Resources Hub",
      description: "Curated collection of programming tutorials, courses, and resources with user ratings and reviews.",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Educational Platform",
      technologies: ["Next.js", "Supabase", "Tailwind CSS", "Stripe"],
      liveUrl: "https://learning-hub.dev",
      githubUrl: "https://github.com/alexjohnson/learning-hub",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "Portfolio Analytics",
      description: "Analytics dashboard for tracking portfolio website performance, visitor insights, and engagement metrics.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Analytics Tool",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      liveUrl: "https://portfolio-analytics.herokuapp.com",
      githubUrl: "https://github.com/alexjohnson/portfolio-analytics",
      icon: <Globe className="h-6 w-6" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of satellite sites, tools, and platforms I've built to solve real-world problems
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                        {project.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button
                        asChild
                        className="bg-gray-900 hover:bg-gray-800 text-white flex-1"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Visit Site
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
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
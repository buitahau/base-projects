'use client';

import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "University of Information Technology",
      location: "HoChiMinh City, Vietnam",
      year: "2007 - 2011",
      gpa: "3.8/4.0",
      highlights: [
        "Specialized in Distributed Systems and Software Engineering",
        "Teaching Assistant for Data Structures and Algorithms",
        "Published research on microservices architecture optimization"
      ]
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      school: "University of Information Technology",
      location: "HoChiMinh City, Vietnam",
      year: "2017 - 2019",
      gpa: "3.7/4.0",
      highlights: [
        "Summa Cum Laude graduate",
        "President of Computer Science Society",
        "Winner of annual hackathon competition"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      name: "Oracle Certified Professional, Java SE",
      issuer: "Oracle Corporation",
      year: "2022"
    },
    {
      name: "Spring Professional Certification",
      issuer: "VMware",
      year: "2021"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Education & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Continuous learning and professional development journey
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <GraduationCap className="h-6 w-6 mr-3 text-blue-600" />
                  Academic Background
                </h3>
                {education.map((edu, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                        <p className="text-blue-600 font-semibold text-lg mb-2">{edu.school}</p>
                        <div className="flex flex-wrap gap-4 text-gray-500 text-sm mb-4">
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {edu.location}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {edu.year}
                          </span>
                          <span className="flex items-center">
                            <Award className="h-4 w-4 mr-1" />
                            GPA: {edu.gpa}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-gray-600 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="h-6 w-6 mr-3 text-green-600" />
                  Professional Certifications
                </h3>
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h4>
                      <p className="text-blue-600 font-semibold mb-2">{cert.issuer}</p>
                      <p className="text-gray-500 text-sm">{cert.year}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Continuous Learning</h4>
                  <p className="text-gray-600 mb-4">
                    Currently pursuing additional certifications in:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">•</span>
                      Kubernetes Application Developer (CKAD)
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">•</span>
                      Google Cloud Professional Cloud Architect
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">•</span>
                      Certified Scrum Master (CSM)
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
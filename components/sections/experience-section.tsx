"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SectionHeading from "@/components/ui/section-heading";

// Experience data
const experiences = [
  {
    id: 1,
    position: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    duration: "Jan 2022 - Present",
    description: [
      "Led the frontend development team in redesigning the company's flagship product, resulting in a 35% increase in user engagement.",
      "Implemented advanced React patterns and performance optimizations, reducing load time by 40%.",
      "Mentored junior developers and established best practices for the frontend team.",
      "Collaborated with UX/UI designers to create intuitive and accessible user interfaces.",
    ],
  },
  {
    id: 2,
    position: "Full Stack Developer",
    company: "InnovateTech",
    location: "Boston, MA",
    duration: "Mar 2020 - Dec 2021",
    description: [
      "Developed and maintained multiple client projects using React, Node.js, and MongoDB.",
      "Created a real-time analytics dashboard that increased client reporting efficiency by 50%.",
      "Implemented CI/CD pipelines for automated testing and deployment.",
      "Collaborated with cross-functional teams to deliver projects on time and within budget.",
    ],
  },
  {
    id: 3,
    position: "Junior Web Developer",
    company: "Digital Creators Agency",
    location: "New York, NY",
    duration: "Jun 2018 - Feb 2020",
    description: [
      "Built responsive websites and web applications for various clients using modern web technologies.",
      "Assisted in the development of a content management system that streamlined client content updates.",
      "Participated in code reviews and contributed to the improvement of development workflows.",
      "Worked closely with designers to implement pixel-perfect user interfaces.",
    ],
  },
];

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto" ref={ref}>
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey"
          centered
        />

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 md:translate-x-0"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative ${
                  index % 2 === 0
                    ? "md:pr-12 md:text-right md:self-end"
                    : "md:pl-12"
                } md:w-1/2 ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-0 top-10 w-4 h-4 rounded-full bg-primary -translate-x-1/2 md:translate-x-0"></div>

                <Card 
                  className="border-border/40 hover:border-border/80 transition-all duration-300 bg-card/60 backdrop-blur-sm cursor-pointer"
                  onClick={() => toggleExpand(exp.id)}
                >
                  <CardHeader className="p-6">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold">{exp.position}</h3>
                      <p className="text-lg font-medium text-primary">
                        {exp.company}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <Separator />
                  <CardContent className="p-6">
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: expandedId === exp.id ? "auto" : "auto", 
                        opacity: 1 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
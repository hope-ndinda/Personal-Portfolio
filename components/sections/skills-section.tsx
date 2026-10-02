"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeading from "@/components/ui/section-heading";

// Skill categories and items
const skillCategories = [
  {
    id: "languages",
    label: "Languages & Frameworks",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Socket.io", level: 65 },
      { name: "OOP", level: 85 },
    ],
  },
  {
    id: "systems",
    label: "Embedded & Security",
    skills: [
      { name: "Embedded Systems", level: 75 },
      { name: "Cybersecurity Fundamentals", level: 65 },
      { name: "Network Reconnaissance", level: 60 },
      { name: "Penetration Testing", level: 55 },
      { name: "GUI Development", level: 75 },
      { name: "ArcFace / ONNX (Facial Recognition)", level: 60 },
      { name: "MQTT", level: 60 },
    ],
  },
  {
    id: "tools",
    label: "Tools & Practices",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "Tesseract OCR", level: 65 },
      { name: "Postman", level: 70 },
      { name: "Teamwork & Mentorship", level: 90 },
      { name: "Communication", level: 90 },
    ],
  },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("languages");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto" ref={ref}>
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies I work with"
          centered
        />

        <div className="mt-12 max-w-3xl mx-auto">
          <Tabs
            defaultValue="languages"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3">
              {skillCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-sm md:text-base"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {skillCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-6 space-y-8"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView && activeTab === category.id
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-muted rounded-full h-3">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={
                            inView && activeTab === category.id
                              ? { width: `${skill.level}%` }
                              : { width: "0%" }
                          }
                          transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                          className="h-3 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {["Java", "Python", "JavaScript", "TypeScript", "React", "Socket.io", "Embedded Systems", "Cybersecurity"].map(
            (tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center h-24 rounded-lg bg-card/60 backdrop-blur-sm border border-border/50 hover:border-border/80 transition-colors"
              >
                <span className="font-medium text-center">{tech}</span>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
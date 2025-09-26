"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Laptop, Lightbulb, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";

const services = [
  {
    icon: <Code className="h-10 w-10 text-blue-500" />,
    title: "Web Development",
    description:
      "Building responsive, accessible websites and web applications with modern technologies.",
  },
  {
    icon: <Laptop className="h-10 w-10 text-green-500" />,
    title: "Full stack  Development",
    description:
      "I design and implement full-stack solutions using modern frameworks (e.g., React/Next.js on the frontend, Node.js/Express/NestJS on the backend) and databases (PostgreSQL, MongoDB).",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-amber-500" />,
    title: "UX/UI Design",
    description:
      "Designing user-centered experiences that balance aesthetics and functionality.",
  },
  {
    icon: <Users className="h-10 w-10 text-purple-500" />,
    title: "Team Collaboration",
    description:
      "Working effectively in agile teams to deliver high-quality software solutions.",
  },
];

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <SectionHeading
          title="About Me"
          subtitle="My background and what I do"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm NISHIMWE NDINDABAHIZI Hope, a passionate software development student with
                a growing interest in embedded systems,cybersecurity and  smart solutions for real-world
                problems. I enjoy learning new technologies, collaborating on innovative projects, and using ICT
                to create meaningful change in community 
              </p>
              <p>
                I'm constantly learning and improving my skills to stay at the forefront of the ever-evolving tech landscape.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new
                technologies, reading books,contributing to open-source projects, or mentoring
                aspiring developers. I believe in writing clean, maintainable
                code and creating intuitive user experiences.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border border-border/40 bg-card/60 backdrop-blur-sm hover:border-border/80 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="mb-2">{service.icon}</div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

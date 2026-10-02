"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Cpu, ShieldCheck, Code2, Users } from "lucide-react";
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
    icon: <Cpu className="h-10 w-10 text-blue-500" />,
    title: "Embedded Systems",
    description:
      "Building hardware/software systems — sensor-driven monitoring, facial recognition access control, and IoT devices communicating over MQTT.",
  },
  {
    icon: <Code2 className="h-10 w-10 text-green-500" />,
    title: "Software Development",
    description:
      "Building applications across Java, Python, JavaScript/TypeScript, and React — from desktop GUIs to real-time web apps with Socket.io.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-amber-500" />,
    title: "Cybersecurity Fundamentals",
    description:
      "Trained in security fundamentals through advanced topics — Python for security, network reconnaissance, and penetration testing.",
  },
  {
    icon: <Users className="h-10 w-10 text-purple-500" />,
    title: "Mentorship & Leadership",
    description:
      "President of the Reading Club and volunteer tutor for ~80 incoming students weekly, alongside interpreting for the deaf community.",
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
                I'm Hope Nishimwe Ndindabahizi, a software programming graduate of Rwanda Coding
                Academy (2023–2026) with hands-on experience across Java, Python, JavaScript/TypeScript,
                React, and embedded systems. I build hardware/software projects that solve real-world
                problems including a hackathon-stage transformer-theft monitoring system and a published React/TypeScript component library.
              </p>
              <p>
                I've built on that with progressive cybersecurity training (network reconnaissance, penetration
                testing) through Cyberium, and I combine that full-stack and embedded build experience
                with active peer mentorship and community leadership.
              </p>
              <p>
                When I&apos;m not coding, I volunteer-tutor around 80 newly admitted students every Saturday evenings, and interpret
                church services in Rwandan Sign Language for the deaf community.
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

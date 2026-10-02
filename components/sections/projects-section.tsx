"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Zap,
  Columns3,
  ScanFace,
  Receipt,
  ScanText,
  Component,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

// Project data — sourced directly from resume project list
const projects = [
  {
    id: 1,
    title: "Twatch — Transformer Theft Monitoring System",
    period: "2025 – 2026",
    status: "Hackathon Project",
    description:
      "Team-built embedded system using current sensors to detect and flag tampering/theft of electrical transformer equipment. Built the frontend in TypeScript — hackathon submission pending approval, currently preparing a pitch to Rwanda Energy Group (REG).",
    tags: ["TypeScript", "Embedded Systems", "Current Sensors", "Team Project"],
    icon: Zap,
    gradient: "from-amber-500 to-red-600",
    pattern: "circuit" as const,
    githubUrl: "https://github.com/hope-ndinda",
    hasLiveDemo: false,
  },
  {
    id: 2,
    title: "Real-Time Kanban Board",
    period: "2025",
    status: "Personal Project",
    description:
      "Built the frontend in JavaScript with Socket.io for real-time task/board updates across users.",
    tags: ["JavaScript", "Socket.io", "Real-Time"],
    icon: Columns3,
    gradient: "from-blue-500 to-violet-600",
    pattern: "columns" as const,
    githubUrl: "https://github.com/hope-ndinda",
    hasLiveDemo: false,
  },
  {
    id: 3,
    title: "Smart Lock & Face-Tracking System",
    period: "2024",
    status: "Embedded Project",
    description:
      "Embedded system using ArcFace (ONNX) facial recognition to enroll and identify multiple users from image input. Locks/secures a device or asset to a specified enrolled person and tracks their movement when they leave the camera's view.",
    tags: ["Python", "ArcFace", "ONNX", "Embedded Systems"],
    icon: ScanFace,
    gradient: "from-emerald-500 to-teal-600",
    pattern: "scan" as const,
    githubUrl: "https://github.com/hope-ndinda",
    hasLiveDemo: false,
  },
  {
    id: 4,
    title: "Utility Billing System",
    period: "2024",
    status: "Desktop App",
    description:
      "Java desktop application applying core OOP principles to generate and manage utility bills. Implemented tiered billing logic, calculating charges based on volume of water or electricity consumed.",
    tags: ["Java", "OOP", "Desktop App"],
    icon: Receipt,
    gradient: "from-indigo-500 to-blue-600",
    pattern: "ledger" as const,
    githubUrl: "https://github.com/hope-ndinda",
    hasLiveDemo: false,
  },
  {
    id: 5,
    title: "OCR Text Scanner (GUI)",
    period: "2024",
    status: "Desktop App",
    description:
      "Desktop GUI application using Tesseract OCR to extract editable text from scanned images, achieving ~90% accuracy.",
    tags: ["Java", "Tesseract OCR", "GUI"],
    icon: ScanText,
    gradient: "from-orange-500 to-amber-600",
    pattern: "scanlines" as const,
    githubUrl: "https://github.com/hope-ndinda",
    hasLiveDemo: false,
  },
  {
    id: 6,
    title: "React/TypeScript Component Library",
    period: "2025",
    status: "Published",
    description:
      "Designed and published a reusable UI component library built with React and TypeScript.",
    tags: ["React", "TypeScript", "Component Library"],
    icon: Component,
    gradient: "from-cyan-500 to-blue-600",
    pattern: "blocks" as const,
    githubUrl: "https://github.com/hope-ndinda",
    hasLiveDemo: false,
  },
];

type Pattern = "circuit" | "columns" | "scan" | "ledger" | "scanlines" | "blocks";

function CoverPattern({ pattern }: { pattern: Pattern }) {
  switch (pattern) {
    case "circuit":
      return (
        <svg className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 200 200" preserveAspectRatio="none">
          <path d="M0 40 H60 V80 H140 V40 H200" stroke="white" strokeWidth="2" fill="none" />
          <path d="M0 160 H50 V120 H160 V160 H200" stroke="white" strokeWidth="2" fill="none" />
          <path d="M100 0 V60 H40 V140 H100 V200" stroke="white" strokeWidth="2" fill="none" />
          <circle cx="60" cy="80" r="4" fill="white" />
          <circle cx="140" cy="40" r="4" fill="white" />
          <circle cx="50" cy="120" r="4" fill="white" />
          <circle cx="160" cy="160" r="4" fill="white" />
        </svg>
      );
    case "columns":
      return (
        <svg className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 200 200" preserveAspectRatio="none">
          {[20, 80, 140].map((x) => (
            <rect key={x} x={x} y="20" width="40" height="160" rx="6" stroke="white" strokeWidth="2" fill="none" />
          ))}
          <rect x="28" y="34" width="24" height="14" rx="2" fill="white" />
          <rect x="28" y="56" width="24" height="14" rx="2" fill="white" />
          <rect x="88" y="34" width="24" height="14" rx="2" fill="white" />
          <rect x="148" y="34" width="24" height="14" rx="2" fill="white" />
          <rect x="148" y="56" width="24" height="14" rx="2" fill="white" />
        </svg>
      );
    case "scan":
      return (
        <svg className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 200 200" preserveAspectRatio="none">
          <rect x="30" y="30" width="140" height="140" rx="16" stroke="white" strokeWidth="2" fill="none" />
          {Array.from({ length: 5 }).map((_, i) => (
            <line key={i} x1="30" y1={50 + i * 26} x2="170" y2={50 + i * 26} stroke="white" strokeWidth="1.5" />
          ))}
          <line x1="30" y1="100" x2="170" y2="100" stroke="white" strokeWidth="3" />
        </svg>
      );
    case "ledger":
      return (
        <svg className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 200 200" preserveAspectRatio="none">
          <rect x="40" y="24" width="120" height="152" rx="8" stroke="white" strokeWidth="2" fill="none" />
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={i} x1="56" y1={54 + i * 20} x2="144" y2={54 + i * 20} stroke="white" strokeWidth="2" />
          ))}
        </svg>
      );
    case "scanlines":
      return (
        <svg className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 200 200" preserveAspectRatio="none">
          <path d="M40 30 H30 V50" stroke="white" strokeWidth="3" fill="none" />
          <path d="M160 30 H170 V50" stroke="white" strokeWidth="3" fill="none" />
          <path d="M40 170 H30 V150" stroke="white" strokeWidth="3" fill="none" />
          <path d="M160 170 H170 V150" stroke="white" strokeWidth="3" fill="none" />
          {Array.from({ length: 4 }).map((_, i) => (
            <line key={i} x1="55" y1={70 + i * 20} x2="145" y2={70 + i * 20} stroke="white" strokeWidth="2" />
          ))}
        </svg>
      );
    case "blocks":
      return (
        <svg className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 200 200" preserveAspectRatio="none">
          <rect x="30" y="30" width="60" height="60" rx="8" stroke="white" strokeWidth="2" fill="none" />
          <rect x="110" y="30" width="60" height="30" rx="8" stroke="white" strokeWidth="2" fill="none" />
          <rect x="110" y="70" width="60" height="20" rx="6" stroke="white" strokeWidth="2" fill="none" />
          <rect x="30" y="110" width="140" height="60" rx="8" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      );
  }
}

function ProjectCover({
  gradient,
  pattern,
  Icon,
}: {
  gradient: string;
  pattern: Pattern;
  Icon: LucideIcon;
}) {
  return (
    <div className={cn("relative h-56 w-full overflow-hidden bg-gradient-to-br", gradient)}>
      <CoverPattern pattern={pattern} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm ring-1 ring-white/30 shadow-lg">
          <Icon className="h-10 w-10 text-white" strokeWidth={1.5} />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
    </div>
  );
}

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 mx-auto" ref={ref}>
        <SectionHeading
          title="My Projects"
          subtitle="A selection of the hardware, software, and embedded systems projects I've built"
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full flex flex-col border-border/40 hover:border-border/80 transition-all duration-300 bg-card/60 backdrop-blur-sm hover:shadow-lg group">
                <ProjectCover gradient={project.gradient} pattern={project.pattern} Icon={project.icon} />

                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Badge variant="outline" className="text-xs font-medium">
                      {project.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{project.period}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>

                  {project.hasLiveDemo && (
                    <Button size="sm" className="flex-1" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="group" asChild>
            <a href="https://github.com/hope-ndinda" target="_blank" rel="noopener noreferrer">
              View More Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

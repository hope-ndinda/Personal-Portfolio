"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import hopeImage from "@/app/image/hope.png";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full border bg-background/50 backdrop-blur-sm text-sm">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 font-medium">
                  Full stack developer
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I&apos;m{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                NISHIMWE NDINDABAHIZI Hope
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                I am a passionate software developer with growing interest in embedded systems, 
                cyber security and  smart solutions for real-world problems
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="group">
                  <Link href="#projects">
                    View Projects{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a
                    href="/NISHIMWE_NDINDABAHIZI_Hope_RESUME.pdf"
                    download
                  >
                    Download Resume <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <Link
                  href="https://github.com/hope-ndinda" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/hope-nishimwe-7a8935305/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/10">
              <Image
                src={hopeImage}
                alt="Hope NDINDABAHIZI"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

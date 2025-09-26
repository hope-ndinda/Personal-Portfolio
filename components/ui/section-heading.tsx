"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className={cn("space-y-4", centered && "text-center")}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "w-20 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full",
          centered && "mx-auto"
        )}
      />
    </motion.div>
  );
}
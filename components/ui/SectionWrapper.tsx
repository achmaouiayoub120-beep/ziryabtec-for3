"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn, staggerContainer, fadeInUp } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={shouldReduceMotion ? {} : "initial"}
      whileInView={shouldReduceMotion ? {} : "animate"}
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
      className={cn("relative w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32", className)}
    >
      {children}
    </motion.section>
  );
}

export function FadeInChild({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeInUp} className={className}>
      {children}
    </motion.div>
  );
}

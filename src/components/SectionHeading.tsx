
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  heading: string;
  subheading?: string;
  alignment?: "left" | "center" | "right";
  children?: ReactNode;
  className?: string;
}

export function SectionHeading({
  heading,
  subheading,
  alignment = "center",
  children,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        {
          "text-left": alignment === "left",
          "text-center": alignment === "center",
          "text-right": alignment === "right",
        },
        className
      )}
    >
      {subheading && (
        <p className="text-primary font-medium mb-2 font-mono text-sm tracking-wider uppercase">
          {subheading}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
        {heading}
      </h2>
      {children}
    </div>
  );
}

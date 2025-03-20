"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative w-full min-h-screen flex items-center justify-center",
        "overflow-hidden",
        className
      )}
      {...props}
    >
      {showRadialGradient && (
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(circle at 0% 100%, rgba(99, 102, 241, 0.6) 0%, transparent 50%),
              radial-gradient(circle at 100% 0%, rgba(57, 255, 255, 0.6) 0%, transparent 50%),
              radial-gradient(circle at 100% 100%, rgba(230, 51, 51, 0.6) 0%, transparent 50%),
              radial-gradient(circle at 0% 0%, rgba(57, 255, 255, 0.6) 0%, transparent 50%),
              linear-gradient(135deg, rgba(99, 102, 241, 0.4), rgba(57, 255, 255, 0.4), rgba(230, 51, 51, 0.4))
            `,
            backgroundSize: '200% 200%',
            animation: 'aurora 15s ease infinite',
            position: 'absolute',
            width: '100%',
            height: '100%',
            filter: 'blur(100px)',
            opacity: 0.7,
            transform: 'translateZ(0)',
          }}
        />
      )}
      <div 
        className="absolute inset-0 bg-white/70 dark:bg-black/70 backdrop-blur-sm"
      />
      <div 
        className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {children}
      </div>
    </div>
  );
};

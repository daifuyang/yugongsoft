import React from "react";
import FadeIn from "@/components/FadeIn";
import ProcessStepCard from "./ProcessStepCard";

interface ProcessItem {
  step: string;
  title: string;
  desc: string;
}

interface ProcessGridProps {
  items: ProcessItem[];
  animated?: boolean;
  startDelay?: number;
  delayStep?: number;
  showConnector?: boolean;
  className?: string;
}

export default function ProcessGrid({ items, animated = true, startDelay = 0, delayStep = 0.1, showConnector = true, className = "" }: ProcessGridProps) {
  return (
    <div className={`relative ${className}`}>
      {showConnector && (
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
        {items.map((item, i) => (
          animated ? (
            <FadeIn key={i} delay={startDelay + i * delayStep} direction="up">
              <ProcessStepCard step={item.step} title={item.title} desc={item.desc} />
            </FadeIn>
          ) : (
            <ProcessStepCard key={i} step={item.step} title={item.title} desc={item.desc} />
          )
        ))}
      </div>
    </div>
  );
}


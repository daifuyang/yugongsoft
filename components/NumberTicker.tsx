'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import CountUp from 'react-countup';

export default function NumberTicker({
  value,
  className = "",
  delay = 0,
}: {
  value: string | number;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [shouldStart, setShouldStart] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timeoutId = setTimeout(() => {
        setShouldStart(true);
      }, delay * 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [isInView, delay]);

  // Parse the numeric part, prefix, and suffix
  const stringValue = String(value);
  const numberMatch = stringValue.match(/[\d.]+/);
  
  let endValue = 0;
  let prefix = '';
  let suffix = '';
  let decimals = 0;

  if (numberMatch) {
    const numberString = numberMatch[0];
    endValue = parseFloat(numberString);
    
    // Determine decimals based on input (default to 0 if integer, or match input precision, or max 1 as before)
    // Previous implementation fixed to 1 decimal if not integer.
    // Let's detect precision from input.
    if (numberString.includes('.')) {
        decimals = numberString.split('.')[1].length;
        // Cap at 1 if we want to strictly mimic previous behavior, but dynamic is usually better.
        // Previous behavior: latest.toFixed(1) for non-integers.
        // Let's use the actual decimal length of the input string.
    }

    const matchIndex = stringValue.indexOf(numberString);
    prefix = stringValue.substring(0, matchIndex);
    suffix = stringValue.substring(matchIndex + numberString.length);
  }

  return (
    <span className={className} ref={ref}>
      {shouldStart ? (
        <CountUp
          start={0}
          end={endValue}
          duration={2}
          separator=","
          decimals={decimals}
          decimal="."
          prefix={prefix}
          suffix={suffix}
          useEasing={true}
        />
      ) : (
        // Initial state: show 0 with same prefix/suffix
        <span>{prefix}0{suffix}</span>
      )}
    </span>
  );
}

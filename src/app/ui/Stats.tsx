'use client';
import React, { useState, useEffect, useRef } from 'react';
import {stats} from '@/app/lib/definition'

interface AnimatedCounterProps {
  end: number;
  hasPlus: boolean;
  hasPercent: boolean;
  isInView: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, hasPlus, hasPercent, isInView }) => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isInView) {
      // Clear any running animations when out of viewport
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setCount(0);
      return;
    }

    const startAnimation = () => {
      // Count up phase
      let currentCount = 0;
      const increment = end / 60; // 60 steps for smooth animation
      
      intervalRef.current = setInterval(() => {
        currentCount += increment;
        if (currentCount >= end) {
          currentCount = end;
          setCount(Math.round(currentCount));
          clearInterval(intervalRef.current!);
          
          // Wait for 2 seconds at peak
          timeoutRef.current = setTimeout(() => {
            // Count down phase
            let countDownValue = end;
            const decrement = end / 60;
            
            intervalRef.current = setInterval(() => {
              countDownValue -= decrement;
              if (countDownValue <= 0) {
                countDownValue = 0;
                setCount(0);
                clearInterval(intervalRef.current!);
                
                // Wait for 1 second at zero, then restart
                timeoutRef.current = setTimeout(() => {
                  if (isInView) startAnimation();
                }, 1000);
              } else {
                setCount(Math.round(countDownValue));
              }
            }, 50);
          }, 2000);
        } else {
          setCount(Math.round(currentCount));
        }
      }, 50);
    };

    startAnimation();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isInView, end]);

  const suffix = hasPlus ? '+' : hasPercent ? '%' : '';
  return <span>{count.toLocaleString()}{suffix}</span>;
};



const Stats = () => {
  const [isInView, setIsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
        rootMargin: '0px 0px -100px 0px', // Adjust margins as needed
      }
    );

    const currentStatsRef = statsRef.current;
    if (currentStatsRef) {
      observer.observe(currentStatsRef);
    }

    return () => {
      if (currentStatsRef) {
        observer.unobserve(currentStatsRef);
      }
    };
  }, []);

    return (
      <div className="md:mt-25 z-20" ref={statsRef}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {stats.map((stat, index) => {
              const numericValue = parseFloat(stat.value.replace(/[^0-9.]/g, ''));
              const hasPlus = stat.value.includes('+');
              const hasPercent = stat.value.includes('%');
        
              return (
                <div key={index} className="text-left">
                  <div className="text-2xl md:text-3xl lg:text-5xl font-bold text-black mb-1">
                    <AnimatedCounter
                      end={numericValue}
                      hasPlus={hasPlus}
                      hasPercent={hasPercent}
                      isInView={isInView}
                    />
                  </div>
                  <div className="text-xs md:text-sm mt-3 md:mt-5 text-black font-bold uppercase tracking-wide">
                    {stat.label}
                  </div>             
                </div>
              );
            })}
          </div>
          <div className='text-center mt-10 md:mt-15 lg:mt-23'>
            <p className='text-black text-base sm:text-lg md:text-xl lg:text-3xl max-w-4xl mx-auto'>
              E-Africa equips individuals with job-ready skills and helps organizations build better teams        
              through training, consulting, and talent sourcing.
            </p>
          </div>
        </div>
      </div>
    )
}

export default Stats

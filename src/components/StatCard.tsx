import React from 'react';
import { useSimpleCount } from '@/hooks/useSimpleCount';

interface StatCardProps {
  number: number;
  suffix?: string;
  label: string;
  color: string;
  delay?: number;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  number,
  suffix = '',
  label,
  color,
  delay = 0,
  className = ''
}) => {
  const { count, ref } = useSimpleCount({
    target: number,
    duration: 1500 + delay * 100
  });

  const getColorClass = (color: string) => {
    switch (color) {
      case "gradient-purple":
        return "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400";
      case "gradient-pink":
        return "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400";
      case "gradient-orange":
        return "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400";
      case "gradient-blue":
        return "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400";
      case "gradient-green":
        return "text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400";
      default:
        return "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400";
    }
  };

  return (
    <div 
      ref={ref}
      className={`text-center group cursor-default count-animation ${className}`}
      style={{
        animationDelay: `${delay * 100}ms`
      }}
    >
      <div 
        className={`text-4xl md:text-5xl font-bold mb-2 transition-all duration-300 group-hover:scale-110 count-glow ${getColorClass(color)}`}
      >
        {count}{suffix}
      </div>
      <div className="text-muted-foreground text-sm md:text-base font-medium">
        {label}
      </div>
    </div>
  );
};

export default StatCard;
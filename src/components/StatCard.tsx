import React from 'react';
import { useSimpleCount } from '@/hooks/useSimpleCount';

interface StatCardProps {
  number: number;
  suffix?: string;
  label: string;
  color: string;
  delay?: number;
  className?: string;
  compact?: boolean;
  showIcon?: boolean;
  icon?: React.ReactNode;
  description?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  number,
  suffix = '',
  label,
  color,
  delay = 0,
  className = '',
  compact = false,
  showIcon = false,
  icon,
  description
}) => {
  const { count, ref } = useSimpleCount({
    target: number,
    duration: 1500 + delay * 100
  });

  const colorClasses = {
    "gradient-purple": "from-purple-400 to-pink-400",
    "gradient-pink": "from-pink-400 to-rose-400",
    "gradient-orange": "from-orange-400 to-yellow-400",
    "gradient-blue": "from-blue-400 to-cyan-400",
    "gradient-green": "from-green-400 to-emerald-400"
  };

  const gradientClass = colorClasses[color as keyof typeof colorClasses] || colorClasses["gradient-purple"];

  return (
    <div 
      ref={ref}
      className={`text-center group cursor-default ${className}`}
    >
      {showIcon && icon && (
        <div className={`flex justify-center mb-2 ${compact ? 'mb-1' : 'mb-2'}`}>
          <div className={`text-muted-foreground ${compact ? 'text-lg' : 'text-xl'}`}>
            {icon}
          </div>
        </div>
      )}
      <div 
        className={`${compact ? 'text-2xl md:text-3xl' : 'text-4xl md:text-5xl'} font-bold mb-2 transition-all duration-300 group-hover:scale-110 text-transparent bg-clip-text bg-gradient-to-r ${gradientClass}`}
      >
        {count}{suffix}
      </div>
      <div className={`text-muted-foreground ${compact ? 'text-xs' : 'text-sm md:text-base'} font-medium`}>
        {label}
      </div>
      {description && compact && (
        <div className="text-xs text-muted-foreground/70 mt-1">
          {description}
        </div>
      )}
    </div>
  );
};

// Mobile-optimized grid wrapper
export const MobileStatsGrid: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
      {children}
    </div>
  );
};

// Compact version of StatCard
export const CompactStatCard: React.FC<StatCardProps> = (props) => {
  return <StatCard {...props} compact={true} />;
};

// Error boundary wrapper for StatCard
interface StatCardErrorBoundaryState {
  hasError: boolean;
}

class StatCardErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  StatCardErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): StatCardErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('StatCard Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="text-center p-4 text-muted-foreground">
          <div className="text-sm">Unable to load stat</div>
        </div>
      );
    }

    return this.props.children;
  }
}

// StatCard with error boundary
export const StatCardWithErrorBoundary: React.FC<StatCardProps & {
  fallback?: React.ReactNode;
}> = ({ fallback, ...props }) => {
  return (
    <StatCardErrorBoundary fallback={fallback}>
      <StatCard {...props} />
    </StatCardErrorBoundary>
  );
};

export default StatCard;
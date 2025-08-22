import React from 'react';
import StatCard, { MobileStatsGrid, CompactStatCard, StatCardWithErrorBoundary } from './StatCard';
import { useIsMobile } from '@/hooks/use-mobile';
import { Award, Code, Zap, Users, Target, TrendingUp } from 'lucide-react';

// Basic mobile-optimized stats example
export const MobileStatsExample: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <MobileStatsGrid>
      <StatCard
        number={15}
        suffix="+"
        label="Certifications"
        color="gradient-purple"
        compact={isMobile}
        showIcon={true}
        icon={<Award className="h-4 w-4" />}
        description={isMobile ? "Professional certificates" : undefined}
        className="mobile-stat-card"
      />
    </MobileStatsGrid>
  );
};

// Comprehensive stats grid example
export const ComprehensiveStatsGrid: React.FC = () => {
  const isMobile = useIsMobile();
  
  const statsData = [
    {
      number: 15,
      suffix: '+',
      label: 'Certifications',
      color: 'gradient-purple',
      icon: <Award className="h-4 w-4" />,
      description: 'Professional certificates earned'
    },
    {
      number: 5,
      suffix: '',
      label: 'Platforms',
      color: 'gradient-pink',
      icon: <Code className="h-4 w-4" />,
      description: 'Technology platforms mastered'
    },
    {
      number: 3,
      suffix: '+',
      label: 'Years Experience',
      color: 'gradient-orange',
      icon: <Zap className="h-4 w-4" />,
      description: 'Years of professional experience'
    },
    {
      number: 10,
      suffix: '+',
      label: 'Skills',
      color: 'gradient-blue',
      icon: <Users className="h-4 w-4" />,
      description: 'Technical skills acquired'
    }
  ];
  
  // Calculate optimized delays outside of render
  const optimizedDelays = statsData.map((_, index) => 
    isMobile ? index * 80 : index * 100
  );
  
  return (
    <MobileStatsGrid className="my-8">
      {statsData.map((stat, index) => (
        <StatCardWithErrorBoundary
          key={`stat-${index}`}
          number={stat.number}
          suffix={stat.suffix}
          label={stat.label}
          color={stat.color}
          delay={optimizedDelays[index]}
          compact={isMobile}
          showIcon={true}
          icon={stat.icon}
          description={isMobile ? stat.description : undefined}
          className="mobile-stat-card hover:scale-105 transition-transform duration-300"
        />
      ))}
    </MobileStatsGrid>
  );
};

// Responsive layout example
export const ResponsiveStatsLayout: React.FC = () => {
  const isMobile = useIsMobile();
  
  const achievementStats = [
    { number: 100, suffix: '%', label: 'Success Rate', color: 'gradient-green', icon: <Target className="h-5 w-5" /> },
    { number: 50, suffix: '+', label: 'Projects', color: 'gradient-blue', icon: <Code className="h-5 w-5" /> },
    { number: 25, suffix: '+', label: 'Clients', color: 'gradient-purple', icon: <Users className="h-5 w-5" /> },
    { number: 5, suffix: '+', label: 'Years', color: 'gradient-orange', icon: <TrendingUp className="h-5 w-5" /> }
  ];
  
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <h3 className="text-2xl font-bold text-center mb-8">Achievements</h3>
      
      {isMobile ? (
        // Mobile-specific vertical layout
        <div className="space-y-4">
          {achievementStats.map((stat, index) => (
            <div key={index} className="bg-card/50 rounded-lg p-4 backdrop-blur-sm">
              <CompactStatCard
                {...stat}
                delay={index * 100}
                showIcon={true}
                description={`${stat.label} achieved through dedication`}
                className="mobile-stat-card"
              />
            </div>
          ))}
        </div>
      ) : (
        // Desktop grid layout
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievementStats.map((stat, index) => (
            <StatCard
              key={index}
              {...stat}
              delay={index * 150}
              showIcon={true}
              className="bg-card/30 p-6 rounded-xl backdrop-blur-sm hover:bg-card/50 transition-all duration-300"
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Simple usage pattern
export const SimpleStatCard: React.FC = () => (
  <StatCard
    number={42}
    suffix="+"
    label="Projects Completed"
    color="gradient-blue"
    delay={0}
  />
);

export default MobileStatsExample;
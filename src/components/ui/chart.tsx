import * as React from 'react';
import * as Recharts from 'recharts';
import { cn } from "@/lib/utils";

type Theme = 'light' | 'dark';

interface ChartConfigItem {
  label?: string;
  icon?: React.ComponentType<{ className?: string }>;
  color?: string;
  theme?: Record<Theme, string>;
  indicator?: 'dashed' | 'line' | 'dot' | 'none';
  hideInLegend?: boolean;
  hideInTooltip?: boolean;
  hideLabel?: boolean;
  hideIcon?: boolean;
  order?: number;
  formatter?: (value: any, name: string, item: any) => React.ReactNode;
  [key: string]: any;
}

type ChartConfig = Record<string, ChartConfigItem>;

interface ChartContextType {
  config: ChartConfig;
  chartId: string;
}

const ChartContext = React.createContext<ChartContextType | undefined>(undefined);

const useChart = () => {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error('useChart must be used within a ChartContainer');
  }
  return context;
};

// Chart theme configuration is now handled by the parent component

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig;
  children: React.ReactNode;
  id?: string;
}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ config, children, className, id: propId, ...props }, ref) => {
    const generatedId = React.useId();
    const id = propId || generatedId;
    
    const chartContextValue = React.useMemo<ChartContextType>(() => ({
      config,
      chartId: id,
    }), [config, id]);

    return (
      <ChartContext.Provider value={chartContextValue}>
        <div 
          ref={ref} 
          className={cn('w-full h-[20rem]', className)}
          {...props}
        >
          {children}
        </div>
      </ChartContext.Provider>
    );
  }
);

ChartContainer.displayName = 'ChartContainer';

interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig;
  children: React.ReactNode;
  className?: string;
}

const Chart = React.forwardRef<HTMLDivElement, ChartProps>(({
  config,
  children,
  className,
  ...props
}, ref) => {
  return (
    <ChartContainer config={config}>
      <div
        ref={ref}
        className={cn("w-full h-full", className)}
        {...props}
      >
        {children}
      </div>
    </ChartContainer>
  );
});

Chart.displayName = 'Chart';

interface ChartTooltipProps extends Recharts.TooltipProps<any, any> {
  className?: string;
  labelClassName?: string;
  formatter?: (value: any) => React.ReactNode;
  valueFormatter?: (value: any, name: string, item: any) => any;
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: 'dashed' | 'colored' | 'dot';
  nestLabel?: boolean;
  tooltipLabel?: string;
  active?: boolean;
  payload?: any[];
  label?: any;
}

const ChartTooltip = ({
  active,
  payload,
  className,
  hideIndicator = false,
  indicator,
  tooltipLabel,
  formatter
}: ChartTooltipProps) => {
  if (!active || !payload?.length) {
    return null;
  }

  const shouldNestLabel = payload.length === 1 && indicator !== 'dot';

  return (
    <div
      className={cn(
        "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
        className
      )}
    >
      {!shouldNestLabel && tooltipLabel && (
        <div className="font-medium">{tooltipLabel}</div>
      )}
      <div className="grid gap-1.5">
        {payload.map((item) => {
          const key = `${item.name || item.dataKey || 'value'}`;
          const color = item.payload?.fill || item.color;
          
          return (
            <div key={key} className="flex items-center gap-2">
              {!hideIndicator && (
                <div 
                  className={`h-2 w-2 rounded-full ${color ? 'opacity-100' : 'opacity-50 bg-gray-200'}`}
                  {...(color ? { 'data-color': color } : {})}
                />
              )}
              <div className="flex-1">
                {formatter ? formatter(item.value) : item.value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Export components
export { 
  Chart, 
  ChartContainer, 
  ChartTooltip, 
  useChart,
  // Export types
  type ChartConfig,
  type ChartConfigItem,
  type ChartTooltipProps,
  type ChartProps,
  type ChartContainerProps,
  type ChartContextType
};

export default {
  Chart,
  ChartContainer,
  ChartTooltip,
  useChart
};

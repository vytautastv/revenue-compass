import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change?: number;
  changeLabel?: string;
  icon?: React.ReactNode;
  variant?: "default" | "primary" | "warning" | "success" | "destructive";
  className?: string;
  style?: React.CSSProperties;
}

export function MetricCard({
  title,
  value,
  change,
  changeLabel = "vs last period",
  icon,
  variant = "default",
  className,
  style,
}: MetricCardProps) {
  const getTrendIcon = () => {
    if (change === undefined || change === 0) return <Minus className="h-3 w-3" />;
    return change > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />;
  };

  const getTrendColor = () => {
    if (change === undefined || change === 0) return "text-muted-foreground";
    return change > 0 ? "text-success" : "text-destructive";
  };

  const variantStyles = {
    default: "border-border",
    primary: "border-primary/20 bg-primary/5",
    warning: "border-warning/20 bg-warning/5",
    success: "border-success/20 bg-success/5",
    destructive: "border-destructive/20 bg-destructive/5",
  };

  return (
    <div
      className={cn(
        "glass rounded-xl border p-5 card-shadow transition-all duration-300 hover:border-primary/30",
        variantStyles[variant],
        className
      )}
      style={style}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-semibold tracking-tight">{value}</p>
        </div>
        {icon && (
          <div className="rounded-lg bg-secondary p-2.5">
            {icon}
          </div>
        )}
      </div>
      {change !== undefined && (
        <div className="mt-3 flex items-center gap-1.5">
          <span className={cn("flex items-center gap-1 text-sm font-medium", getTrendColor())}>
            {getTrendIcon()}
            {Math.abs(change)}%
          </span>
          <span className="text-xs text-muted-foreground">{changeLabel}</span>
        </div>
      )}
    </div>
  );
}

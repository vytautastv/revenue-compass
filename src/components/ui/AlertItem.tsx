import { cn } from "@/lib/utils";
import { AlertCircle, AlertTriangle, Info, CheckCircle2 } from "lucide-react";

type AlertLevel = "critical" | "warning" | "info" | "success";

interface AlertItemProps {
  level: AlertLevel;
  title: string;
  description: string;
  time: string;
  className?: string;
}

const iconMap = {
  critical: AlertCircle,
  warning: AlertTriangle,
  info: Info,
  success: CheckCircle2,
};

const styleMap = {
  critical: {
    dot: "bg-destructive",
    icon: "text-destructive",
  },
  warning: {
    dot: "bg-warning",
    icon: "text-warning",
  },
  info: {
    dot: "bg-primary",
    icon: "text-primary",
  },
  success: {
    dot: "bg-success",
    icon: "text-success",
  },
};

export function AlertItem({ level, title, description, time, className }: AlertItemProps) {
  const Icon = iconMap[level];
  const styles = styleMap[level];

  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-lg border border-border/50 bg-card/50 p-4 transition-all duration-200 hover:bg-card",
        className
      )}
    >
      <div className="relative mt-0.5">
        <Icon className={cn("h-5 w-5", styles.icon)} />
        <span className={cn("absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full animate-pulse-glow", styles.dot)} />
      </div>
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium">{title}</h4>
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

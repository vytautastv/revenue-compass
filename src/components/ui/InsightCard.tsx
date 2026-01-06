import { cn } from "@/lib/utils";
import { Sparkles, AlertTriangle, TrendingUp, Lightbulb } from "lucide-react";

type InsightType = "insight" | "warning" | "opportunity" | "tip";

interface InsightCardProps {
  type: InsightType;
  title: string;
  description: string;
  action?: string;
  className?: string;
}

const iconMap = {
  insight: Sparkles,
  warning: AlertTriangle,
  opportunity: TrendingUp,
  tip: Lightbulb,
};

const styleMap = {
  insight: {
    container: "border-primary/20 bg-primary/5",
    icon: "text-primary bg-primary/10",
    badge: "bg-primary/10 text-primary",
  },
  warning: {
    container: "border-warning/20 bg-warning/5",
    icon: "text-warning bg-warning/10",
    badge: "bg-warning/10 text-warning",
  },
  opportunity: {
    container: "border-success/20 bg-success/5",
    icon: "text-success bg-success/10",
    badge: "bg-success/10 text-success",
  },
  tip: {
    container: "border-muted-foreground/20 bg-muted/50",
    icon: "text-muted-foreground bg-muted",
    badge: "bg-muted text-muted-foreground",
  },
};

export function InsightCard({ type, title, description, action, className }: InsightCardProps) {
  const Icon = iconMap[type];
  const styles = styleMap[type];

  return (
    <div
      className={cn(
        "glass rounded-xl border p-5 card-shadow transition-all duration-300",
        styles.container,
        className
      )}
    >
      <div className="flex gap-4">
        <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg", styles.icon)}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold">{title}</h4>
            <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium capitalize", styles.badge)}>
              {type}
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          {action && (
            <p className="text-sm font-medium text-primary cursor-pointer hover:underline">
              {action} →
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

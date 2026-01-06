import { MetricCard } from "@/components/ui/MetricCard";
import { DollarSign, RefreshCcw, CreditCard, Wallet } from "lucide-react";

export function MetricsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Net Revenue"
        value="$37,580"
        change={12.4}
        changeLabel="vs last week"
        icon={<DollarSign className="h-5 w-5 text-primary" />}
        variant="primary"
        className="animate-fade-in"
        style={{ animationDelay: "0ms" } as React.CSSProperties}
      />
      <MetricCard
        title="MRR"
        value="$18,420"
        change={8.2}
        changeLabel="vs last month"
        icon={<RefreshCcw className="h-5 w-5 text-success" />}
        variant="success"
        className="animate-fade-in"
        style={{ animationDelay: "100ms" } as React.CSSProperties}
      />
      <MetricCard
        title="Refund Rate"
        value="2.4%"
        change={-0.3}
        changeLabel="vs last week"
        icon={<CreditCard className="h-5 w-5 text-warning" />}
        variant="warning"
        className="animate-fade-in"
        style={{ animationDelay: "200ms" } as React.CSSProperties}
      />
      <MetricCard
        title="Cash Position"
        value="$84,200"
        change={5.1}
        changeLabel="available balance"
        icon={<Wallet className="h-5 w-5 text-muted-foreground" />}
        className="animate-fade-in"
        style={{ animationDelay: "300ms" } as React.CSSProperties}
      />
    </div>
  );
}

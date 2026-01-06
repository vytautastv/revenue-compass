import { Sparkles, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FounderBrief() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="glass rounded-2xl border border-primary/20 p-6 card-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="font-semibold">Your Daily Brief</h2>
            <p className="text-sm text-muted-foreground">{today}</p>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
          <RefreshCw className="h-4 w-4" />
          Refresh
        </Button>
      </div>

      <div className="space-y-4">
        <div className="rounded-xl bg-card/50 border border-border/50 p-4">
          <h3 className="font-medium mb-2 flex items-center gap-2">
            <span className="text-primary">📈</span> What Changed
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Revenue is up <span className="text-success font-medium">12%</span> this week, driven by a 
            strong Tuesday with 23 new subscriptions. Shopify orders are steady, but Stripe MRR grew 
            faster than usual — likely from your recent pricing page update.
          </p>
        </div>

        <div className="rounded-xl bg-card/50 border border-border/50 p-4">
          <h3 className="font-medium mb-2 flex items-center gap-2">
            <span className="text-warning">⚡</span> Why It Matters
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your conversion rate jumped from 2.1% to 3.4% — this is your best week in 3 months. 
            However, refund requests are up <span className="text-warning font-medium">8%</span>, 
            mostly from first-time buyers. Worth monitoring.
          </p>
        </div>

        <div className="rounded-xl bg-card/50 border border-border/50 p-4">
          <h3 className="font-medium mb-2 flex items-center gap-2">
            <span className="text-primary">🎯</span> What To Do Next
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-medium text-foreground">Focus on retention this week.</span> Consider 
            reaching out to the 5 customers who requested refunds — early feedback could prevent 
            future churn. Your 30-day forecast looks solid at $24.8k if current trends hold.
          </p>
        </div>
      </div>
    </div>
  );
}

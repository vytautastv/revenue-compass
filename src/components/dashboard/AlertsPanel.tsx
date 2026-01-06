import { AlertItem } from "@/components/ui/AlertItem";

export function AlertsPanel() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Recent Alerts</h3>
        <span className="rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-medium text-destructive">
          3 active
        </span>
      </div>

      <div className="space-y-2">
        <AlertItem
          level="warning"
          title="Payout delayed"
          description="Your Stripe payout of $4,200 is pending additional verification."
          time="2h ago"
        />
        <AlertItem
          level="critical"
          title="Churn risk detected"
          description="Customer 'TechCorp' hasn't logged in for 14 days and their subscription renews in 3 days."
          time="4h ago"
        />
        <AlertItem
          level="info"
          title="New milestone reached"
          description="You've crossed $15k MRR for the first time. Congratulations!"
          time="1d ago"
        />
        <AlertItem
          level="success"
          title="Refund resolved"
          description="Disputed charge from 'JohnD' was resolved in your favor."
          time="2d ago"
        />
      </div>
    </div>
  );
}

import { InsightCard } from "@/components/ui/InsightCard";

export function InsightsPanel() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">AI Insights</h3>
        <span className="text-xs text-muted-foreground">Updated 2h ago</span>
      </div>

      <div className="space-y-3">
        <InsightCard
          type="opportunity"
          title="Conversion spike detected"
          description="Your pricing page changes from last week are working. Conversion rate increased from 2.1% to 3.4%. Consider A/B testing the new copy on your landing page too."
          action="View conversion details"
        />
        <InsightCard
          type="warning"
          title="Refund pattern emerging"
          description="5 of your last 12 refunds came from customers in their first 48 hours. This suggests a possible expectation mismatch — review your onboarding flow."
          action="See refund breakdown"
        />
        <InsightCard
          type="insight"
          title="Revenue mix shifting"
          description="Subscription revenue now accounts for 62% of total revenue, up from 54% last month. This improves predictability and valuation metrics."
        />
      </div>
    </div>
  );
}

import { Header } from "@/components/dashboard/Header";
import { FounderBrief } from "@/components/dashboard/FounderBrief";
import { MetricsGrid } from "@/components/dashboard/MetricsGrid";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { InsightsPanel } from "@/components/dashboard/InsightsPanel";
import { AlertsPanel } from "@/components/dashboard/AlertsPanel";
import { ForecastWidget } from "@/components/dashboard/ForecastWidget";
import { IntegrationStatus } from "@/components/dashboard/IntegrationStatus";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-1">
            Good morning, <span className="text-gradient">Alex</span> 👋
          </h2>
          <p className="text-muted-foreground">
            Here's what's happening with your revenue today.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="mb-8">
          <MetricsGrid />
        </div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Founder Brief & Chart */}
          <div className="lg:col-span-2 space-y-8">
            <FounderBrief />
            <RevenueChart />
            <InsightsPanel />
          </div>

          {/* Right Column - Forecast, Alerts, Integrations */}
          <div className="space-y-8">
            <ForecastWidget />
            <AlertsPanel />
            <IntegrationStatus />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-6 mt-12">
        <div className="container flex items-center justify-between text-sm text-muted-foreground">
          <p>© 2024 RevPilot. Built for indie founders.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Help</a>
            <a href="#" className="hover:text-foreground transition-colors">Docs</a>
            <a href="#" className="hover:text-foreground transition-colors">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

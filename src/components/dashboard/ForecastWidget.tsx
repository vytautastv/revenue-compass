import { TrendingUp, AlertTriangle } from "lucide-react";

export function ForecastWidget() {
  const forecastData = {
    projected: 24800,
    confidence: 82,
    upside: 27200,
    downside: 21500,
  };

  return (
    <div className="glass rounded-2xl border border-border p-6 card-shadow">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10">
          <TrendingUp className="h-5 w-5 text-success" />
        </div>
        <div>
          <h3 className="font-semibold">30-Day Forecast</h3>
          <p className="text-sm text-muted-foreground">Based on current trends</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-center">
          <p className="text-4xl font-bold text-gradient">
            ${forecastData.projected.toLocaleString()}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Projected revenue
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-success/10 border border-success/20 p-3">
          <TrendingUp className="h-4 w-4 text-success shrink-0" />
          <p className="text-sm">
            <span className="font-medium text-success">{forecastData.confidence}% confidence</span>
            <span className="text-muted-foreground"> based on 90-day patterns</span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-card/50 border border-border/50 p-3 text-center">
            <p className="text-lg font-semibold text-success">
              ${forecastData.upside.toLocaleString()}
            </p>
            <p className="text-xs text-muted-foreground">Best case</p>
          </div>
          <div className="rounded-lg bg-card/50 border border-border/50 p-3 text-center">
            <p className="text-lg font-semibold text-warning">
              ${forecastData.downside.toLocaleString()}
            </p>
            <p className="text-xs text-muted-foreground">Conservative</p>
          </div>
        </div>

        <div className="flex items-start gap-2 rounded-lg bg-warning/5 border border-warning/20 p-3">
          <AlertTriangle className="h-4 w-4 text-warning shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-warning">Watch:</span> If refund rate exceeds 3%, 
            forecast drops to $19.8k
          </p>
        </div>
      </div>
    </div>
  );
}

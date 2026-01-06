import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { date: "Mon", stripe: 2400, shopify: 1800, total: 4200 },
  { date: "Tue", stripe: 3200, shopify: 2100, total: 5300 },
  { date: "Wed", stripe: 2800, shopify: 1900, total: 4700 },
  { date: "Thu", stripe: 3100, shopify: 2400, total: 5500 },
  { date: "Fri", stripe: 3800, shopify: 2800, total: 6600 },
  { date: "Sat", stripe: 2900, shopify: 3200, total: 6100 },
  { date: "Sun", stripe: 2600, shopify: 2600, total: 5200 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass rounded-lg border border-border p-3 card-shadow">
        <p className="text-sm font-medium mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-muted-foreground capitalize">{entry.name}:</span>
            <span className="font-medium">${entry.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function RevenueChart() {
  return (
    <div className="glass rounded-2xl border border-border p-6 card-shadow">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold">Revenue Trend</h3>
          <p className="text-sm text-muted-foreground">Last 7 days combined</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-primary" />
            <span className="text-muted-foreground">Stripe</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-success" />
            <span className="text-muted-foreground">Shopify</span>
          </div>
        </div>
      </div>

      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="stripeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(168 76% 42%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(168 76% 42%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="shopifyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(142 71% 45%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(142 71% 45%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 30% 16%)" vertical={false} />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215 20% 55%)", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215 20% 55%)", fontSize: 12 }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="stripe"
              stackId="1"
              stroke="hsl(168 76% 42%)"
              strokeWidth={2}
              fill="url(#stripeGradient)"
            />
            <Area
              type="monotone"
              dataKey="shopify"
              stackId="1"
              stroke="hsl(142 71% 45%)"
              strokeWidth={2}
              fill="url(#shopifyGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

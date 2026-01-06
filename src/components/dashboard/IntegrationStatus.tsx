import { CheckCircle2, AlertCircle } from "lucide-react";

interface IntegrationProps {
  name: string;
  status: "connected" | "syncing" | "error";
  lastSync: string;
  icon: React.ReactNode;
}

function IntegrationItem({ name, status, lastSync, icon }: IntegrationProps) {
  const statusConfig = {
    connected: {
      color: "text-success",
      bg: "bg-success/10",
      icon: <CheckCircle2 className="h-4 w-4" />,
      label: "Connected",
    },
    syncing: {
      color: "text-primary",
      bg: "bg-primary/10",
      icon: <div className="h-4 w-4 rounded-full border-2 border-primary border-t-transparent animate-spin" />,
      label: "Syncing",
    },
    error: {
      color: "text-destructive",
      bg: "bg-destructive/10",
      icon: <AlertCircle className="h-4 w-4" />,
      label: "Error",
    },
  };

  const config = statusConfig[status];

  return (
    <div className="flex items-center justify-between rounded-lg border border-border/50 bg-card/50 p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
          {icon}
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-xs text-muted-foreground">Last sync: {lastSync}</p>
        </div>
      </div>
      <div className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 ${config.bg}`}>
        <span className={config.color}>{config.icon}</span>
        <span className={`text-xs font-medium ${config.color}`}>{config.label}</span>
      </div>
    </div>
  );
}

export function IntegrationStatus() {
  return (
    <div className="glass rounded-2xl border border-border p-6 card-shadow">
      <h3 className="font-semibold mb-4">Integrations</h3>
      <div className="space-y-3">
        <IntegrationItem
          name="Stripe"
          status="connected"
          lastSync="5 min ago"
          icon={
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" />
            </svg>
          }
        />
        <IntegrationItem
          name="Shopify"
          status="connected"
          lastSync="12 min ago"
          icon={
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zm-1.469-17.953c-.473 0-.981.021-1.516.073l-.673-3.044c-.102-.481-.481-.721-.859-.721-.377 0-.756.24-.859.721l-.769 3.044c-.535-.052-1.043-.073-1.516-.073-2.152 0-3.281 1.088-3.281 3.174 0 2.086 1.129 3.174 3.281 3.174.473 0 .981-.021 1.516-.073l.769 3.044c.103.481.482.721.859.721.378 0 .757-.24.859-.721l.673-3.044c.535.052 1.043.073 1.516.073 2.152 0 3.281-1.088 3.281-3.174 0-2.086-1.129-3.174-3.281-3.174zm-4.048 4.824c-.419 0-.817-.016-1.189-.047l.594-2.35c.372.031.77.047 1.189.047.419 0 .817-.016 1.189-.047l-.594 2.35c-.372.031-.77.047-1.189.047z" />
            </svg>
          }
        />
      </div>
    </div>
  );
}

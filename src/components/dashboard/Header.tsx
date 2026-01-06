import { Bell, Settings, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary glow">
            <Zap className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">RevPilot</h1>
            <p className="text-xs text-muted-foreground">AI Revenue Co-pilot</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Dashboard
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Insights
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Forecasts
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Alerts
          </Button>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-destructive" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5 text-muted-foreground" />
          </Button>
          <div className="ml-2 h-8 w-8 rounded-full bg-gradient-to-br from-primary to-success" />
        </div>
      </div>
    </header>
  );
}

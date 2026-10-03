import {
  Activity,
  Bot,
  ChevronDown,
  LayoutDashboard,
  Plus,
  Settings,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardHeader />

        <main className="flex-1 p-6 lg:p-8">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
};

const DashboardSidebar = () => {
  return (
    <aside className="hidden w-64 shrink-0 border-r bg-card md:flex md:flex-col">
      <div className="flex h-16 items-center px-6">
        <span className="text-lg font-semibold tracking-tight">Vangrex</span>
      </div>

      <Separator />

      <div className="flex-1 p-4">
        <nav className="space-y-1">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
          <SidebarItem icon={Bot} label="Agents" />
          <SidebarItem icon={Zap} label="Runs" />
          <SidebarItem icon={Activity} label="Activity" />
        </nav>
      </div>

      <div className="border-t p-4">
        <SidebarItem icon={Settings} label="Settings" />
      </div>
    </aside>
  );
};

const SidebarItem = ({
  icon: Icon,
  label,
  active = false,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}) => {
  return (
    <button
      className={[
        "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
        active
          ? "bg-muted font-medium text-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
      ].join(" ")}
    >
      <Icon className="size-4" />
      {label}
    </button>
  );
};

const DashboardHeader = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b px-6 lg:px-8">
      <div>
        <h1 className="text-sm font-medium">Dashboard</h1>
      </div>

      <div className="flex items-center gap-3">
        <Button size="sm">
          <Plus className="mr-2 size-4" />
          New agent
        </Button>

        <Button variant="ghost" size="sm">
          Account
          <ChevronDown className="ml-2 size-4" />
        </Button>
      </div>
    </header>
  );
};

const DashboardContent = () => {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-8">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Welcome to Vangrex
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your agents and deployments.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <DashboardCard
          title="Agents"
          value="0"
          description="Configured agents"
        />

        <DashboardCard
          title="Deployments"
          value="0"
          description="Active deployments"
        />

        <DashboardCard title="Runs" value="0" description="Agent runs" />
      </div>

      <div className="rounded-xl border bg-card">
        <div className="border-b p-6">
          <h3 className="font-medium">Your agents</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Create your first agent to get started.
          </p>
        </div>

        <div className="flex min-h-48 items-center justify-center p-6">
          <Button>
            <Plus className="mr-2 size-4" />
            Create agent
          </Button>
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) => {
  return (
    <div className="rounded-xl border bg-card p-6">
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{description}</p>
    </div>
  );
};

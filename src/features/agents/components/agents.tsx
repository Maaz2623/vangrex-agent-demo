import {
  Bot,
  MoreHorizontal,
  Play,
  Settings,
  Sparkles,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const agents = [
  {
    id: 1,
    name: "Research Agent",
    username: "@research",
    description:
      "Researches topics, gathers information, and summarizes findings.",
    icon: Sparkles,
    status: "Active",
    runs: 128,
  },
  {
    id: 2,
    name: "Support Agent",
    username: "@support",
    description:
      "Handles customer questions and helps resolve support requests.",
    icon: Bot,
    status: "Active",
    runs: 84,
  },
  {
    id: 3,
    name: "Automation Agent",
    username: "@automation",
    description: "Runs automated workflows and responds to external events.",
    icon: Zap,
    status: "Paused",
    runs: 42,
  },
];

export const Agents = () => {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 p-6 lg:p-8">
      <AgentsHeader />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
};

const AgentsHeader = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Agents</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Create and manage your AI agents.
        </p>
      </div>

      <Button>
        <Bot className="mr-2 size-4" />
        Create agent
      </Button>
    </div>
  );
};

const AgentCard = ({ agent }: { agent: (typeof agents)[number] }) => {
  const Icon = agent.icon;

  return (
    <div className="group overflow-hidden rounded-2xl border bg-card transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between p-5">
        <div className="flex items-center gap-3">
          <div className="flex size-14 items-center justify-center rounded-full border bg-muted">
            <Icon className="size-6 text-foreground" />
          </div>

          <div>
            <h2 className="font-medium">{agent.name}</h2>
            <p className="text-sm text-muted-foreground">{agent.username}</p>
          </div>
        </div>

        <Button variant="ghost" size="icon" className="size-8">
          <MoreHorizontal className="size-4" />
        </Button>
      </div>

      <div className="px-5 pb-5">
        <p className="min-h-12 text-sm leading-6 text-muted-foreground">
          {agent.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t pt-4">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>
              <strong className="font-medium text-foreground">
                {agent.runs}
              </strong>{" "}
              runs
            </span>

            <span className="flex items-center gap-1.5">
              <span
                className={[
                  "size-1.5 rounded-full",
                  agent.status === "Active"
                    ? "bg-green-500"
                    : "bg-muted-foreground",
                ].join(" ")}
              />
              {agent.status}
            </span>
          </div>

          <Button variant="ghost" size="icon" className="size-8">
            {agent.status === "Active" ? (
              <Settings className="size-4" />
            ) : (
              <Play className="size-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

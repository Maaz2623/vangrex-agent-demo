"use client";

import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  ReactFlowProvider,
  Handle,
  Position,
  type Edge,
  type Node,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { Bot, Database, Globe, Plus, Sparkles, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";

const initialNodes: Node[] = [
  {
    id: "agent",
    type: "agent",
    position: { x: 500, y: 200 },
    data: {
      label: "Research Agent",
      description: "Main agent",
      icon: Bot,
    },
  },
  {
    id: "researcher",
    type: "subAgent",
    position: { x: 150, y: 100 },
    data: {
      label: "Researcher",
      description: "Finds and analyzes information",
      icon: Sparkles,
    },
  },
  {
    id: "browser",
    type: "tool",
    position: { x: 150, y: 350 },
    data: {
      label: "Web Search",
      description: "Search the web",
      icon: Globe,
    },
  },
  {
    id: "knowledge",
    type: "tool",
    position: { x: 850, y: 350 },
    data: {
      label: "Knowledge Base",
      description: "Agent knowledge",
      icon: Database,
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: "agent-researcher",
    source: "agent",
    target: "researcher",
    animated: true,
  },
  {
    id: "agent-browser",
    source: "agent",
    target: "browser",
    animated: true,
  },
  {
    id: "agent-knowledge",
    source: "agent",
    target: "knowledge",
    animated: true,
  },
];

const AgentNode = ({ data }: { data: any }) => {
  const Icon = data.icon;

  return (
    <NodeContainer className="border-foreground/30">
      <Handle type="target" position={Position.Left} />

      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
          <Icon className="size-5" />
        </div>

        <div>
          <p className="text-sm font-medium">{data.label}</p>
          <p className="text-xs text-muted-foreground">{data.description}</p>
        </div>
      </div>

      <Handle type="source" position={Position.Right} />
    </NodeContainer>
  );
};

const SubAgentNode = ({ data }: { data: any }) => {
  const Icon = data.icon;

  return (
    <NodeContainer>
      <Handle type="target" position={Position.Right} />

      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-lg bg-muted">
          <Icon className="size-4" />
        </div>

        <div>
          <p className="text-sm font-medium">{data.label}</p>
          <p className="text-xs text-muted-foreground">{data.description}</p>
        </div>
      </div>
    </NodeContainer>
  );
};

const ToolNode = ({ data }: { data: any }) => {
  const Icon = data.icon;

  return (
    <NodeContainer>
      <Handle type="target" position={Position.Right} />

      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-lg bg-muted">
          <Icon className="size-4" />
        </div>

        <div>
          <p className="text-sm font-medium">{data.label}</p>
          <p className="text-xs text-muted-foreground">{data.description}</p>
        </div>
      </div>
    </NodeContainer>
  );
};

const nodeTypes = {
  agent: AgentNode,
  subAgent: SubAgentNode,
  tool: ToolNode,
};

export const AgentBuilder = () => {
  return (
    <ReactFlowProvider>
      <div className="flex h-[calc(100vh-4rem)] min-h-[700px] flex-col">
        <BuilderHeader />

        <div className="relative flex min-h-0 flex-1">
          <div className="flex-1">
            <ReactFlow
              nodes={initialNodes}
              edges={initialEdges}
              nodeTypes={nodeTypes}
              fitView
              proOptions={{ hideAttribution: true }}
            >
              <Background gap={20} size={1} />
              <Controls />
              <MiniMap />
            </ReactFlow>
          </div>

          <BuilderPanel />
        </div>
      </div>
    </ReactFlowProvider>
  );
};

const BuilderHeader = () => {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b bg-background px-6">
      <div>
        <h1 className="font-semibold">Create agent</h1>
        <p className="text-xs text-muted-foreground">
          Define your agent and connect its capabilities.
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline">Save draft</Button>
        <Button>Deploy agent</Button>
      </div>
    </header>
  );
};

const BuilderPanel = () => {
  return (
    <aside className="hidden w-72 shrink-0 border-l bg-background lg:block">
      <div className="border-b p-5">
        <h2 className="text-sm font-medium">Agent</h2>
        <p className="mt-1 text-xs text-muted-foreground">
          Configure the selected agent.
        </p>
      </div>

      <div className="space-y-6 p-5">
        <div>
          <label className="text-xs font-medium">Name</label>
          <div className="mt-2 rounded-md border px-3 py-2 text-sm">
            Research Agent
          </div>
        </div>

        <div>
          <label className="text-xs font-medium">Instructions</label>
          <div className="mt-2 min-h-24 rounded-md border p-3 text-sm text-muted-foreground">
            Research topics and provide accurate summaries using available tools
            and sub-agents.
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium">Components</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Add capabilities to your agent.
              </p>
            </div>

            <Button variant="outline" size="icon" className="size-8">
              <Plus className="size-4" />
            </Button>
          </div>

          <div className="mt-3 space-y-2">
            <ComponentItem icon={Sparkles} label="Sub-agent" count={1} />

            <ComponentItem icon={Wrench} label="Tools" count={1} />

            <ComponentItem icon={Database} label="Knowledge" count={1} />
          </div>
        </div>
      </div>
    </aside>
  );
};

const ComponentItem = ({
  icon: Icon,
  label,
  count,
}: {
  icon: typeof Bot;
  label: string;
  count: number;
}) => {
  return (
    <div className="flex items-center justify-between rounded-lg border p-3">
      <div className="flex items-center gap-3">
        <Icon className="size-4 text-muted-foreground" />
        <span className="text-sm">{label}</span>
      </div>

      <span className="text-xs text-muted-foreground">{count}</span>
    </div>
  );
};

const NodeContainer = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`min-w-56 rounded-xl border bg-card p-4 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

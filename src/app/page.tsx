import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
            AI Agent Deployment Platform
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
            Deploy AI agents that
            <span className="block text-muted-foreground">
              keep working for you.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Build, deploy, and manage autonomous AI agents with persistent
            state, tools, knowledge, and real-time execution.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/auth">Get started</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              <Link href="/dashboard">View dashboard</Link>
            </Button>
          </div>
        </div>

        <div className="mt-20 grid w-full max-w-4xl gap-4 text-left sm:grid-cols-3">
          <Feature
            title="Deploy"
            description="Turn an agent configuration into a persistent deployment."
          />

          <Feature
            title="Automate"
            description="React to webhooks, schedules, and external events."
          />

          <Feature
            title="Observe"
            description="Watch agent runs, tools, and execution state in real time."
          />
        </div>
      </section>
    </main>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Vangrex
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>

          <Link
            href="#how-it-works"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            How it works
          </Link>

          <Link
            href="#pricing"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link href="/auth">Sign in</Link>
          </Button>

          <Button asChild size="sm">
            <Link href="/auth">Get started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border bg-card p-6">
      <h2 className="font-medium">{title}</h2>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

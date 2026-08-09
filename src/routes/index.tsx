import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Code2, FileText, Github, GitPullRequest, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Refril — Review Referral Candidates" },
      { name: "description", content: "Review referral candidates with AI insights, coding profiles, and referral risk in under two minutes." },
      { property: "og:title", content: "Refril — Review Referral Candidates" },
      { property: "og:description", content: "Review referral candidates with AI insights, coding profiles, and referral risk in under two minutes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Logo() {
  return (
    <a href="#top" className="inline-flex items-center gap-2 font-display text-base font-semibold text-foreground">
      <span className="grid size-7 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary">
        <GitPullRequest className="size-4" />
      </span>
      Refril
    </a>
  );
}

function RiskBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-success/25 bg-success/10 px-2.5 py-1 text-xs font-medium text-success">
      <span className="size-1.5 rounded-full bg-success" />
      Low referral risk
    </span>
  );
}

function CandidateProfile() {
  return (
    <article className="overflow-hidden rounded-lg border border-border bg-card shadow-product">
      <header className="flex items-center justify-between border-b border-border bg-surface-subtle px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="size-2 rounded-full bg-success" />
          Candidate profile
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">REQ-284</span>
      </header>
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-md bg-accent text-sm font-semibold text-accent-foreground">
              HL
            </div>
            <div>
              <h3 className="text-base font-semibold">Het Lathiya</h3>
              <p className="mt-0.5 text-xs text-muted-foreground">Backend Engineer · Bengaluru</p>
            </div>
          </div>
          <div className="text-right">
            <div className="font-display text-3xl font-semibold text-primary">91%</div>
            <div className="text-[11px] text-muted-foreground">role match</div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <RiskBadge />
          <span className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
            Strong backend
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 divide-x divide-border rounded-md border border-border bg-surface-subtle py-3 text-center">
          <div>
            <strong className="block text-sm">1111</strong>
            <span className="text-[11px] text-muted-foreground">LeetCode</span>
          </div>
          <div>
            <strong className="block text-sm">Expert</strong>
            <span className="text-[11px] text-muted-foreground">Codeforces</span>
          </div>
          <div>
            <strong className="block text-sm">167</strong>
            <span className="text-[11px] text-muted-foreground">Repositories</span>
          </div>
        </div>

        <div className="mt-5 rounded-md border border-primary/20 bg-primary/5 p-4">
          <div className="flex items-center gap-2 text-xs font-medium text-primary">
            <Sparkles className="size-3.5" />
            AI summary
          </div>
          <p className="mt-2 text-sm leading-6 text-secondary-foreground">
            Strong DSA fundamentals, credible project depth, and consistently active GitHub contributions. Experience aligns well with backend platform work.
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Github className="size-4" />
            <Code2 className="size-4" />
            <FileText className="size-4" />
          </div>
          <Button variant="product" size="sm">
            Refer candidate <ArrowRight />
          </Button>
        </div>
      </div>
    </article>
  );
}

function Index() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />
      </nav>

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pt-20">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
            Review candidates,
            <br />
            <span className="text-muted-foreground">not random resumes.</span>
          </h1>
          <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
            Every referral request comes with AI insights, technical signals, and a clear referral risk score—so you can decide in under two minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="hero" size="lg" asChild>
              <a href="#profile">
                See a candidate <ArrowRight />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#how">How it works</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="profile" className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
        <CandidateProfile />
      </section>

      <section id="how" className="border-t border-border bg-surface-subtle">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { step: "01", title: "Upload", body: "Candidate shares their resume and public profiles." },
              { step: "02", title: "Analyze", body: "AI pulls technical signals and builds a risk score." },
              { step: "03", title: "Decide", body: "You review once, then refer with confidence." },
            ].map(({ step, title, body }) => (
              <div key={step} className="rounded-lg border border-border bg-card p-6">
                <span className="font-mono text-xs text-primary">{step}</span>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Logo />
          <span className="text-xs text-muted-foreground">© 2026 Refril</span>
        </div>
      </footer>
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Check,
  Code2,
  FileText,
  Github,
  GitPullRequest,
  Send,
  ShieldCheck,
  Sparkles,
  Upload,
} from "lucide-react";
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

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
      <span className="h-px w-6 bg-primary/60" />
      {children}
    </span>
  );
}

function Index() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Logo />
          <div className="hidden items-center gap-8 sm:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="sm" asChild>
              <a href="#waitlist">Join waitlist</a>
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-5 pt-16 sm:px-8">
        <div className="product-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-3xl text-center">
          <SectionLabel>Referral intelligence</SectionLabel>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Review every referral
            <br />
            <span className="text-muted-foreground">with confidence.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-balance text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Refril turns resumes and public profiles into a single, shareable candidate brief—so you can decide in under two minutes.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="hero" size="lg" asChild>
              <a href="#product">
                See a candidate <ArrowRight />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#how">How it works</a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["No spreadsheets", "No back-and-forth", "Just signal"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <Check className="size-4 text-success" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="product" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>What a review looks like</SectionLabel>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            One profile. Everything that matters.
          </h2>
          <p className="mt-4 text-balance text-base leading-7 text-muted-foreground sm:text-lg">
            No more hunting across GitHub, LeetCode, and resumes. Refril surfaces the signals you actually need.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <CandidateProfile />
        </div>
      </section>

      <section className="border-t border-border bg-surface-subtle">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Why Refril</SectionLabel>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Hire from your network without the noise.
            </h2>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Brain,
                title: "AI summaries",
                body: "We distill code, contributions, and experience into a concise signal you can trust.",
              },
              {
                icon: BarChart3,
                title: "Technical signals",
                body: "LeetCode, Codeforces, GitHub, and project depth—visible in a single glance.",
              },
              {
                icon: ShieldCheck,
                title: "Referral risk",
                body: "A clear risk score helps you protect your reputation before you refer.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/30"
              >
                <div className="grid size-11 place-items-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            From link to decision in minutes.
          </h2>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {[
            {
              step: "01",
              icon: Upload,
              title: "Upload",
              body: "The candidate shares their resume and public profiles in one place.",
            },
            {
              step: "02",
              icon: Sparkles,
              title: "Analyze",
              body: "AI pulls technical signals, builds a risk score, and writes a summary.",
            },
            {
              step: "03",
              icon: Send,
              title: "Decide",
              body: "You review once, then refer—or pass—with full context.",
            },
          ].map(({ step, icon: Icon, title, body }) => (
            <div key={step} className="relative">
              <div className="flex items-center gap-4">
                <span className="font-mono text-2xl font-semibold text-primary">{step}</span>
                <div className="grid size-10 place-items-center rounded-full border border-border bg-surface-raised text-foreground">
                  <Icon className="size-4" />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="waitlist" className="border-t border-border bg-surface-subtle">
        <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
          <SectionLabel>Get early access</SectionLabel>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Stop reviewing resumes in the dark.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-balance text-base leading-7 text-muted-foreground sm:text-lg">
            Join the waitlist and be the first to review referrals the way you review code—with signal, not noise.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="hero" size="lg" asChild>
              <a href="#top">
                Join the waitlist <ArrowRight />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:hello@refril.app">Contact us</a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
          <Logo />
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#top" className="transition-colors hover:text-foreground">
              Product
            </a>
            <a href="#how" className="transition-colors hover:text-foreground">
              How it works
            </a>
            <a href="mailto:hello@refril.app" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </div>
          <span className="text-xs text-muted-foreground">© 2026 Refril</span>
        </div>
      </footer>
    </main>
  );
}

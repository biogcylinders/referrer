import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Brain, Check, Code2, FileSearch, GitPullRequest, Link2, ShieldCheck, Sparkles, Target, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Refril — Review Candidates, Not Resumes" },
    { name: "description", content: "Review referral candidates with AI insights, technical signals, company match, and referral risk in one place." },
    { property: "og:title", content: "Refril — Review Candidates, Not Resumes" },
    { property: "og:description", content: "Know why a candidate matches and refer with confidence." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Logo() {
  return <a href="#top" className="inline-flex items-center gap-2 font-display text-base font-semibold text-foreground"><span className="grid size-7 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary"><GitPullRequest className="size-4" /></span>Refril</a>;
}

function CandidateCard() {
  const observations = [
    { label: "Strong DSA", positive: true },
    { label: "Active GitHub", positive: true },
    { label: "Backend projects", positive: true },
    { label: "Limited production experience", positive: false },
  ];
  return <article className="mx-auto w-full max-w-md overflow-hidden rounded-lg border border-line-bright bg-card shadow-product">
    <header className="flex items-center justify-between border-b border-border bg-surface-subtle px-5 py-4"><div><p className="font-mono text-[10px] text-muted-foreground">CANDIDATE PROFILE</p><h2 className="mt-1 text-base font-semibold">Het Lathiya</h2></div><span className="font-mono text-[10px] text-muted-foreground">REQ-284</span></header>
    <div className="p-5 sm:p-6">
      <div className="grid grid-cols-2 divide-x divide-border border-b border-border pb-5"><div><strong className="font-display text-3xl font-semibold text-primary">91%</strong><p className="mt-1 text-xs text-muted-foreground">Company match</p></div><div className="pl-5"><div className="inline-flex items-center gap-2 text-sm font-medium text-success"><span className="size-2 rounded-full bg-success" /> Low risk</div><p className="mt-2 text-xs text-muted-foreground">Safe to review</p></div></div>
      <dl className="grid grid-cols-2 gap-x-5 gap-y-4 border-b border-border py-5 text-sm"><div><dt className="text-xs text-muted-foreground">LeetCode</dt><dd className="mt-1 font-semibold">1111</dd></div><div><dt className="text-xs text-muted-foreground">Codeforces</dt><dd className="mt-1 font-semibold">Expert</dd></div><div><dt className="text-xs text-muted-foreground">GitHub activity</dt><dd className="mt-1 font-semibold">1,284 contributions</dd></div><div><dt className="text-xs text-muted-foreground">Backend experience</dt><dd className="mt-1 font-semibold">11 months</dd></div></dl>
      <div className="py-5"><div className="mb-3 flex items-center gap-2 text-xs font-medium text-primary"><Sparkles className="size-3.5" /> AI summary</div><ul className="space-y-2.5">{observations.map((item) => <li key={item.label} className="flex items-center gap-2.5 text-sm text-secondary-foreground">{item.positive ? <Check className="size-4 text-success" /> : <TriangleAlert className="size-4 text-destructive" />}{item.label}</li>)}</ul></div>
      <Button variant="product" className="w-full">Refer candidate <ArrowRight /></Button>
    </div>
  </article>;
}

const benefits = [
  { icon: FileSearch, title: "Resume analysis", body: "Skip reading resumes first.", details: ["Experience", "Projects", "Skills", "Education"] },
  { icon: Code2, title: "Coding profile", body: "See real coding activity.", details: ["LeetCode", "Codeforces", "GitHub"] },
  { icon: Brain, title: "AI summary", body: "Know what stands out immediately.", details: ["Strengths", "Weaknesses", "Hiring observations"] },
  { icon: Target, title: "Company match", body: "Know why this candidate matches.", details: ["Role fit", "Relevant skills", "Experience"] },
  { icon: ShieldCheck, title: "Referral risk", body: "Refer with your reputation intact.", details: ["Risk flags", "Missing signals", "Confidence"] },
  { icon: Link2, title: "Everything in one place", body: "Make the decision without tab hopping.", details: ["Resume", "GitHub", "LinkedIn", "Projects"] },
];

function Index() {
  return <main id="top" className="min-h-screen overflow-hidden bg-background text-foreground">
    <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between border-x border-border px-5 sm:px-8"><Logo /><a href="#included" className="text-sm text-muted-foreground transition-colors hover:text-foreground">See what’s included</a></nav>
    <section className="product-grid border-y border-border"><div className="mx-auto grid max-w-7xl lg:grid-cols-[1.05fr_.95fr]">
      <div className="flex min-h-[610px] flex-col justify-center border-x border-border px-6 py-20 sm:px-10 lg:border-r-0 lg:px-14"><div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground"><Sparkles className="size-3.5 text-primary" /> Referral insights for engineers</div><h1 className="max-w-xl text-5xl font-semibold leading-[1.04] sm:text-6xl">Review candidates,<br /><span className="text-muted-foreground">not resumes.</span></h1><p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">Know why a candidate matches, see the signals that matter, and refer with confidence—in under two minutes.</p><div className="mt-8"><Button variant="hero" size="lg" asChild><a href="#included">See how it works <ArrowDown /></a></Button></div></div>
      <div className="relative flex min-h-[610px] items-center border-x border-t border-border bg-surface-subtle p-5 sm:p-10 lg:border-t-0"><div className="absolute left-8 top-7 flex items-center gap-2 font-mono text-[10px] text-muted-foreground"><span className="size-2 rounded-full bg-primary" /> DECISION VIEW</div><CandidateCard /></div>
    </div></section>

    <section id="included" className="border-b border-border py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="mb-12 max-w-2xl"><p className="text-sm font-medium text-primary">EVERY REFERRAL REQUEST INCLUDES</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Everything you need. Nothing you don’t.</h2></div><div className="grid overflow-hidden rounded-lg border border-border bg-card md:grid-cols-2 lg:grid-cols-3">{benefits.map(({ icon: Icon, title, body, details }, index) => <article key={title} className={`min-h-72 p-7 sm:p-8 ${index < 3 ? "border-b border-border" : ""} ${index % 2 === 0 ? "md:border-r" : ""} ${index % 3 !== 2 ? "lg:border-r" : "lg:border-r-0"}`}><Icon className="size-5 text-primary" /><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p><ul className="mt-6 flex flex-wrap gap-2">{details.map((detail) => <li key={detail} className="rounded-md border border-border bg-surface-subtle px-2.5 py-1 text-xs text-secondary-foreground">{detail}</li>)}</ul></article>)}</div></div></section>

    <section className="border-b border-border py-24 sm:py-32"><div className="mx-auto max-w-6xl px-5 sm:px-8"><div className="mb-12 max-w-2xl"><p className="text-sm font-medium text-primary">THE DIFFERENCE</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">One profile. Five data sources.</h2></div><div className="grid overflow-hidden rounded-lg border border-border bg-card md:grid-cols-2">
      <div className="border-b border-border p-7 md:border-b-0 md:border-r sm:p-10"><p className="mb-8 text-xs font-medium text-muted-foreground">BEFORE REFRIL</p>{["Resume", "GitHub", "LinkedIn", "LeetCode", "Codeforces", "Projects", "Decision"].map((item, index, list) => <div key={item} className="flex flex-col"><div className="flex h-10 items-center justify-between border-b border-border text-sm"><span>{item}</span><span className="font-mono text-[10px] text-muted-foreground">0{index + 1}</span></div>{index < list.length - 1 && <ArrowDown className="my-2 size-3 self-center text-muted-foreground" />}</div>)}</div>
      <div className="bg-surface-subtle p-7 sm:p-10"><p className="mb-8 text-xs font-medium text-primary">WITH REFRIL</p>{["One profile", "AI summary", "Company match", "Referral risk", "Refer"].map((item, index, list) => <div key={item} className="flex flex-col"><div className="flex h-14 items-center gap-3 rounded-md border border-border bg-card px-4 text-sm font-medium"><Check className="size-4 text-primary" />{item}</div>{index < list.length - 1 && <ArrowDown className="my-2 size-3 self-center text-primary" />}</div>)}</div>
    </div></div></section>

    <section className="border-b border-border"><div className="mx-auto grid max-w-7xl border-x border-border md:grid-cols-3">{[
      { kicker: "MATCH", title: "Know why a candidate is recommended.", body: "See the role, skill, and experience signals behind every score." },
      { kicker: "SIGNALS", title: "See real coding activity.", body: "Understand technical depth without opening five different profiles." },
      { kicker: "RISK", title: "Refer with confidence.", body: "See the strengths and gaps before putting your name behind someone." },
    ].map((item, index) => <article key={item.kicker} className={`min-h-72 p-8 sm:p-10 ${index < 2 ? "border-b border-border md:border-b-0 md:border-r" : ""}`}><p className="font-mono text-xs text-primary">{item.kicker}</p><h2 className="mt-12 text-2xl font-semibold">{item.title}</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">{item.body}</p></article>)}</div></section>

    <footer className="product-grid"><div className="mx-auto max-w-7xl border-x border-border px-6 py-24 text-center"><ShieldCheck className="mx-auto size-6 text-primary" /><h2 className="mt-6 text-4xl font-semibold sm:text-5xl">Your referral is valuable.<br /><span className="text-muted-foreground">Use it wisely.</span></h2><div className="mt-8"><Button variant="hero" size="lg">Become a Referrer <ArrowRight /></Button></div><div className="mt-24 flex items-center justify-between border-t border-border pt-6"><Logo /><span className="text-xs text-muted-foreground">© 2026 Refril</span></div></div></footer>
  </main>;
}
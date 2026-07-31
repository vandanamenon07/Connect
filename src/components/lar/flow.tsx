import { useState } from "react";

export type Role = "student" | "teacher";

/* ---------------- shared primitives ---------------- */

export function NBButton({
  children,
  onClick,
  tone = "lavender",
  className = "",
  type = "button",
  full,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  tone?: "lavender" | "yellow" | "peach" | "white";
  className?: string;
  type?: "button" | "submit";
  full?: boolean;
}) {
  const tones: Record<string, string> = {
    lavender: "bg-lavender text-primary-foreground",
    yellow: "bg-yellow text-foreground",
    peach: "bg-peach text-foreground",
    white: "bg-card text-foreground",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      className={`nb nb-press px-5 py-3 font-bold ${tones[tone]} ${full ? "w-full" : ""} ${className}`}
    >
      {children}
    </button>
  );
}

export function Badge({
  children,
  tone = "yellow",
}: {
  children: React.ReactNode;
  tone?: "yellow" | "peach" | "lavender" | "white";
}) {
  const tones: Record<string, string> = {
    yellow: "bg-yellow text-foreground",
    peach: "bg-peach text-foreground",
    lavender: "bg-lavender text-primary-foreground",
    white: "bg-card text-foreground",
  };
  return <span className={`nb-badge ${tones[tone]}`}>{children}</span>;
}

export function Modal({
  open,
  onClose,
  title,
  tone = "yellow",
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  tone?: "yellow" | "peach" | "lavender";
  children: React.ReactNode;
}) {
  if (!open) return null;
  const tones: Record<string, string> = {
    yellow: "bg-yellow",
    peach: "bg-peach",
    lavender: "bg-lavender text-primary-foreground",
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "color-mix(in oklab, black 45%, transparent)" }}
      onClick={onClose}
    >
      <div
        className="nb-thick animate-in zoom-in-95 fade-in flex max-h-[86vh] w-full max-w-2xl flex-col bg-card duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`flex items-center justify-between border-b-4 border-ink px-6 py-4 ${tones[tone]}`}>
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="nb nb-press h-9 w-9 bg-card text-lg leading-none font-bold text-foreground"
          >
            ×
          </button>
        </div>
        <div className="overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  );
}

/* ---------------- 1. splash ---------------- */

export function Splash({ onEnter }: { onEnter: () => void }) {
  return (
    <main className="grid-bg flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Badge tone="peach">Est. for every classroom</Badge>
      <h1 className="mt-8 text-6xl leading-none font-bold tracking-tight sm:text-8xl">
        LAR
        <span className="ml-3 inline-block rotate-[-2deg] nb bg-lavender px-4 py-1 text-primary-foreground">
          Connect
        </span>
      </h1>
      <p className="mt-6 max-w-md text-muted-foreground">
        One bridge between rural and urban learning.
      </p>
      <div className="mt-10">
        <NBButton onClick={onEnter} tone="yellow" className="text-lg">
          Enter LAR Connect →
        </NBButton>
      </div>
    </main>
  );
}

/* ---------------- 2. sign in ---------------- */

export function SignIn({ onSignIn }: { onSignIn: (email: string) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="grid-bg flex min-h-screen items-center justify-center px-6 py-12">
      <div className="nb-thick w-full max-w-md bg-card p-8">
        <Badge tone="lavender">Welcome back</Badge>
        <h1 className="mt-5 text-4xl font-bold">Sign in</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Continue to your LAR Connect workspace.
        </p>

        <form
          className="mt-7 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            onSignIn(email || "learner@larconnect.org");
          }}
        >
          <div>
            <label className="font-mono text-xs font-bold uppercase" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@school.edu"
              className="nb mt-2 w-full bg-background px-4 py-3 outline-none focus:bg-yellow"
            />
          </div>
          <div>
            <label className="font-mono text-xs font-bold uppercase" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="nb mt-2 w-full bg-background px-4 py-3 outline-none focus:bg-yellow"
            />
          </div>
          <NBButton type="submit" tone="lavender" full>
            Sign in
          </NBButton>
        </form>

        <div className="my-5 flex items-center gap-3">
          <div className="h-[3px] flex-1 bg-ink" />
          <span className="font-mono text-xs font-bold">OR</span>
          <div className="h-[3px] flex-1 bg-ink" />
        </div>

        <NBButton tone="white" full onClick={() => onSignIn("google.user@gmail.com")}>
          <span className="inline-flex items-center justify-center gap-2">
            <span className="font-display text-lg font-bold text-lavender">G</span>
            Sign in with Google
          </span>
        </NBButton>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          New here? Signing in creates your account.
        </p>
      </div>
    </main>
  );
}

/* ---------------- 3. onboarding ---------------- */

export function Onboarding({ onPick }: { onPick: (role: Role) => void }) {
  const [role, setRole] = useState<Role | null>(null);
  const [name, setName] = useState("");

  const card = (value: Role, title: string, blurb: string, tone: string) => (
    <button
      key={value}
      onClick={() => setRole(value)}
      className={`nb nb-press flex-1 p-6 text-left ${tone} ${
        role === value ? "outline-4 outline-offset-4 outline-lavender" : ""
      }`}
    >
      <span className="nb-badge bg-card">{role === value ? "Selected" : "Choose"}</span>
      <h3 className="mt-4 text-2xl font-bold">{title}</h3>
      <p className="mt-1 text-sm">{blurb}</p>
    </button>
  );

  return (
    <main className="grid-bg flex min-h-screen items-center justify-center px-6 py-12">
      <div className="nb-thick w-full max-w-2xl bg-card p-8">
        <Badge tone="peach">Step 2 of 2</Badge>
        <h1 className="mt-5 text-4xl font-bold">Tell us about yourself</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          We tailor your dashboard to how you use LAR Connect.
        </p>

        <div className="mt-6">
          <label className="font-mono text-xs font-bold uppercase" htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Aarav Sharma"
            className="nb mt-2 w-full bg-background px-4 py-3 outline-none focus:bg-yellow"
          />
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          {card("student", "I am a Student", "Learn, join live classes, track progress.", "bg-yellow")}
          {card("teacher", "I am a Teacher", "Mentor learners, host sessions, share material.", "bg-peach")}
        </div>

        <div className="mt-8">
          <NBButton
            tone="lavender"
            full
            onClick={() => role && onPick(role)}
            className={role ? "" : "pointer-events-none opacity-40"}
          >
            Continue to dashboard →
          </NBButton>
        </div>
      </div>
    </main>
  );
}

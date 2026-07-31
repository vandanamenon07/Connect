import { useState } from "react";
import { Badge, NBButton, type Role } from "./flow";

type MenuKey =
  | "dashboard"
  | "classes"
  | "mentors"
  | "resources"
  | "upload"
  | "credits"
  | "language"
  | "tutor"
  | "leaderboard"
  | "offline"
  | "community"
  | "impact"
  | "profile";

const MENU: { key: MenuKey; label: string }[] = [
  { key: "dashboard", label: "Home" },
  { key: "classes", label: "Live Classes" },
  { key: "mentors", label: "Mentors" },
  { key: "resources", label: "Resources" },
  { key: "upload", label: "Upload Content" },
  { key: "credits", label: "LAR Credits" },
  { key: "language", label: "Language" },
  { key: "tutor", label: "AI Tutor" },
  { key: "leaderboard", label: "Leaderboard" },
  { key: "offline", label: "Offline Downloads" },
  { key: "community", label: "Community" },
  { key: "impact", label: "Impact" },
  { key: "profile", label: "Profile" },
];

const TITLES: Record<MenuKey, string> = {
  dashboard: "Home",
  classes: "Live Classes",
  mentors: "Mentor Network",
  resources: "Resource Library",
  upload: "Upload Content",
  credits: "LAR Credits",
  language: "Language",
  tutor: "AI Tutor Session",
  leaderboard: "Leaderboard",
  offline: "Offline Downloads",
  community: "Community Wall",
  impact: "Our Impact",
  profile: "Your Profile",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="nb-thick bg-card p-5 sm:p-7">
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Tile({
  tone,
  eyebrow,
  title,
  body,
  onClick,
}: {
  tone: string;
  eyebrow: string;
  title: string;
  body: string;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className={`nb nb-press p-5 text-left ${tone}`}>
      <span className="nb-badge bg-card">{eyebrow}</span>
      <h3 className="mt-3 text-xl font-bold sm:text-2xl">{title}</h3>
      <p className="mt-1 text-sm">{body}</p>
      <span className="mt-4 inline-block font-mono text-xs font-bold uppercase">Open →</span>
    </button>
  );
}

function List({ items }: { items: { title: string; meta: string; tone: string; action?: string }[] }) {
  return (
    <ul className="space-y-3">
      {items.map((i) => (
        <li
          key={i.title}
          className={`nb grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 p-4 ${i.tone}`}
        >
          <div className="min-w-0">
            <p className="font-bold break-words">{i.title}</p>
            <p className="font-mono text-xs break-words uppercase">{i.meta}</p>
          </div>
          <span className="nb-badge shrink-0 bg-card">{i.action ?? "Join"}</span>
        </li>
      ))}
    </ul>
  );
}

function LanguagePanel() {
  const [language, setLanguage] = useState("English");
  const options = [
    "English",
    "Hindi",
    "Malayalam",
    "Tamil",
    "Telugu",
    "Kannada",
    "Bengali",
    "Marathi",
    "Gujarati",
    "Punjabi",
    "Odia",
    "Urdu",
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Choose your language</h3>
      <p className="text-sm text-muted-foreground">
        Pick a language that feels familiar for your daily learning flow.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => {
          const isSelected = language === option;
          return (
            <button
              key={option}
              onClick={() => setLanguage(option)}
              className={`nb nb-press px-4 py-3 text-left font-bold ${
                isSelected ? "bg-lavender text-primary-foreground" : "bg-card"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
      <div className="nb bg-yellow p-4">
        <p className="font-mono text-[10px] font-bold uppercase">Active language</p>
        <p className="mt-1 font-bold">{language}</p>
      </div>
    </div>
  );
}

function StudentLeaderboard() {
  const students = [
    { name: "Aarav Sharma", school: "Kochi Rural School", credits: 1480 },
    { name: "Nisha Menon", school: "Thiruvananthapuram High School", credits: 1420 },
    { name: "Rohan Bhat", school: "Mysuru Learning Centre", credits: 1385 },
    { name: "Meera Iyer", school: "Bengaluru Model School", credits: 1330 },
    { name: "Karthik Rao", school: "Vijayawada Community School", credits: 1280 },
    { name: "Sana Khan", school: "Ahmedabad Girls Academy", credits: 1240 },
    { name: "Dev Joshi", school: "Pune Tech School", credits: 1195 },
    { name: "Ananya Das", school: "Kolkata Bridge School", credits: 1160 },
  ];

  return (
    <div className="space-y-3">
      {students.map((student, index) => (
        <div key={student.name} className="nb grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 bg-card p-4">
          <div className="nb flex h-10 w-10 items-center justify-center bg-lavender font-bold text-primary-foreground">
            {index + 1}
          </div>
          <div className="min-w-0">
            <p className="font-bold">{student.name}</p>
            <p className="font-mono text-xs uppercase">{student.school}</p>
          </div>
          <div className="text-right">
            <p className="font-bold">{student.credits} pts</p>
            <p className="font-mono text-[10px] uppercase">credits</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function TeacherLeaderboard() {
  const teachers = [
    { name: "Mr. Joseph Peter", district: "Kottayam", score: 984 },
    { name: "Ms. Rekha Nair", district: "Kozhikode", score: 952 },
    { name: "Mr. Arjun Shah", district: "Surat", score: 931 },
    { name: "Ms. Pooja Verma", district: "Jaipur", score: 894 },
    { name: "Mr. Suresh Reddy", district: "Hyderabad", score: 876 },
    { name: "Ms. Tanvi Bhosale", district: "Pune", score: 851 },
    { name: "Mr. Aditya Chatterjee", district: "Kolkata", score: 833 },
    { name: "Ms. Fatima Begum", district: "Lucknow", score: 809 },
  ];

  return (
    <div className="space-y-3">
      {teachers.map((teacher, index) => {
        const medal = index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : null;
        const badgeTone = index === 0 ? "yellow" : index === 1 ? "white" : index === 2 ? "peach" : undefined;
        return (
          <div key={teacher.name} className="nb grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 bg-card p-4">
            <div className="nb flex h-10 w-10 items-center justify-center bg-yellow font-bold">
              {index + 1}
            </div>
            <div className="min-w-0">
              <p className="font-bold">{teacher.name}</p>
              <p className="font-mono text-xs uppercase">{teacher.district}</p>
            </div>
            <div className="flex items-center gap-2 text-right">
              {medal && badgeTone ? <Badge tone={badgeTone}>{medal}</Badge> : null}
              <div>
                <p className="font-bold">{teacher.score} pts</p>
                <p className="font-mono text-[10px] uppercase">impact</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------------- upload ---------------- */

type Upload = { title: string; kind: string; note: string };

function UploadPanel({ isStudent }: { isStudent: boolean }) {
  const [title, setTitle] = useState("");
  const [kind, setKind] = useState(isStudent ? "Project video" : "Lesson video");
  const [note, setNote] = useState("");
  const [file, setFile] = useState("");
  const [items, setItems] = useState<Upload[]>(
    isStudent
      ? [{ title: "My science fair model", kind: "Project video", note: "Grade 9 · 3 min" }]
      : [{ title: "Trigonometry made easy", kind: "Lesson video", note: "Grade 10 · 12 min" }],
  );
  const [saved, setSaved] = useState(false);

  const kinds = isStudent
    ? ["Project video", "Doubt clip", "Study notes"]
    : ["Lesson video", "Worksheet", "Exam prep series"];

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        {isStudent
          ? "Share your project videos, doubt clips and notes with the LAR community."
          : "Publish lesson videos and educational material for learners across districts."}
      </p>

      <form
        className="nb space-y-4 bg-background p-4 sm:p-5"
        onSubmit={(e) => {
          e.preventDefault();
          if (!title.trim()) return;
          setItems((p) => [{ title, kind, note: note || file || "Just uploaded" }, ...p]);
          setTitle("");
          setNote("");
          setFile("");
          setSaved(true);
        }}
      >
        <div>
          <label className="font-mono text-xs font-bold uppercase" htmlFor="up-title">
            Content title
          </label>
          <input
            id="up-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Photosynthesis in 5 minutes"
            className="nb mt-2 w-full bg-card px-4 py-3 outline-none focus:bg-yellow"
          />
        </div>
        <div>
          <label className="font-mono text-xs font-bold uppercase" htmlFor="up-kind">
            Type
          </label>
          <select
            id="up-kind"
            value={kind}
            onChange={(e) => setKind(e.target.value)}
            className="nb mt-2 w-full bg-card px-4 py-3 outline-none focus:bg-yellow"
          >
            {kinds.map((k) => (
              <option key={k}>{k}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="font-mono text-xs font-bold uppercase" htmlFor="up-file">
            Video / file
          </label>
          <input
            id="up-file"
            type="file"
            onChange={(e) => setFile(e.target.files?.[0]?.name ?? "")}
            className="nb mt-2 w-full bg-card px-4 py-3 text-sm outline-none"
          />
        </div>
        <div>
          <label className="font-mono text-xs font-bold uppercase" htmlFor="up-note">
            Description
          </label>
          <textarea
            id="up-note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            placeholder="Who is this for, and what will they learn?"
            className="nb mt-2 w-full bg-card px-4 py-3 outline-none focus:bg-yellow"
          />
        </div>
        <NBButton type="submit" tone="lavender" full>
          Upload Content
        </NBButton>
        {saved && (
          <p className="font-mono text-xs font-bold uppercase">Uploaded · pending review</p>
        )}
      </form>

      <div>
        <h3 className="text-xl font-bold">Your uploads</h3>
        <div className="mt-3">
          <List
            items={items.map((u, idx) => ({
              title: u.title,
              meta: `${u.kind} · ${u.note}`,
              tone: idx % 2 === 0 ? "bg-yellow" : "bg-peach",
              action: "View",
            }))}
          />
        </div>
      </div>
    </div>
  );
}

/* ---------------- credits ---------------- */

const EARNINGS = [
  { title: "Attended Physics live class", meta: "+20 credits · Today", tone: "bg-yellow" },
  { title: "Uploaded a project video", meta: "+35 credits · Yesterday", tone: "bg-peach" },
  { title: "7-day learning streak", meta: "+50 credits · This week", tone: "bg-card" },
];

const LOCKED = [
  { name: "Advanced Maths Masterclass", cost: 120 },
  { name: "IIT Foundation Mock Tests", cost: 200 },
  { name: "Spoken English 1:1 Session", cost: 90 },
];

function CreditsPanel() {
  const [balance, setBalance] = useState(240);
  const [unlocked, setUnlocked] = useState<string[]>([]);

  return (
    <div className="space-y-6">
      <div className="nb bg-lavender p-6 text-center text-primary-foreground">
        <p className="font-mono text-[10px] font-bold uppercase">Your balance</p>
        <p className="font-display text-5xl font-bold">{balance}</p>
        <p className="font-mono text-xs font-bold uppercase">LAR Credits</p>
      </div>

      <div>
        <h3 className="text-xl font-bold">Earning history</h3>
        <div className="mt-3">
          <List items={EARNINGS.map((e) => ({ ...e, action: "Earned" }))} />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold">Redeem for premium content</h3>
        <ul className="mt-3 space-y-3">
          {LOCKED.map((l) => {
            const isOpen = unlocked.includes(l.name);
            return (
              <li
                key={l.name}
                className="nb grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 bg-background p-4"
              >
                <div className="min-w-0">
                  <p className="font-bold break-words">{l.name}</p>
                  <p className="font-mono text-xs uppercase">
                    {isOpen ? "Unlocked" : `${l.cost} credits`}
                  </p>
                </div>
                <button
                  disabled={isOpen || balance < l.cost}
                  onClick={() => {
                    setBalance((b) => b - l.cost);
                    setUnlocked((u) => [...u, l.name]);
                  }}
                  className={`nb nb-press shrink-0 px-4 py-2 text-sm font-bold ${
                    isOpen
                      ? "bg-yellow"
                      : balance < l.cost
                        ? "bg-card opacity-50"
                        : "bg-lavender text-primary-foreground"
                  }`}
                >
                  {isOpen ? "Open" : balance < l.cost ? "Locked" : "Redeem"}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/* ---------------- ai tutor ---------------- */

type Msg = { from: "you" | "tutor"; text: string };

function TutorPanel() {
  const [offline, setOffline] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "tutor", text: "Hi! Ask me anything from your syllabus." },
  ]);

  const send = () => {
    if (!input.trim()) return;
    const q = input;
    setInput("");
    setMsgs((m) => [
      ...m,
      { from: "you", text: q },
      {
        from: "tutor",
        text: offline
          ? `Offline RAG: found this in your downloaded module — a short explanation of "${q}" with a worked example.`
          : `Online AI: here is a step-by-step answer to "${q}", plus a practice question to try.`,
      },
    ]);
  };

  return (
    <div className="space-y-5">
      <div className="nb grid grid-cols-2 gap-2 bg-background p-2">
        {[
          { label: "Online AI Mode", value: false },
          { label: "Offline RAG Mode", value: true },
        ].map((m) => (
          <button
            key={m.label}
            onClick={() => setOffline(m.value)}
            className={`nb nb-press px-3 py-3 text-sm font-bold ${
              offline === m.value ? "bg-lavender text-primary-foreground" : "bg-card"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>
      <p className="font-mono text-xs font-bold uppercase">
        {offline
          ? "Answers come from your downloaded course materials — no internet needed."
          : "Connected to the live AI tutor for full explanations."}
      </p>

      <div className="nb max-h-80 space-y-3 overflow-y-auto bg-background p-4">
        {msgs.map((m, i) => (
          <div
            key={i}
            className={`nb max-w-[85%] p-3 text-sm ${
              m.from === "you" ? "ml-auto bg-yellow" : "bg-card"
            }`}
          >
            <p className="font-mono text-[10px] font-bold uppercase">{m.from}</p>
            <p className="mt-1 break-words">{m.text}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Ask a question…"
          className="nb w-full bg-card px-4 py-3 outline-none focus:bg-yellow"
        />
        <NBButton tone="lavender" onClick={send}>
          Ask
        </NBButton>
      </div>
    </div>
  );
}

/* ---------------- offline downloads ---------------- */

const MODULES = [
  { name: "Class 10 Science — Full Notes", size: "24 MB" },
  { name: "Maths Formula Sheets", size: "6 MB" },
  { name: "Spoken English Audio Pack", size: "38 MB" },
  { name: "Board Exam Question Bank", size: "15 MB" },
];

function OfflinePanel() {
  const [saved, setSaved] = useState<string[]>(["Maths Formula Sheets"]);

  return (
    <div className="space-y-5">
      <p className="text-sm text-muted-foreground">
        Save study modules to your device and keep learning without a connection.
      </p>
      <div className="nb bg-yellow p-4">
        <p className="font-mono text-[10px] font-bold uppercase">Saved on this device</p>
        <p className="font-display text-3xl font-bold">{saved.length}</p>
      </div>
      <ul className="space-y-3">
        {MODULES.map((m) => {
          const isSaved = saved.includes(m.name);
          return (
            <li
              key={m.name}
              className="nb grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 bg-card p-4"
            >
              <div className="min-w-0">
                <p className="font-bold break-words">{m.name}</p>
                <p className="font-mono text-xs uppercase">
                  {m.size} · {isSaved ? "Available offline" : "Not downloaded"}
                </p>
              </div>
              <button
                onClick={() =>
                  setSaved((s) => (isSaved ? s.filter((x) => x !== m.name) : [...s, m.name]))
                }
                className={`nb nb-press shrink-0 px-4 py-2 text-sm font-bold ${
                  isSaved ? "bg-peach" : "bg-lavender text-primary-foreground"
                }`}
              >
                {isSaved ? "Remove" : "Download"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ---------------- dashboard ---------------- */

export function Dashboard({
  role,
  email,
  onSignOut,
}: {
  role: Role;
  email: string;
  onSignOut: () => void;
}) {
  const [view, setView] = useState<MenuKey>("dashboard");
  const [drawer, setDrawer] = useState(false);
  const isStudent = role === "student";

  const go = (k: MenuKey) => {
    setView(k);
    setDrawer(false);
  };

  const content: Record<MenuKey, React.ReactNode> = {
    dashboard: (
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["12", "Sessions this month"],
            ["4", isStudent ? "Mentors linked" : "Classes hosted"],
            ["87%", "Attendance"],
          ].map(([n, l]) => (
            <div key={l} className="nb bg-yellow p-4 text-center">
              <p className="font-display text-3xl font-bold">{n}</p>
              <p className="font-mono text-[10px] font-bold uppercase">{l}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <Tile
            tone="bg-peach"
            eyebrow="Credits"
            title="LAR Credits"
            body="Track your coins and unlock premium content."
            onClick={() => go("credits")}
          />
          <Tile
            tone="bg-card"
            eyebrow="AI"
            title="AI Tutor"
            body="Online AI answers or offline RAG from your modules."
            onClick={() => go("tutor")}
          />
          <Tile
            tone="bg-yellow"
            eyebrow="Rankings"
            title="Leaderboard"
            body={isStudent ? "See top LAR credit earners" : "See top performing teachers"}
            onClick={() => go("leaderboard")}
          />
        </div>
      </div>
    ),
    classes: (
      <List
        items={[
          { title: "Physics: Motion in a Plane", meta: "Today · 4:00 PM · Grade 11", tone: "bg-yellow" },
          { title: "Spoken English Lab", meta: "Tomorrow · 10:00 AM · All levels", tone: "bg-peach" },
          { title: "Intro to Coding with Scratch", meta: "Sat · 5:30 PM · Grade 8", tone: "bg-card" },
        ]}
      />
    ),
    mentors: (
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          ["Priya Nair", "Maths · Kochi"],
          ["Rahul Verma", "Physics · Delhi"],
          ["Sana Iqbal", "English · Hyderabad"],
          ["Dev Patel", "CS · Ahmedabad"],
        ].map(([n, m]) => (
          <div key={n} className="nb bg-card p-4">
            <div className="nb h-10 w-10 bg-lavender" />
            <p className="mt-3 font-bold">{n}</p>
            <p className="font-mono text-xs uppercase">{m}</p>
          </div>
        ))}
      </div>
    ),
    resources: (
      <List
        items={[
          { title: "NCERT Science Notes (Hindi + English)", meta: "PDF · 2.4 MB", tone: "bg-peach", action: "Open" },
          { title: "Offline Worksheet Pack", meta: "ZIP · printable", tone: "bg-yellow", action: "Open" },
          { title: "Exam Prep Video Series", meta: "18 videos · low-data", tone: "bg-card", action: "Open" },
        ]}
      />
    ),
    upload: <UploadPanel isStudent={isStudent} />,
    credits: <CreditsPanel />,
    language: <LanguagePanel />,
    tutor: <TutorPanel />,
    leaderboard: isStudent ? <StudentLeaderboard /> : <TeacherLeaderboard />,
    offline: <OfflinePanel />,
    community: (
      <div className="space-y-3">
        {[
          ["Meena, Grade 10", "First time I attended a live class from my village. Wow."],
          ["Mr. Joseph, Teacher", "Sharing my lesson plans here doubled my reach."],
        ].map(([who, text]) => (
          <div key={who} className="nb bg-card p-4">
            <p className="font-mono text-xs font-bold uppercase">{who}</p>
            <p className="mt-2">{text}</p>
          </div>
        ))}
      </div>
    ),
    impact: (
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["1,240", "Students reached"],
          ["310", "Teachers onboard"],
          ["46", "Districts covered"],
        ].map(([n, l]) => (
          <div key={l} className="nb bg-lavender p-5 text-center text-primary-foreground">
            <p className="font-display text-3xl font-bold">{n}</p>
            <p className="font-mono text-[10px] font-bold uppercase">{l}</p>
          </div>
        ))}
      </div>
    ),
    profile: (
      <div className="space-y-4">
        <div className="nb bg-yellow p-4">
          <p className="font-mono text-xs font-bold uppercase">Signed in as</p>
          <p className="mt-1 font-bold break-words">{email}</p>
          <p className="font-mono text-xs uppercase">Role · {role}</p>
        </div>
        <NBButton tone="white" full onClick={onSignOut}>
          Sign out
        </NBButton>
      </div>
    ),
  };

  return (
    <div className="grid-bg min-h-screen overflow-y-auto">
      {/* nav */}
      <header className="sticky top-0 z-30 border-b-4 border-ink bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-5">
          <p className="truncate font-display text-lg font-bold sm:text-xl">
            LAR<span className="ml-1 text-lavender">Connect</span>
          </p>
          <nav className="hidden flex-wrap items-center justify-end gap-2 xl:flex">
            {MENU.map((m) => (
              <button
                key={m.key}
                onClick={() => go(m.key)}
                className={`nb nb-press px-3 py-2 text-sm font-bold ${
                  view === m.key ? "bg-lavender text-primary-foreground" : "bg-background"
                }`}
              >
                {m.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => setDrawer(true)}
            className="nb nb-press shrink-0 bg-lavender px-4 py-2 text-sm font-bold text-primary-foreground xl:hidden"
          >
            Menu
          </button>
        </div>
      </header>

      {/* page */}
      <main className="mx-auto w-full max-w-6xl space-y-6 px-4 py-6 sm:px-5 sm:py-8">
        <div className="flex flex-wrap gap-3">
          <Badge tone="yellow">Bridging the Rural-Urban Education Gap</Badge>
          <Badge tone="peach">Empowering Teachers &amp; Students</Badge>
        </div>
        <h1 className="text-3xl leading-[1.1] font-bold sm:text-5xl lg:text-6xl">
          {isStudent ? "Learn from anywhere," : "Teach beyond your walls,"}
          <br />
          <span className="nb mt-3 inline-block rotate-[-1deg] bg-lavender px-3 py-1 text-primary-foreground">
            {isStudent ? "grow everywhere." : "reach every learner."}
          </span>
        </h1>

        <div className="grid gap-4 sm:grid-cols-3">
          <Tile
            tone="bg-yellow"
            eyebrow="Live"
            title="Live Classes"
            body="Join or host sessions built for low bandwidth."
            onClick={() => go("classes")}
          />
          <Tile
            tone="bg-peach"
            eyebrow="Upload"
            title="Upload Content"
            body={isStudent ? "Share your videos and notes." : "Publish lessons for learners."}
            onClick={() => go("upload")}
          />
          <Tile
            tone="bg-card"
            eyebrow="Offline"
            title="Offline Downloads"
            body="Save modules and study without internet."
            onClick={() => go("offline")}
          />
        </div>

        <Section title={TITLES[view]}>{content[view]}</Section>
      </main>

      {/* slide-out drawer */}
      {drawer && (
        <div
          className="fixed inset-0 z-40 xl:hidden"
          style={{ backgroundColor: "color-mix(in oklab, black 45%, transparent)" }}
          onClick={() => setDrawer(false)}
        >
          <aside
            className="animate-in slide-in-from-right absolute top-0 right-0 h-full w-72 max-w-[85vw] overflow-y-auto border-l-4 border-ink bg-card p-5 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <p className="font-display text-lg font-bold">Menu</p>
              <button
                onClick={() => setDrawer(false)}
                aria-label="Close menu"
                className="nb nb-press h-9 w-9 bg-yellow font-bold"
              >
                ×
              </button>
            </div>
            <div className="mt-5 space-y-3 pb-6">
              {MENU.map((m) => (
                <button
                  key={m.key}
                  onClick={() => go(m.key)}
                  className={`nb nb-press w-full px-4 py-3 text-left font-bold ${
                    view === m.key ? "bg-lavender text-primary-foreground" : "bg-background"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

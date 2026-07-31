import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Onboarding, SignIn, Splash, type Role } from "@/components/lar/flow";
import { Dashboard } from "@/components/lar/dashboard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LAR Connect — Bridging the Rural-Urban Education Gap" },
      {
        name: "description",
        content:
          "LAR Connect links rural students with urban teachers through live classes, mentors and offline-ready resources.",
      },
      { property: "og:title", content: "LAR Connect — Bridging the Rural-Urban Education Gap" },
      {
        property: "og:description",
        content:
          "Live classes, mentor matching and free learning resources for students and teachers everywhere.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Stage = "splash" | "signin" | "onboarding" | "dashboard";

function Index() {
  const [stage, setStage] = useState<Stage>("splash");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("student");

  if (stage === "splash") return <Splash onEnter={() => setStage("signin")} />;
  if (stage === "signin")
    return (
      <SignIn
        onSignIn={(e) => {
          setEmail(e);
          setStage("onboarding");
        }}
      />
    );
  if (stage === "onboarding")
    return (
      <Onboarding
        onPick={(r) => {
          setRole(r);
          setStage("dashboard");
        }}
      />
    );
  return (
    <Dashboard
      role={role}
      email={email}
      onSignOut={() => {
        setEmail("");
        setStage("splash");
      }}
    />
  );
}

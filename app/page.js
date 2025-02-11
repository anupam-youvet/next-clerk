"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SignIn } from "@clerk/nextjs";

const styleObj = {
  border: "none",
  height: "40px",
  borderRadius: "5px",
  color: "white",
  background: "#ef6405",
  cursor: "pointer",
  padding: "10px 5px",
  fontWeight: "bold",
};
export default function Home() {
  const router = useRouter();
  const [ui, setUI] = useState(null);

  function getUI() {
    if (ui === "signin") {
      return <SignIn forceRedirectUrl="/dashboard" />;
    } else {
      return (
        <button style={styleObj} onClick={() => setUI("signin")}>
          Sign In with SSO
        </button>
      );
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center" /* Horizontal */,
        alignItems: "center" /* Vertical */,
        height: "100vh",
      }}
    >
      {getUI()}
    </div>
  );
}

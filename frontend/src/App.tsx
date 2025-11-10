import { useEffect, useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("loading...");

  useEffect(() => {
    fetch("/api/hello")
      .then(r => r.json())
      .then(d => setMsg(d.message))
      .catch(() => setMsg("API error"));
  }, []);

  return (
    <div className="min-h-screen grid place-items-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Full-stack ✅</h1>
        <p className="mt-2 text-gray-300">{msg}</p>
      </div>
    </div>
  );
}

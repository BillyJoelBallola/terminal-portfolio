"use client";

import { useEffect, useRef } from "react";
import { TerminalHistory } from "./components/TerminalHistory";
import { TerminalInput } from "./components/TerminalInput";
import { useTerminal } from "./hooks/useTerminal";

export default function Home() {
  const bottomRef = useRef<HTMLDivElement>(null);
  const {
    history,
    input,
    setInput,
    handleSubmit,
    handleKeyDown,
    setHistoryIndex,
  } = useTerminal();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [history]);

  return (
    <main className="h-screen overflow-y-auto text-neutral-50 bg-neutral-900 font-mono p-4">
      <TerminalHistory history={history} />
      <TerminalInput
        input={input}
        setInput={setInput}
        setHistoryIndex={setHistoryIndex}
        onSubmit={handleSubmit}
        handleKeyDown={handleKeyDown}
      />
      <div ref={bottomRef} />
    </main>
  );
}

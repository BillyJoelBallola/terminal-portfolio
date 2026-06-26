import { useState } from "react";
import { commands, outputs, WELCOME_MESSAGE } from "../data";

type HistoryItem = {
  command?: string;
  output: string;
};

export function useTerminal() {
  const [history, setHistory] = useState<HistoryItem[]>([
    { output: WELCOME_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);

  const commandHistory = history
    .map((item) => item.command)
    .filter((cmd): cmd is string => Boolean(cmd));

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const command = input.trim();

    if (!command) return;

    if (command === "clear") {
      setHistory([]);
      setInput("");
      setHistoryIndex(-1);
      return;
    }

    setHistory((prev) => [
      ...prev,
      {
        command,
        output: commands.includes(command)
          ? outputs[command as keyof typeof outputs]
          : `${command}: command not found`,
      },
    ]);

    setInput("");
    setHistoryIndex(-1);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowUp") {
      e.preventDefault();

      if (!commandHistory.length) return;

      const nextIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);

      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();

      if (historyIndex === -1) return;

      if (historyIndex === commandHistory.length - 1) {
        setHistoryIndex(-1);
        setInput("");
        return;
      }

      const nextIndex = historyIndex + 1;

      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
    }
  }

  return {
    history,
    input,
    setInput,
    handleSubmit,
    handleKeyDown,
    historyIndex,
    setHistoryIndex,
  };
}

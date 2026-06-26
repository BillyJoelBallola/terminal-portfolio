import { useState } from "react";
import { outputs, projects, WELCOME_MESSAGE } from "../data";

type CommandHandler = (args: string[]) => string;
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

  const commandHandlers: Record<string, CommandHandler> = {
    help: () => outputs.help,
    about: () => outputs.about,
    skills: () => outputs.skills,
    contact: () => outputs.contact,
    neofetch: () => outputs.neofetch,
    projects: () => outputs.projects,
    project: ([projectName]) => {
      if (!projectName) {
        return "Usage: project <name>";
      }

      return (
        projects[projectName as keyof typeof projects] ??
        `
Project "${projectName}" not found.

Available projects:
  • trakr
  • invio
  • resumiq
  • trakbord
        `
      );
    },
    resume: () => {
      const link = document.createElement("a");

      link.href = "../../ballola_resume-it.pdf";
      link.download = "ballola_resume-it.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      return "Success: Resume downloaded";
    },
  };

  const commandHistory = history
    .map((item) => item.command)
    .filter((cmd): cmd is string => Boolean(cmd));

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const command = input.trim().toLowerCase();

    if (!command) return;

    if (command === "clear") {
      setHistory([]);
      setInput("");
      setHistoryIndex(-1);
      return;
    }

    const [cmd, ...args] = command.split(/\s+/);

    const handler = commandHandlers[cmd];

    const output = handler ? handler(args) : `${cmd}: command not found`;

    setHistory((prev) => [
      ...prev,
      {
        command,
        output,
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

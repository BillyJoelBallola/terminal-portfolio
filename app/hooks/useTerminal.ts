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

  const commandHistory = history.reduce<string[]>((acc, item) => {
    const cmd = item.command?.trim();
    if (cmd) acc.push(cmd);
    return acc;
  }, []);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const command = input.trim().toLowerCase();

    if (command === "clear") {
      setHistory([]);
      setInput("");
      setHistoryIndex(-1);
      return;
    }

    const [cmd, ...args] = command.split(/\s+/);

    const handler = commandHandlers[cmd];

    const output = handler
      ? handler(args)
      : !cmd
        ? ""
        : `${cmd}: command not found`;

    setHistory((prev) => [
      ...prev,
      {
        command: !cmd ? " " : cmd,
        output,
      },
    ]);

    setInput("");
    setHistoryIndex(-1);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
    e.preventDefault();

    const len = commandHistory.length;
    if (!len) return;

    if (e.key === "ArrowUp") {
      const nextIndex =
        historyIndex === -1 ? len - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(commandHistory[nextIndex]);
    } else {
      if (historyIndex === -1 || historyIndex === len - 1) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
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

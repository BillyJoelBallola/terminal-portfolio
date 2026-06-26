import { TerminalPrompt } from "./TerminalPrompt";

type Props = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setHistoryIndex: React.Dispatch<React.SetStateAction<number>>;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
};

export function TerminalInput({
  onSubmit,
  input,
  setInput,
  setHistoryIndex,
  handleKeyDown,
}: Props) {
  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <TerminalPrompt />

      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setHistoryIndex?.(-1);
        }}
        onKeyDown={handleKeyDown}
        autoFocus
        autoComplete="off"
        spellCheck={false}
        className="flex-1 bg-transparent outline-none"
      />
    </form>
  );
}

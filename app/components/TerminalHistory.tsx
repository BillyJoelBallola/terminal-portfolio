import { TerminalPrompt } from "./TerminalPrompt";

type HistoryItem = {
  command?: string;
  output: string;
};

type Props = {
  history: HistoryItem[];
};

export function TerminalHistory({ history }: Props) {
  return (
    <>
      {history.map((item, index) => (
        <div key={index} className="mb-4">
          {item.command && (
            <div className="flex gap-2">
              <TerminalPrompt />
              <span>{item.command}</span>
            </div>
          )}

          {item.output && (
            <pre className="whitespace-pre-wrap">{item.output}</pre>
          )}
        </div>
      ))}
    </>
  );
}


import { cn } from "@/lib/utils";

interface CodeBlockProps {
  language: string;
  code: string;
  className?: string;
  lineNumbers?: boolean;
  title?: string;
}

export function CodeBlock({
  language,
  code,
  className,
  lineNumbers = true,
  title,
}: CodeBlockProps) {
  const lines = code.trim().split("\n");

  return (
    <div className={cn("rounded-lg overflow-hidden", className)}>
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-800 border-b border-zinc-700">
          <div className="text-xs font-medium text-zinc-400">{title}</div>
        </div>
      )}
      <div className="relative bg-zinc-900 p-4 overflow-x-auto">
        <pre className="text-sm text-white">
          <code spellCheck={false}>
            {lines.map((line, i) => (
              <div key={i} className="flex">
                {lineNumbers && (
                  <span className="inline-block w-10 text-right mr-4 text-zinc-600 select-none">
                    {i + 1}
                  </span>
                )}
                <span className="flex-1">{formatCodeLine(line, language)}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}

// Function to add syntax highlighting classes to code
function formatCodeLine(line: string, language: string): React.ReactNode {
  // Simple syntax highlighting based on keywords - in a real app you would use a proper syntax highlighter
  if (language === "json") {
    // Highlight strings
    return line
      .replace(/"([^"]+)":/g, '<span class="text-yellow-400">"$1"</span>:')
      .replace(/: "([^"]+)"/g, ': <span class="text-green-400">"$1"</span>')
      .replace(
        /\b(true|false|null)\b/g,
        '<span class="text-purple-400">$1</span>'
      )
      .split(/<span|<\/span>/).map((part, i) => {
        if (i % 2 === 0) {
          return <span key={i} dangerouslySetInnerHTML={{ __html: part }} />;
        }
        return <span key={i} dangerouslySetInnerHTML={{ __html: `<span${part}` }} />;
      });
  }
  
  if (language === "php" || language === "c#") {
    return line
      .replace(/\b(public|private|protected|class|function|string|var|return|using|new|if|else|foreach)\b/g, 
               '<span class="text-purple-400">$1</span>')
      .replace(/\b(true|false|null)\b/g, '<span class="text-yellow-400">$1</span>')
      .replace(/"([^"]+)"/g, '<span class="text-green-400">"$1"</span>')
      .replace(/\/\/(.+)$/g, '<span class="text-zinc-500">// $1</span>')
      .split(/<span|<\/span>/).map((part, i) => {
        if (i % 2 === 0) {
          return <span key={i} dangerouslySetInnerHTML={{ __html: part }} />;
        }
        return <span key={i} dangerouslySetInnerHTML={{ __html: `<span${part}` }} />;
      });
  }
  
  // Default formatting for other languages
  return line;
}

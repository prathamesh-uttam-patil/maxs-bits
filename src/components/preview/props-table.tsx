import { cn } from "@/lib/utils";

export interface PropDef {
  name: string;
  type: string;
  required: boolean;
  default?: string;
  description: string;
}

interface PropsTableProps {
  props: PropDef[];
  className?: string;
}

export function PropsTable({ props, className }: PropsTableProps) {
  if (!props || props.length === 0) return null;

  return (
    <div className={cn("rounded-xl border border-[var(--border)] overflow-hidden", className)}>
      <div className="px-4 py-3 border-b border-[var(--border)] bg-[var(--secondary)]/50">
        <h3 className="text-sm font-semibold">Props</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--secondary)]/30">
              <th className="text-left px-4 py-2.5 font-medium text-[var(--muted-foreground)]">Prop</th>
              <th className="text-left px-4 py-2.5 font-medium text-[var(--muted-foreground)]">Type</th>
              <th className="text-left px-4 py-2.5 font-medium text-[var(--muted-foreground)]">Required</th>
              <th className="text-left px-4 py-2.5 font-medium text-[var(--muted-foreground)]">Default</th>
              <th className="text-left px-4 py-2.5 font-medium text-[var(--muted-foreground)]">Description</th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop) => (
              <tr key={prop.name} className="border-b border-[var(--border)] last:border-0">
                <td className="px-4 py-2.5">
                  <code className="text-xs font-mono bg-[var(--secondary)] px-1.5 py-0.5 rounded text-[var(--primary)]">
                    {prop.name}
                  </code>
                </td>
                <td className="px-4 py-2.5">
                  <code className="text-xs font-mono text-[var(--muted-foreground)]">
                    {prop.type}
                  </code>
                </td>
                <td className="px-4 py-2.5">
                  {prop.required ? (
                    <span className="text-xs font-medium text-amber-500">Required</span>
                  ) : (
                    <span className="text-xs text-[var(--muted-foreground)]">Optional</span>
                  )}
                </td>
                <td className="px-4 py-2.5 text-[var(--muted-foreground)]">
                  {prop.default ? (
                    <code className="text-xs font-mono">{prop.default}</code>
                  ) : (
                    <span className="text-xs">—</span>
                  )}
                </td>
                <td className="px-4 py-2.5 text-[var(--muted-foreground)]">
                  {prop.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

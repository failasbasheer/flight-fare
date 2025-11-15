"use client";

export interface AutocompleteSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  compact?: boolean;
}

export default function AutocompleteSelect({
  label,
  value,
  onChange,
  options,
  compact = false,
}: AutocompleteSelectProps) {
  return (
    <div className={`${compact ? "space-y-1" : "space-y-2"}`}>
      <label className="text-xs font-semibold">{label}</label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full border rounded-lg bg-white dark:bg-neutral-900 ${
          compact ? "py-1.5 px-2 text-sm" : "py-2 px-3"
        }`}
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

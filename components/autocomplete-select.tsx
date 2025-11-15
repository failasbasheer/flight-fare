'use client';

import { useState, useRef, useEffect } from 'react';

interface AutocompleteSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

export default function AutocompleteSelect({
  label,
  value,
  onChange,
  options,
}: AutocompleteSelectProps) {
  const [open, setOpen] = useState(false);
  const [filtered, setFiltered] = useState(options);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value === '') {
      setFiltered(options);
    } else {
      setFiltered(options.filter((opt) => opt.toLowerCase().includes(value.toLowerCase())));
    }
  }, [value, options]);

  return (
    <div className="relative">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 200)}
          placeholder={`Select ${label}`}
          className="w-full px-3 py-2 bg-input border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {open && filtered.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
            {filtered.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className="w-full text-left px-3 py-2 hover:bg-muted transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

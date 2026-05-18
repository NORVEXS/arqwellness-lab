import React from 'react';

/**
 * Splits text and wraps the given words (case-insensitive) in a subtle italic accent.
 * Used to break the monotony of long paragraphs without shouting.
 */
export function emphasize(text: string, words: string[]): React.ReactNode {
  if (!words.length) return text;
  const escaped = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const re = new RegExp(`(${escaped.join('|')})`, 'gi');
  const parts = text.split(re);
  return parts.map((part, i) => {
    const isMatch = words.some((w) => w.toLowerCase() === part.toLowerCase());
    if (!isMatch) return <React.Fragment key={i}>{part}</React.Fragment>;
    return (
      <em
        key={i}
        className="font-medium not-italic text-brand-blue dark:text-brand-blue-soft"
      >
        {part}
      </em>
    );
  });
}

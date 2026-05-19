import React from 'react';

/**
 * Splits text and wraps the given words (case-insensitive) in a subtle italic accent.
 * Used to break the monotony of long paragraphs without shouting.
 */
export function emphasize(
  text: string,
  words: string[],
  links?: Record<string, string>,
): React.ReactNode {
  if (!words.length) return text;
  const escaped = words.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const re = new RegExp(`(${escaped.join('|')})`, 'gi');
  const parts = text.split(re);
  const lowerLinks = links
    ? Object.fromEntries(Object.entries(links).map(([k, v]) => [k.toLowerCase(), v]))
    : undefined;
  return parts.map((part, i) => {
    const isMatch = words.some((w) => w.toLowerCase() === part.toLowerCase());
    if (!isMatch) return <React.Fragment key={i}>{part}</React.Fragment>;
    const href = lowerLinks?.[part.toLowerCase()];
    if (href) {
      return (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium not-italic text-brand-blue underline decoration-brand-blue/30 underline-offset-4 transition-colors hover:text-brand-purple hover:decoration-brand-purple/50 dark:text-brand-blue-soft dark:decoration-brand-blue-soft/30 dark:hover:text-[#B9B2E8]"
        >
          {part}
        </a>
      );
    }
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

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { TeamPerson } from '../../data/team';

interface TeamCardProps {
  person: TeamPerson;
  variant?: 'lead' | 'senior' | 'compact';
  showRole?: boolean;
}

const initials = (raw: string) => {
  const capitalised = raw
    .split(/\s+/)
    .filter((w) => /^[A-ZÁÉÍÓÚÑÀÈÌÒÙÄËÏÖÜÂÊÎÔÛÇ]/.test(w));
  const chars = (capitalised.length >= 2 ? capitalised : raw.split(/\s+/))
    .map((n) => n[0]?.toUpperCase() ?? '')
    .filter(Boolean);
  return (chars[0] ?? '') + (chars[chars.length - 1] ?? '');
};

const TeamCard: React.FC<TeamCardProps> = ({
  person,
  variant = 'senior',
  showRole = true,
}) => {
  const { t } = useTranslation();
  const name = t(person.nameKey);
  const role = t(`team.roles.${person.roleKey}`);
  const Tag: 'a' | 'div' = person.href ? 'a' : 'div';
  const linkProps = person.href
    ? { href: person.href, target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};

  if (variant === 'lead') {
    return (
      <Tag
        {...linkProps}
        className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-white p-4 shadow-soft transition-all duration-450 ease-out-quart hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-medium dark:border-white/10 dark:bg-surface-dark-alt dark:shadow-none dark:hover:border-brand-blue-soft/40 sm:p-6 lg:items-start lg:p-7"
      >
        <span
          aria-hidden="true"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-purple font-mono text-sm font-medium text-white shadow-medium sm:h-14 sm:w-14 lg:h-16 lg:w-16 lg:text-base"
        >
          {initials(name)}
        </span>
        <div className="min-w-0 flex-1">
          {showRole && (
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue dark:text-brand-blue-soft sm:tracking-[0.22em]">
              {role}
            </span>
          )}
          <h4 className="mt-1 font-display text-base font-medium leading-snug text-ink dark:text-white sm:text-lg">
            {name}
          </h4>
        </div>
        {person.href && (
          <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-ink-mute transition-colors group-hover:text-brand-blue dark:text-white/45 dark:group-hover:text-brand-blue-soft" />
        )}
      </Tag>
    );
  }

  if (variant === 'compact') {
    return (
      <Tag
        {...linkProps}
        className="group flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 transition-colors hover:border-brand-blue/30 hover:bg-surface-alt dark:border-white/10 dark:bg-surface-dark-alt dark:hover:border-brand-blue-soft/40 dark:hover:bg-white/[0.04]"
      >
        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple font-mono text-[11px] font-medium text-white"
        >
          {initials(name)}
        </span>
        <div className="min-w-0 flex-1">
          <span className="block truncate text-sm font-medium text-ink dark:text-white">{name}</span>
          {showRole && (
            <span className="block truncate font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute dark:text-white/50">
              {role}
            </span>
          )}
        </div>
        {person.href && (
          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-ink-subtle transition-colors group-hover:text-brand-blue dark:text-white/35 dark:group-hover:text-brand-blue-soft" />
        )}
      </Tag>
    );
  }

  // senior — uniform medium card
  return (
    <Tag
      {...linkProps}
      className="group flex h-full flex-col items-center justify-start rounded-2xl border border-line bg-white p-4 text-center transition-all duration-300 ease-out-quart hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-medium dark:border-white/10 dark:bg-surface-dark-alt dark:hover:border-brand-blue-soft/40 dark:hover:bg-white/[0.04] sm:p-5"
    >
      <span
        aria-hidden="true"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-purple font-mono text-xs font-medium text-white sm:h-12 sm:w-12"
      >
        {initials(name)}
      </span>
      <h4 className="mt-3 font-display text-sm font-medium leading-snug text-ink display-balance dark:text-white">
        {name}
      </h4>
      {showRole && (
        <span className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute dark:text-white/50">
          {role}
        </span>
      )}
      {person.href && (
        <span className="mt-3 inline-flex items-center gap-1 text-[11px] text-brand-blue opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-brand-blue-soft">
          {t('team.viewProfile')}
          <ArrowUpRight className="h-3 w-3" />
        </span>
      )}
    </Tag>
  );
};

export default TeamCard;

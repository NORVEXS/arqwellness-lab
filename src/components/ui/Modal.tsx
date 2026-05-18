import React, { ReactNode, useEffect, useId, useRef } from 'react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ModalProps {
  children: ReactNode;
  title: string;
  onClose: () => void;
  eyebrow?: string;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const Modal: React.FC<ModalProps> = ({ children, title, onClose, eyebrow }) => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';

    const root = containerRef.current;
    const focusables = root?.querySelectorAll<HTMLElement>(FOCUSABLE);
    focusables?.[0]?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Tab' && focusables && focusables.length > 0) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
      previousFocus.current?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/55 p-0 backdrop-blur-sm animate-fade-in sm:items-center sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-t-3xl bg-white shadow-large animate-scale-in sm:rounded-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line/70 px-6 py-5">
          <div>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h3 id={titleId} className="mt-1 font-display text-2xl font-medium text-ink">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('common.close')}
            className="rounded-full p-2 text-ink-mute transition hover:bg-line-soft hover:text-ink"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="max-h-[70vh] overflow-auto px-6 py-6 text-ink-soft leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

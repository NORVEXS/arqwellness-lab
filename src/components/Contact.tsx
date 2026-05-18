import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  MapPin,
  Mail,
  Phone,
  Send,
  Loader2,
  Check,
  AlertTriangle,
  ArrowUpRight,
  Instagram,
  Youtube,
  GraduationCap,
} from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

type Status = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!WEB3FORMS_ACCESS_KEY) {
      // Fallback to mailto when no API key configured
      const name = data.get('name') ?? '';
      const subject = data.get('subject') ?? 'Contacto desde ArqWellness Lab';
      const message = data.get('message') ?? '';
      const body = encodeURIComponent(`${message}\n\n— ${name}`);
      window.location.href = `mailto:arqwellness@us.es?subject=${encodeURIComponent(
        String(subject),
      )}&body=${body}`;
      setStatus('success');
      form.reset();
      return;
    }

    setStatus('sending');
    data.append('access_key', WEB3FORMS_ACCESS_KEY);
    data.append('from_name', 'ArqWellness Lab — Web');
    data.append('subject', String(data.get('subject') ?? 'Contacto desde la web'));

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section id="contact" tone="dark" ariaLabel={t('contact.title')}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 opacity-60"
        style={{
          background:
            'radial-gradient(50% 50% at 80% 0%, rgba(59, 48, 130, 0.4) 0%, transparent 60%), radial-gradient(40% 40% at 0% 100%, rgba(45, 92, 136, 0.4) 0%, transparent 60%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 bg-grid-dark bg-grid-40 opacity-40"
      />

      <div className="relative z-10">
        <SectionHeader
          eyebrow={t('contact.eyebrow')}
          title={t('contact.title')}
          lede={t('contact.lede')}
          tone="dark"
          ledeEmphasize={[
            'colaboraciones',
            'contratos de transferencia',
            'collaborations',
            'transfer contracts',
          ]}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {/* Channels */}
          <div className="space-y-4 lg:col-span-5">
            <Reveal>
              <a
                href="https://maps.google.com/?q=Avda.+Reina+Mercedes+2+Sevilla"
                target="_blank"
                rel="noopener noreferrer"
                className="card-dark group flex items-start gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] text-brand-blue-soft">
                  <MapPin className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <span className="eyebrow text-white/55">
                    {t('contact.channels.address.label')}
                  </span>
                  <p className="mt-1 whitespace-pre-line text-sm text-white/85">
                    {t('contact.channels.address.value')}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs text-brand-blue-soft transition group-hover:text-white">
                    {t('contact.channels.address.cta')}{' '}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            </Reveal>

            <Reveal delay={60}>
              <a
                href="mailto:arqwellness@us.es"
                className="card-dark group flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] text-brand-blue-soft">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <span className="eyebrow text-white/55">
                    {t('contact.channels.email.label')}
                  </span>
                  <p className="mt-1 text-sm text-white/85">
                    {t('contact.channels.email.value')}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/40 transition group-hover:text-white" />
              </a>
            </Reveal>

            <Reveal delay={120}>
              <a
                href="tel:+34954556560"
                className="card-dark group flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.08] text-brand-blue-soft">
                  <Phone className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <span className="eyebrow text-white/55">
                    {t('contact.channels.phone.label')}
                  </span>
                  <p className="mt-1 text-sm text-white/85">
                    {t('contact.channels.phone.value')}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/40 transition group-hover:text-white" />
              </a>
            </Reveal>

            <Reveal delay={180}>
              <div className="card-dark p-5">
                <span className="eyebrow text-white/55">
                  {t('contact.channels.social.label')}
                </span>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="https://www.instagram.com/arqwellness_us/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t('contact.channels.social.instagram')}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-white/75 transition hover:border-white/25 hover:bg-white/[0.1] hover:text-white"
                  >
                    <Instagram className="h-4 w-4" />
                    <span>@arqwellness_us</span>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC4D5P6QBasZ4GsBK_hEZeaA"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t('contact.channels.social.youtube')}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-white/75 transition hover:border-white/25 hover:bg-white/[0.1] hover:text-white"
                  >
                    <Youtube className="h-4 w-4" />
                    <span>YouTube</span>
                  </a>
                  <a
                    href="https://scholar.google.es/citations?hl=es&user=ma8__HYAAAAJ&view_op=list_works"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t('contact.channels.social.scholar')}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-white/75 transition hover:border-white/25 hover:bg-white/[0.1] hover:text-white"
                  >
                    <GraduationCap className="h-4 w-4" />
                    <span>Google Scholar</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-7">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-large dark:border-white/10 dark:bg-surface-dark-alt dark:shadow-none sm:p-8">
              <header>
                <h3 className="font-display text-2xl font-medium text-ink dark:text-white">
                  {t('contact.form.title')}
                </h3>
                <p className="mt-2 text-sm text-ink-soft dark:text-white/65">
                  {t('contact.form.lede')}
                </p>
              </header>

              <form onSubmit={onSubmit} className="mt-7 grid gap-4 sm:grid-cols-2">
                {/* Honeypot */}
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} />

                <label className="text-left sm:col-span-1">
                  <span className="eyebrow !text-ink-mute dark:!text-white/55">{t('contact.form.name')}</span>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder={t('contact.form.namePlaceholder')}
                    className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/30 dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-white/40 dark:focus:border-brand-blue-soft dark:focus:ring-brand-blue-soft/30"
                  />
                </label>
                <label className="text-left sm:col-span-1">
                  <span className="eyebrow !text-ink-mute dark:!text-white/55">{t('contact.form.email')}</span>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder={t('contact.form.emailPlaceholder')}
                    className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/30 dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-white/40 dark:focus:border-brand-blue-soft dark:focus:ring-brand-blue-soft/30"
                  />
                </label>
                <label className="text-left sm:col-span-2">
                  <span className="eyebrow !text-ink-mute dark:!text-white/55">{t('contact.form.subject')}</span>
                  <input
                    required
                    name="subject"
                    type="text"
                    placeholder={t('contact.form.subjectPlaceholder')}
                    className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/30 dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-white/40 dark:focus:border-brand-blue-soft dark:focus:ring-brand-blue-soft/30"
                  />
                </label>
                <label className="text-left sm:col-span-2">
                  <span className="eyebrow !text-ink-mute dark:!text-white/55">{t('contact.form.message')}</span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="mt-2 block w-full resize-none appearance-none rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/30 dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-white/40 dark:focus:border-brand-blue-soft dark:focus:ring-brand-blue-soft/30 [-webkit-appearance:none]"
                  />
                </label>

                <label className="flex items-start gap-3 sm:col-span-2">
                  <input
                    required
                    type="checkbox"
                    name="consent"
                    className="mt-1 h-4 w-4 rounded border-line text-brand-blue focus:ring-brand-blue/40 dark:border-white/20 dark:bg-white/[0.04] dark:text-brand-blue-soft"
                  />
                  <span className="text-xs text-ink-mute dark:text-white/55">{t('contact.form.consent')}</span>
                </label>

                <div className="flex items-center justify-between gap-3 sm:col-span-2">
                  <div role="status" aria-live="polite" className="text-sm">
                    {status === 'success' && (
                      <span className="inline-flex items-center gap-1.5 text-brand-blue dark:text-brand-blue-soft">
                        <Check className="h-4 w-4" /> {t('contact.form.success')}
                      </span>
                    )}
                    {status === 'error' && (
                      <span className="inline-flex items-center gap-1.5 text-brand-red dark:text-brand-red-soft">
                        <AlertTriangle className="h-4 w-4" /> {t('contact.form.error')}
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === 'sending' ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    <span>
                      {status === 'sending'
                        ? t('contact.form.submitting')
                        : t('contact.form.submit')}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

export default Contact;

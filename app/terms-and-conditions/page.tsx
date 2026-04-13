import React from "react";

const sections = [
  {
    num: "01 — Overview",
    title: "What is Protato?",
    content: (
      <>
        <p className="text-sm font-light leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
          Protato is a design and mockup tool that helps you create and export
          visual assets for personal and professional use. By downloading,
          installing, or using Protato, you agree to these Terms. If you
          don&apos;t agree, please don&apos;t use the App.
        </p>
        <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-950/40 rounded-r-md px-4 py-3 text-sm text-orange-800 dark:text-orange-300">
          Your files and projects remain entirely on your device. Protato never
          stores or uploads your content to any server.
        </div>
      </>
    ),
  },
  {
    num: "02 — Eligibility",
    title: "Who can use it?",
    content: (
      <p className="text-sm font-light leading-relaxed text-gray-700 dark:text-gray-300">
        You must be at least 9 years old, or the minimum legal age in your
        region, to use Protato.
      </p>
    ),
  },
  {
    num: "03 — Account",
    title: "Sign in with Apple",
    content: (
      <>
        <p className="text-sm font-light leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
          Protato uses Sign in with Apple solely to associate your purchases and
          sync access across your devices. We keep it simple:
        </p>
        <BulletList
          items={[
            "You're responsible for your own Apple account security",
            "We never access or store your Apple credentials",
          ]}
        />
      </>
    ),
  },
  {
    num: "04 — Payments",
    title: "Purchases & billing",
    content: (
      <>
        <p className="text-sm font-light leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
          Premium features are available through in-app purchases, including
          lifetime access and optional subscriptions. All payments go through
          Apple via the App Store.
        </p>
        <SubSection title="Subscriptions">
          Subscriptions auto-renew unless you cancel at least 24 hours before
          the renewal date.
        </SubSection>
        <SubSection title="Cancellation">
          Manage or cancel subscriptions through your Apple ID account settings.
          We&apos;re unable to do this on your behalf.
        </SubSection>
        <SubSection title="Refunds">
          Refunds are handled by Apple in accordance with their App Store
          policies.
        </SubSection>
      </>
    ),
  },
  {
    num: "05 — Acceptable use",
    title: "What's not allowed",
    content: (
      <BulletList
        items={[
          "Disrupting or interfering with the App's normal operation",
          "Reverse-engineering or modifying any part of the App",
          "Bypassing purchase restrictions or access controls",
          "Using the App in violation of any applicable law",
        ]}
      />
    ),
  },
  {
    num: "06 — Your content",
    title: "You own what you make",
    content: (
      <>
        <p className="text-sm font-light leading-relaxed text-gray-700 dark:text-gray-300 mb-3">
          Protato lets you create and work with your own files and assets. You
          retain full ownership of anything you create using the App.
        </p>
        <BulletList
          items={[
            "All content lives on your device — never on our servers",
            "No project data is uploaded or shared without your action",
          ]}
        />
      </>
    ),
  },
  {
    num: "07 — Intellectual property",
    title: "Our work",
    content: (
      <p className="text-sm font-light leading-relaxed text-gray-700 dark:text-gray-300">
        Protato — including its design, code, and branding — is owned by Protato
        LLC. You may not copy, distribute, or modify the App without our written
        permission.
      </p>
    ),
  },
  {
    num: '08 — Warranties',
    title: 'Provided "as is"',
    content: (
      <p className="text-sm font-light leading-relaxed text-gray-700 dark:text-gray-300">
        Protato is provided without warranties of any kind. We don&apos;t
        guarantee the App will always be uninterrupted, error-free, or behave
        identically in every scenario.
      </p>
    ),
  },
  {
    num: "09 — Liability",
    title: "Limits of liability",
    content: (
      <p className="text-sm font-light leading-relaxed text-gray-700 dark:text-gray-300">
        To the fullest extent permitted by law, Protato and its developers are
        not liable for indirect or consequential damages. Total liability will
        not exceed the amount you paid for the App in the past 12 months.
      </p>
    ),
  },
  {
    num: "10 — Privacy",
    title: "Minimal data, by design",
    content: (
      <p className="text-sm font-light leading-relaxed text-gray-700 dark:text-gray-300">
        Protato is built with privacy as a foundation. Please refer to our
        Privacy Policy for full details on what little we collect and why.
      </p>
    ),
  },
  {
    num: "11 — Termination",
    title: "When access may end",
    content: (
      <p className="text-sm font-light leading-relaxed text-gray-700 dark:text-gray-300">
        We may suspend or terminate your access if you violate these Terms,
        misuse the App, or if we discontinue the App entirely. Upon termination,
        you must stop using Protato.
      </p>
    ),
  },
  {
    num: "12 — Updates to these terms",
    title: "Changes over time",
    content: (
      <p className="text-sm font-light leading-relaxed text-gray-700 dark:text-gray-300">
        We may update these Terms occasionally. Continued use of Protato after
        changes are posted means you accept the revised Terms.
      </p>
    ),
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="divide-y divide-gray-100 dark:divide-gray-800">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 py-2 text-sm font-light text-gray-700 dark:text-gray-300"
        >
          <span className="text-orange-500 font-bold shrink-0">—</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-4">
      <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
        {title}
      </h3>
      <p className="text-sm font-light leading-relaxed text-gray-700 dark:text-gray-300">
        {children}
      </p>
    </div>
  );
}

function SectionBlock({
  num,
  title,
  content,
}: {
  num: string;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <p className="text-[10px] font-mono tracking-widest uppercase text-orange-500 mb-1">
        {num}
      </p>
      <h2 className="font-serif text-2xl font-normal text-foreground mb-3">
        {title}
      </h2>
      {content}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TermsPage() {
  const pills: string[] = [
    "Files stay on your device",
    "iOS & macOS",
    "Apple payments",
    "Privacy-first",
  ];

  return (
    <div className="flex justify-center px-4 py-20 min-h-screen">
      <article className="w-full max-w-2xl">
        {/* Header */}
        <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2">
          Effective April 13, 2026
        </p>
        <h1 className="font-serif text-5xl leading-tight tracking-tight text-foreground mb-1">
          Terms Of <em>Use</em>
        </h1>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400 mb-8">
          For Protato — design mockup &amp; visual asset tool on iOS and macOS
        </p>

        {/* Trust pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {pills.map((pill, i) => (
            <span
              key={pill}
              className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wide px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900"
            >
              {i === 0 && (
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
              )}
              {pill}
            </span>
          ))}
        </div>

        <hr className="border-t border-gray-100 dark:border-gray-800 mb-10" />

        {/* Sections */}
        {sections.map((s) => (
          <SectionBlock key={s.num} num={s.num} title={s.title} content={s.content} />
        ))}

        {/* Contact */}
        <div className="mb-10">
          <p className="text-[10px] font-mono tracking-widest uppercase text-orange-500 mb-1">
            13 — Contact
          </p>
          <h2 className="font-serif text-2xl font-normal text-foreground mb-3">
            Questions?
          </h2>
          <p className="text-sm font-light text-gray-700 dark:text-gray-300 mb-4">
            We&apos;re happy to help with any questions about these Terms.
          </p>
          <div className="flex items-center justify-between flex-wrap gap-4 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl px-6 py-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                Email us
              </p>
              <p className="font-mono text-sm text-orange-500">
                hello@protato.app
              </p>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Protato LLC
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-6 text-center">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Protato LLC — All rights reserved
          </p>
        </div>
      </article>
    </div>
  );
}
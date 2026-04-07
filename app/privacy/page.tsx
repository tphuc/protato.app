import React from "react";


export default function Page() {
  return (
    <div className="flex justify-center px-4 py-16">
      <div className="prose dark:prose-invert py-20 max-w-3xl">
        <p>Last updated: Apr 7, 2026</p>

        <h1>Privacy Policy</h1>

        <p>
          Protato (“we”, “us”, or “our”) is designed with a privacy-first
          approach. This Privacy Policy explains how we handle your information
          when you use the Protato iOS and macOS applications (“the App”).
        </p>

        <p>
          Protato minimizes data collection and does not process or store your
          files, images, or mockups. Everything you create or use inside the app
          remains on your device.
        </p>

        <h2>1. Information We Collect</h2>

        <h3>1.1 Apple Sign In</h3>
        <p>
          Protato uses Sign in with Apple solely to associate your purchase with
          your account across devices.
        </p>
        <ul>
          <li>Anonymous Apple user identifier</li>
        </ul>
        <p>
          We do not receive your Apple ID credentials, name, or personal email
          unless you explicitly choose to share it with Apple.
        </p>

        <h3>1.2 Purchase & Access Status</h3>
        <p>
          To provide premium features, we maintain minimal purchase-related
          state:
        </p>
        <ul>
          <li>Whether you have Pro access</li>
          <li>Available credits (if applicable)</li>
        </ul>
        <p>
          This information is synced securely using Apple services and does not
          include personal identity data.
        </p>

        <h3>We do NOT collect:</h3>
        <ul>
          <li>Images, mockups, or files you use in the app</li>
          <li>User-generated content</li>
          <li>Usage history of your projects</li>
          <li>Device identifiers (IDFA)</li>
          <li>Location data</li>
          <li>Contacts, photos, or personal files outside the app</li>
        </ul>

        <h2>2. Local-First & Zero Content Storage</h2>
        <p>
          Protato operates as a local-first application.
        </p>
        <ul>
          <li>All files and assets remain on your device</li>
          <li>No user content is uploaded to our servers</li>
          <li>No project data is stored remotely</li>
        </ul>

        <p>
          We retain:
        </p>
        <ul>
          <li>0% of your files or mockups</li>
          <li>0% of your project data</li>
          <li>0% of your creative work on servers</li>
        </ul>

        <h2>3. How We Use Minimal Data</h2>
        <p>
          The limited data we handle is used only to:
        </p>
        <ul>
          <li>Sync your purchase status across devices</li>
          <li>Maintain access to Pro features</li>
          <li>Restore purchases</li>
          <li>Ensure the app functions correctly</li>
        </ul>

        <p>
          We do not use your data for advertising, tracking, or profiling.
        </p>

        <h2>4. Cloud Storage (Apple CloudKit)</h2>
        <p>
          Protato uses Apple CloudKit to sync minimal account-related data such
          as credits and Pro access status.
        </p>
        <ul>
          <li>Data is linked to your Apple account</li>
          <li>No user content or files are stored in CloudKit</li>
          <li>Data is encrypted and managed by Apple</li>
        </ul>

        <h2>5. Payments & Subscriptions</h2>
        <p>
          Purchases are handled by Apple through the App Store.
        </p>
        <ul>
          <li>We do not receive payment details</li>
          <li>We only receive minimal status needed to unlock features</li>
        </ul>

        <h2>6. Diagnostics</h2>
        <p>
          Protato may rely on Apple-provided crash reports to improve stability.
        </p>
        <ul>
          <li>No personal data is intentionally collected</li>
          <li>No usage tracking or analytics is implemented</li>
        </ul>

        <h2>7. GDPR Compliance (EU/EEA Users)</h2>
        <p>
          Due to the minimal data we handle, Protato is able to respect your
          privacy rights with simplicity.
        </p>

        <p>You have the right to:</p>
        <ul>
          <li>Request access to your data</li>
          <li>Request deletion</li>
          <li>Request correction</li>
          <li>Restrict or object to processing</li>
        </ul>

        <p>
          Since we do not store personal content or profiles, most requests are
          inherently satisfied by design.
        </p>

        <p>To make a request, contact:</p>
        <p><strong>hello@protato.app</strong></p>

        <h2>8. Data Sharing</h2>
        <p>
          We do not sell or share your data. Minimal information may be involved
          with:
        </p>
        <ul>
          <li>Apple (App Store & CloudKit)</li>
          <li>Purchase infrastructure providers</li>
        </ul>

        <h2>9. Data Security</h2>
        <ul>
          <li>Data handled through Apple services is encrypted</li>
          <li>No user content is stored remotely</li>
          <li>Local data remains under your control</li>
        </ul>

        <h2>10. Children’s Privacy</h2>
        <p>
          Protato is not intended for children under 13, and we do not knowingly
          collect data from children.
        </p>

        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy over time. Changes will be reflected
          by updating the date above.
        </p>

        <h2>12. Contact</h2>
        <p>
          For any privacy-related questions:
        </p>
        <p>
          <strong>hello@protato.app</strong>
        </p>
      </div>
    </div>
  );
}
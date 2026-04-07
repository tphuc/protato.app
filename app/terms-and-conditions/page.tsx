import React from "react";


export default function Page() {
  return (
    <div className="flex justify-center px-4 py-16">
      <article className="prose dark:prose-invert py-20 max-w-3xl">
        <p>Last updated: November 24, 2025</p>

        <h1>Terms & Conditions</h1>

        <p>
          Welcome to <strong>Protato</strong> (“the App”).<br />
          By downloading, installing, or using Protato, you agree to be bound by these Terms & Conditions (“Terms”). If you do not agree, do not use the App.
        </p>

        <p>
          These Terms apply to the Protato applications available on iOS and macOS.
        </p>

        <h2>1. Purpose of the App</h2>
        <p>
          Protato is a design and mockup tool that helps you create and export visual assets.
          The App is intended for personal and professional use.
        </p>

        <p>
          <strong>Your files and projects remain on your device.</strong> Protato does not store or host your content.
        </p>

        <h2>2. Eligibility</h2>
        <p>
          You must be at least 13 years old (or the minimum legal age in your region) to use Protato.
        </p>

        <h2>3. Account & Authentication</h2>
        <p>
          Protato uses Sign in with Apple solely to associate your purchases and sync access across your devices.
        </p>
        <ul>
          <li>You are responsible for your Apple account</li>
          <li>We do not access or store your Apple credentials</li>
        </ul>

        <h2>4. Purchases & Payments</h2>
        <p>
          Protato offers premium features through in-app purchases, including lifetime access and optional subscriptions.
        </p>

        <p>
          All payments are processed by Apple via the App Store.
        </p>

        <h3>4.1 Subscriptions</h3>
        <p>
          Subscriptions automatically renew unless cancelled at least 24 hours before the renewal date.
        </p>

        <h3>4.2 Cancellation</h3>
        <p>
          You can manage or cancel subscriptions through your Apple ID account settings. We cannot manage subscriptions on your behalf.
        </p>

        <h3>4.3 Refunds</h3>
        <p>
          Refunds are handled by Apple in accordance with App Store policies.
        </p>

        <h2>5. Acceptable Use</h2>
        <p>When using Protato, you agree not to:</p>
        <ul>
          <li>Attempt to disrupt or interfere with the App</li>
          <li>Reverse-engineer or modify the App</li>
          <li>Bypass purchase or access restrictions</li>
          <li>Use the App in violation of applicable laws</li>
        </ul>

        <h2>6. User Content</h2>
        <p>
          Protato allows you to create and work with your own files and assets.
        </p>

        <p className="font-semibold text-green-700">
          We do NOT collect or store your files.
        </p>

        <ul>
          <li>All content remains on your device</li>
          <li>No project data is uploaded to our servers</li>
        </ul>

        <p>
          You retain full ownership of any content you create using the App.
        </p>

        <h2>7. Intellectual Property</h2>
        <p>
          Protato, including its design, code, and branding, is owned by [Insert Company Name].
        </p>

        <p>
          You may not copy, distribute, or modify the App without permission.
        </p>

        <h2>8. Disclaimer of Warranties</h2>
        <p>
          Protato is provided “as is” and “as available” without warranties of any kind.
        </p>

        <p>We do not guarantee that:</p>
        <ul>
          <li>The App will always be uninterrupted or error-free</li>
          <li>All features will function as expected in every scenario</li>
        </ul>

        <p>
          Use of the App is at your own risk.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law:</p>
        <ul>
          <li>
            Protato and its developers are not liable for indirect or consequential damages
          </li>
          <li>
            Total liability will not exceed the amount you paid for the App in the past 12 months
          </li>
        </ul>

        <h2>10. Privacy</h2>
        <p>
          Protato is designed with a privacy-first approach and collects minimal data.
          Please refer to our Privacy Policy for full details.
        </p>

        <h2>11. Termination</h2>
        <p>We may suspend or terminate access if:</p>
        <ul>
          <li>You violate these Terms</li>
          <li>You misuse the App</li>
          <li>We discontinue the App</li>
        </ul>

        <p>
          Upon termination, you must stop using the App.
        </p>

        <h2>12. Changes to These Terms</h2>
        <p>
          We may update these Terms over time. Continued use of the App means you accept the updated Terms.
        </p>

        <h2>13. Contact</h2>
        <p>
          For questions regarding these Terms:
        </p>
        <p>
          <strong>hello@protato.app</strong>
        </p>

        <p className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Protato. All rights reserved.
        </p>
      </article>
    </div>
  );
}
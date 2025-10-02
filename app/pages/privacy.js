// app/privacy/page.js (Next.js 13+ with App Router)
// OR pages/privacy.js (for older Next.js versions)

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-6 text-gray-700">
        Your privacy is important to us. This Privacy Policy explains how we
        collect, use, and protect your information when you use our website.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
        <p className="text-gray-700">
          We may collect personal information such as your name, email address,
          and any details you provide when contacting us. We may also collect
          non-personal information such as browser type, IP address, and cookies
          for analytics and site performance.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
        <p className="text-gray-700">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
          <li>Provide and improve our services</li>
          <li>Respond to your inquiries</li>
          <li>Send updates, promotions, or relevant communications</li>
          <li>Maintain website security and analytics</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. Sharing of Information</h2>
        <p className="text-gray-700">
          We do not sell, trade, or rent your personal information. We may
          share limited information with trusted third parties who assist in
          operating our website, conducting business, or servicing you, provided
          they agree to keep this information confidential.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Security</h2>
        <p className="text-gray-700">
          We take reasonable measures to protect your personal information
          against unauthorized access, alteration, disclosure, or destruction.
          However, please note that no method of transmission over the Internet
          or electronic storage is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
        <p className="text-gray-700">
          You have the right to request access, correction, or deletion of your
          personal information. You may also opt-out of marketing communications
          at any time by contacting us.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">6. Changes to This Policy</h2>
        <p className="text-gray-700">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with the updated effective date.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">7. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, please contact us
          at <a href="mailto:info@example.com" className="text-blue-600 underline">info@example.com</a>.
        </p>
      </section>
    </main>
  );
}

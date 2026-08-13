import Script from "next/script";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export const metadata = {
  title: "Cookie Policy | Cashmela - Loan Comparison Platform",
  description:
    "Learn how Cashmela uses cookies and similar technologies. Understand what data we collect and how you can control your cookie preferences.",
  keywords: "cookie policy, cookies, tracking, data collection, privacy",
  alternates: {
    canonical: "https://cashmela.com/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy | Cashmela",
    description:
      "Cashmela Cookie Policy - How we use cookies and similar tracking technologies.",
    url: "https://cashmela.com/cookie-policy",
    type: "website",
  },
};

const cookieSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://cashmela.com/cookie-policy",
  name: "Cookie Policy",
  description:
    "Cashmela Cookie Policy - Information about cookies and tracking technologies",
  url: "https://cashmela.com/cookie-policy",
  creator: {
    "@type": "Organization",
    name: "Cashmela",
    url: "https://cashmela.com",
  },
  datePublished: "2025-01-01",
  dateModified: "2026-04-09",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Script
        id="cookie-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cookieSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-8 pb-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Cookie Policy
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-2">
              How Cashmela uses cookies and similar technologies to enhance your
              experience
            </p>
            <p className="text-sm text-slate-500 font-medium">
              Last Updated: April 2026 | Effective From: April 9, 2026
            </p>
          </div>

          {/* Quick Overview */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Quick Overview
            </h2>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  Cashmela uses cookies to improve your browsing experience
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  Cookies help us analyze website traffic and user behavior
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  You have full control over cookie settings in your browser
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  We comply with all cookie laws and privacy regulations
                </span>
              </li>
            </ul>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 text-slate-700">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                1. What Are Cookies?
              </h2>
              <p className="mb-4 leading-relaxed">
                Cookies are small text files that are stored on your device
                (computer, tablet, or mobile phone) when you visit a website.
                They contain information that the website can retrieve later.
                Cookies are widely used to make websites work more efficiently
                and provide a better user experience.
              </p>
              <p className="mb-4 leading-relaxed">
                <span className="font-semibold">Types of Cookies:</span>
              </p>
              <ul className="space-y-3 pl-2">
                <li>
                  <span className="font-semibold text-slate-900">
                    Session Cookies:
                  </span>{" "}
                  These are temporary and are deleted when you close your
                  browser. They help maintain your session while browsing.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">
                    Persistent Cookies:
                  </span>{" "}
                  These remain on your device for a specified period and help
                  remember your preferences across visits.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">
                    First-Party Cookies:
                  </span>{" "}
                  Set by Cashmela directly to enhance your experience.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">
                    Third-Party Cookies:
                  </span>{" "}
                  Set by third-party services (analytics, advertising) to track
                  user behavior across websites.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                2. Why We Use Cookies
              </h2>
              <p className="mb-4 leading-relaxed">
                Cashmela uses cookies for the following purposes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Functional Cookies
                  </h3>
                  <ul className="text-sm space-y-2">
                    <li>• Remember login information</li>
                    <li>• Maintain session data</li>
                    <li>• Store user preferences</li>
                    <li>• Enable form functionality</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Analytical Cookies
                  </h3>
                  <ul className="text-sm space-y-2">
                    <li>• Track website traffic</li>
                    <li>• Analyze user behavior</li>
                    <li>• Measure page performance</li>
                    <li>• Identify popular content</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Marketing Cookies
                  </h3>
                  <ul className="text-sm space-y-2">
                    <li>• Display personalized ads</li>
                    <li>• Track conversion goals</li>
                    <li>• Retarget interested users</li>
                    <li>• Measure ad effectiveness</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Security Cookies
                  </h3>
                  <ul className="text-sm space-y-2">
                    <li>• Detect fraudulent activity</li>
                    <li>• Prevent unauthorized access</li>
                    <li>• Protect against attacks</li>
                    <li>• Verify authentication</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                3. Cookies We Use
              </h2>
              <p className="mb-4 leading-relaxed">
                Below is a detailed list of cookies that Cashmela and our
                partners use:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-200 border border-slate-300">
                      <th className="p-3 text-left font-semibold">
                        Cookie Name
                      </th>
                      <th className="p-3 text-left font-semibold">Purpose</th>
                      <th className="p-3 text-left font-semibold">Duration</th>
                      <th className="p-3 text-left font-semibold">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border border-slate-300 hover:bg-slate-50">
                      <td className="p-3">sessionid</td>
                      <td className="p-3">Maintains user session</td>
                      <td className="p-3">Session</td>
                      <td className="p-3">Functional</td>
                    </tr>
                    <tr className="border border-slate-300 hover:bg-slate-50">
                      <td className="p-3">user_preferences</td>
                      <td className="p-3">Stores user settings</td>
                      <td className="p-3">1 Year</td>
                      <td className="p-3">Functional</td>
                    </tr>
                    <tr className="border border-slate-300 hover:bg-slate-50">
                      <td className="p-3">_ga (Google Analytics)</td>
                      <td className="p-3">Analytics and traffic tracking</td>
                      <td className="p-3">2 Years</td>
                      <td className="p-3">Analytical</td>
                    </tr>
                    <tr className="border border-slate-300 hover:bg-slate-50">
                      <td className="p-3">_gid</td>
                      <td className="p-3">Analytics user identification</td>
                      <td className="p-3">24 Hours</td>
                      <td className="p-3">Analytical</td>
                    </tr>
                    <tr className="border border-slate-300 hover:bg-slate-50">
                      <td className="p-3">utm_source, utm_medium</td>
                      <td className="p-3">Campaign tracking</td>
                      <td className="p-3">Session/30 Days</td>
                      <td className="p-3">Marketing</td>
                    </tr>
                    <tr className="border border-slate-300 hover:bg-slate-50">
                      <td className="p-3">fbp (Facebook Pixel)</td>
                      <td className="p-3">Ads measurement & retargeting</td>
                      <td className="p-3">3 Months</td>
                      <td className="p-3">Marketing</td>
                    </tr>
                    <tr className="border border-slate-300 hover:bg-slate-50">
                      <td className="p-3">csrf_token</td>
                      <td className="p-3">Protection against attacks</td>
                      <td className="p-3">Session</td>
                      <td className="p-3">Security</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                4. Similar Technologies
              </h2>
              <p className="mb-4 leading-relaxed">
                In addition to cookies, we use other similar technologies to
                track and enhance your experience:
              </p>
              <ul className="list-disc list-inside space-y-3 pl-2">
                <li>
                  <span className="font-semibold">Web Beacons (Pixels):</span>{" "}
                  Invisible images used to track user activity and measure
                  effectiveness of campaigns
                </li>
                <li>
                  <span className="font-semibold">Local Storage:</span> Stores
                  data locally on your device for improved performance and user
                  experience
                </li>
                <li>
                  <span className="font-semibold">Scripts:</span> Used to
                  enhance interactivity and collect technical information about
                  your browser
                </li>
                <li>
                  <span className="font-semibold">Log Files:</span> Server logs
                  that record IP addresses, browser information, and page access
                  details
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                5. Third-Party Services
              </h2>
              <p className="mb-4 leading-relaxed">
                Cashmela partners with third-party services that may place
                cookies on your device:
              </p>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Google Analytics
                  </h3>
                  <p className="text-sm">
                    Analyzes website traffic and user behavior to help us
                    improve our services.{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      View Google Privacy Policy
                    </a>
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Facebook Pixel
                  </h3>
                  <p className="text-sm">
                    Helps measure ad performance and retarget interested users.{" "}
                    <a
                      href="https://www.facebook.com/policies/cookies/"
                      target="_blank"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      View Facebook Cookie Policy
                    </a>
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2">Hotjar</h3>
                  <p className="text-sm">
                    Provides heatmaps and session recordings to understand user
                    interactions.{" "}
                    <a
                      href="https://www.hotjar.com/legal/policies/cookie-information/"
                      target="_blank"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      View Hotjar Cookie Info
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                6. How to Control Cookies
              </h2>
              <p className="mb-4 leading-relaxed">
                You have several options to control cookies:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Browser Settings
                  </h3>
                  <p className="text-sm leading-relaxed mb-3">
                    You can control cookies through your browser settings. Steps
                    vary by browser:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm pl-2">
                    <li>
                      <span className="font-semibold">Chrome:</span> Settings →
                      Privacy & Security → Cookies and other data
                    </li>
                    <li>
                      <span className="font-semibold">Firefox:</span>{" "}
                      Preferences → Privacy & Security → Cookies and Site Data
                    </li>
                    <li>
                      <span className="font-semibold">Safari:</span> Preferences
                      → Privacy → Cookies
                    </li>
                    <li>
                      <span className="font-semibold">Edge:</span> Settings →
                      Privacy → Cookies
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Opt-Out Options
                  </h3>
                  <p className="text-sm leading-relaxed mb-3">
                    You can opt-out of certain cookies through these resources:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm pl-2">
                    <li>
                      Google Analytics:{" "}
                      <a
                        href="https://tools.google.com/dlpage/gaoptout"
                        target="_blank"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        Google Analytics Opt-out Browser Add-on
                      </a>
                    </li>
                    <li>
                      Digital Advertising:{" "}
                      <a
                        href="https://www.networkadvertising.org/opt-out"
                        target="_blank"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        Network Advertising Initiative
                      </a>
                    </li>
                    <li>
                      IAB Preferences:{" "}
                      <a
                        href="https://www.youradchoices.com/"
                        target="_blank"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        Your Ad Choices
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                  <p className="text-sm">
                    <span className="font-semibold text-orange-700">
                      Important:
                    </span>{" "}
                    If you delete or disable cookies, some features of Cashmela
                    may not function properly. You may need to re-enter
                    information or experience reduced functionality.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                7. Cookie Consent
              </h2>
              <p className="mb-4 leading-relaxed">
                Cashmela obtains your consent before placing non-essential
                cookies. When you first visit our site:
              </p>
              <ul className="list-disc list-inside space-y-3 pl-2">
                <li>A cookie banner will appear asking for your consent</li>
                <li>
                  You can choose to accept all cookies or customize your
                  preferences
                </li>
                <li>
                  Your consent preference is stored and respected across visits
                </li>
                <li>You can withdraw or modify your consent anytime</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                8. International Compliance
              </h2>
              <p className="mb-4 leading-relaxed">
                Cashmela complies with international cookie and privacy
                regulations:
              </p>
              <ul className="list-disc list-inside space-y-3 pl-2">
                <li>
                  <span className="font-semibold">GDPR (EU):</span> We obtain
                  explicit consent for non-essential cookies from EU users
                </li>
                <li>
                  <span className="font-semibold">CCPA (California):</span> We
                  provide cookie and data collection disclosures to California
                  residents
                </li>
                <li>
                  <span className="font-semibold">India IT Rules:</span> We
                  comply with Information Technology Rules on tracking and data
                  collection
                </li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                9. Data Security
              </h2>
              <p className="mb-4 leading-relaxed">
                Cookie data is treated with the same security measures as other
                personal information:
              </p>
              <ul className="list-disc list-inside space-y-3 pl-2">
                <li>Encrypted transmission over HTTPS connections</li>
                <li>Secure storage with access restrictions</li>
                <li>Regular security audits and updates</li>
                <li>Protection against unauthorized access or misuse</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                10. Changes to This Policy
              </h2>
              <p className="leading-relaxed">
                Cashmela may update this Cookie Policy periodically to reflect
                changes in cookie usage or regulatory requirements. We will
                notify you of significant changes by updating the "Last Updated"
                date. Your continued use of Cashmela after changes indicates
                your acceptance of the updated policy.
              </p>
            </section>

            {/* Contact Section */}
            <section className="pt-8 mt-8 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Questions About Cookies?
              </h2>
              <p className="mb-4 leading-relaxed">
                If you have questions or concerns about our cookie practices:
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <ul className="space-y-3">
                  <li>
                    <span className="font-semibold text-slate-900">Email:</span>
                    <a
                      href="mailto:info@cashmela.com"
                      className="text-blue-600 hover:text-blue-700 ml-2"
                    >
                      info@cashmela.com
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold text-slate-900">Phone:</span>
                    <a
                      href="tel:+918080080114"
                      className="text-blue-600 hover:text-blue-700 ml-2"
                    >
                      +91 80800 80114
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* Footer Note */}
            <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-lg">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-900">
                  Cookie Preference Center:
                </span>{" "}
                You can manage your cookie preferences at any time through our
                Cookie Preference Center at the bottom of this page, or by
                clicking the cookie settings icon in the footer of our website.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

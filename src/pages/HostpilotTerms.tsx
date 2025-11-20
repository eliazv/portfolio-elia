import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Shield, Users, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const HostpilotTerms: React.FC = () => {
  const navigate = useNavigate();

  useSEO({
    title: "Terms and Conditions - Hostpilot",
    description:
      "Read HostPilot's Terms and Conditions of Service. Learn about user rights, service usage, data processing, and legal terms for our vacation rental management platform.",
    keywords: [
      "Hostpilot terms",
      "terms of service",
      "legal terms",
      "vacation rental terms",
      "service agreement",
    ],
    canonicalUrl: "https://eliazavatta.it/hostpilot/terms",
    og: {
      title: "Terms and Conditions - Hostpilot",
      description:
        "Terms and Conditions of Service for HostPilot vacation rental management platform.",
      url: "https://eliazavatta.it/hostpilot/terms",
      type: "article",
      image: "https://eliazavatta.it/hostpilot.svg",
      locale: "en_US",
      site_name: "Hostpilot",
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />

      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/hostpilot")}
            className="mb-8 hover:bg-blue-50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Hostpilot
          </Button>

          <div className="flex items-center gap-4 mb-8">
            <motion.div
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <FileText className="h-12 w-12 text-blue-600" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Terms and Conditions of Service
            </h1>
          </div>

          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> September 8, 2025
          </p>

          <div className="prose prose-blue max-w-none">
            {/* Section 1 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-blue-600" />
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By using HostPilot ("the App", "the Service"), you fully accept
                these Terms and Conditions of Service ("Terms"). If you do not
                accept these Terms, please do not use the App.
              </p>
            </motion.section>

            {/* Section 2 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Service Description
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                2.1 Service Offered
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                HostPilot is a mobile and web application for comprehensive
                management of short-term rental properties, providing:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Booking and calendar management</li>
                <li>Guest registration and document management</li>
                <li>Automatic tax and commission calculations</li>
                <li>
                  Synchronization with OTA platforms (Airbnb, Booking.com, and
                  more)
                </li>
                <li>Financial reporting and statistics</li>
                <li>Data backup and synchronization</li>
                <li>In-app subscriptions for Pro plan features</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                2.2 Nature of Service
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The Service is provided "as is" for personal and commercial use
                in managing properties for short-term rentals.
              </p>
            </motion.section>

            {/* Section 3 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-600" />
                3. Usage Requirements
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                3.1 Eligibility
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To use the App, you must:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Be of legal age (at least 18 years old)</li>
                <li>
                  Be an owner or authorized manager of short-term rental
                  properties
                </li>
                <li>Accept these Terms and the Privacy Policy</li>
                <li>Provide accurate information during registration</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                3.2 Account and Responsibilities
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  You are responsible for the security of your credentials
                </li>
                <li>You must immediately report unauthorized access</li>
                <li>One account per user/entity</li>
                <li>Sharing credentials with third parties is prohibited</li>
              </ul>
            </motion.section>

            {/* Section 4 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Acceptable Use
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                4.1 Permitted Uses
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Legal management of short-term rental properties</li>
                <li>Guest registration according to current regulations</li>
                <li>Tax and accounting compliance</li>
                <li>Synchronization with authorized platforms</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                4.2 Prohibited Uses
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The following is expressly prohibited:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Using the App for illegal activities</li>
                <li>Entering false or misleading data</li>
                <li>Attempting to breach system security</li>
                <li>
                  Using the App for purposes other than property management
                </li>
                <li>Sharing or reselling Service access</li>
                <li>Reverse engineering the application</li>
                <li>Using unauthorized bots or automated systems</li>
              </ul>
            </motion.section>

            {/* Section 5 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Data and Privacy
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                5.1 Data Processing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The processing of personal data is governed by our Privacy
                Policy, which is an integral part of these Terms.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                5.2 Guest Data Responsibility
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a property manager, you are:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Independent data controller</strong> for guest data
                </li>
                <li>Responsible for informing guests about data processing</li>
                <li>Required to comply with applicable privacy regulations</li>
                <li>Responsible for obtaining consent when necessary</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                5.3 Regulatory Compliance
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are responsible for compliance with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Local regulations on guest registration</li>
                <li>Tax and fiscal obligations</li>
                <li>Regional tourism regulations</li>
                <li>GDPR and privacy regulations</li>
              </ul>
            </motion.section>

            {/* Section 6 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Intellectual Property
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                6.1 App Ownership
              </h3>
              <p className="text-gray-700 leading-relaxed">
                HostPilot, including its design, code, logo, and content, is
                protected by intellectual property rights. You do not acquire
                any ownership rights.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                6.2 License to Use
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We grant you a limited, non-exclusive, and revocable license to
                use the App according to these Terms.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                6.3 Your Data
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You retain ownership of the data you enter into the App. You
                grant us a limited license to process it in providing the
                Service.
              </p>
            </motion.section>

            {/* Section 7 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Service Availability
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                7.1 Service Commitment
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We strive to keep the App available, but we do not guarantee:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Continuous 24/7 availability</li>
                <li>Absence of interruptions for maintenance</li>
                <li>Compatibility with all operating system versions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                7.2 Maintenance
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Perform scheduled maintenance</li>
                <li>Temporarily suspend the Service for updates</li>
                <li>Modify features with reasonable notice</li>
              </ul>
            </motion.section>

            {/* Section 8 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-blue-600" />
                8. Limitation of Liability
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                8.1 Exclusions
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the extent permitted by law, we exclude liability for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Loss of profit or indirect damages</li>
                <li>
                  Data loss (except in cases of willful misconduct or gross
                  negligence)
                </li>
                <li>Malfunctions due to third parties (OS, connectivity)</li>
                <li>Consequences arising from improper use of the App</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                8.2 Liability Cap
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our total liability shall never exceed the amount paid for the
                Service in the preceding 12 months.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                8.3 User Responsibilities
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Accuracy of entered data</li>
                <li>Compliance with applicable regulations</li>
                <li>Additional backups of your data</li>
                <li>Consequences of improper use of the Service</li>
              </ul>
            </motion.section>

            {/* Section 9 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Indemnification
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to indemnify and hold harmless us and our suppliers
                from any claims, losses, or damages arising from:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Violation of these Terms</li>
                <li>Improper use of the Service</li>
                <li>Violation of third-party rights</li>
                <li>Non-compliance with laws or regulations</li>
              </ul>
            </motion.section>

            {/* Section 10 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Subscription Plans and Payments
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                10.1 In-App Subscriptions
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                HostPilot offers in-app subscription plans, including a Pro plan
                with enhanced features. By subscribing, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Pay the subscription fees as displayed in the App</li>
                <li>
                  Automatic renewal unless cancelled before the renewal date
                </li>
                <li>
                  Payments are processed through the App Store or Google Play
                  Store
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                10.2 Refund Policy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Refund requests are subject to the policies of the App Store or
                Google Play Store. We do not directly process refunds for in-app
                subscriptions.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                10.3 Subscription Cancellation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You may cancel your subscription at any time through your App
                Store or Google Play Store account settings. Cancellation will
                take effect at the end of the current billing period.
              </p>
            </motion.section>

            {/* Section 11 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Modifications to Terms
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                11.1 Right to Modify
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                11.2 Notice of Changes
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Changes will be communicated via:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>In-app notification</li>
                <li>Email (if available)</li>
                <li>Publication of new version</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                11.3 Acceptance
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Continued use of the App after changes constitutes acceptance of
                the new Terms.
              </p>
            </motion.section>

            {/* Section 12 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. Termination and Suspension
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                12.1 Termination by You
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You may cease using the Service at any time by deleting the App
                and requesting account deletion.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                12.2 Termination by Us
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may suspend or terminate your access in case of:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal use</li>
                <li>Non-payment (if applicable)</li>
                <li>Prolonged account inactivity</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                12.3 Effects of Termination
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Upon termination:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Your right to use the App will cease</li>
                <li>
                  We will proceed with data deletion according to the Privacy
                  Policy
                </li>
                <li>Clauses that are permanent by nature will survive</li>
              </ul>
            </motion.section>

            {/* Section 13 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                13. Dispute Resolution
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                13.1 Governing Law
              </h3>
              <p className="text-gray-700 leading-relaxed">
                These Terms are governed by Italian law.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                13.2 Attempt at Settlement
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Before resorting to legal action, the parties agree to attempt
                an amicable resolution of the dispute.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                13.3 Competent Court
              </h3>
              <p className="text-gray-700 leading-relaxed">
                For disputes not resolved amicably, the competent court shall be
                exclusively the Court of the consumer's place of residence (if
                applicable) or the Court of Cesena, Italy.
              </p>
            </motion.section>

            {/* Section 14 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                14. General Provisions
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                14.1 Entire Agreement
              </h3>
              <p className="text-gray-700 leading-relaxed">
                These Terms, together with the Privacy Policy, constitute the
                complete agreement between the parties.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                14.2 Severability
              </h3>
              <p className="text-gray-700 leading-relaxed">
                If a clause is declared null or unenforceable, the remaining
                provisions shall remain in effect.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                14.3 Waiver
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Failure to enforce a provision does not constitute a waiver of
                the right to enforce it in the future.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                14.4 Assignment
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You may not assign rights or obligations arising from these
                Terms without our written consent.
              </p>
            </motion.section>

            {/* Section 15 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                15. Definitions
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>App/Service:</strong> The HostPilot application and
                  all related services
                </li>
                <li>
                  <strong>User/You:</strong> The natural or legal person using
                  the App
                </li>
                <li>
                  <strong>Data:</strong> All information entered or processed
                  through the App
                </li>
                <li>
                  <strong>OTA:</strong> Online Travel Agency (Airbnb,
                  Booking.com, etc.)
                </li>
                <li>
                  <strong>Property:</strong> Real estate property managed
                  through the App
                </li>
              </ul>
            </motion.section>

            {/* Section 16 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                16. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions regarding these Terms:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <p className="text-gray-700">
                  <strong>Service Provider:</strong> Elia Zavatta
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@eliazavatta.it"
                    className="text-blue-600 hover:underline"
                  >
                    info@eliazavatta.it
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Legal Email:</strong>{" "}
                  <a
                    href="mailto:info@eliazavatta.it"
                    className="text-blue-600 hover:underline"
                  >
                    info@eliazavatta.it
                  </a>
                </p>
              </div>
            </motion.section>

            {/* Section 17 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                17. Version History
              </h2>
              <p className="text-gray-700">
                <strong>Version:</strong> 1.0
              </p>
              <p className="text-gray-700">
                <strong>Last Revised:</strong> September 8, 2025
              </p>
              <p className="text-gray-700">
                <strong>Previous Terms:</strong> N/A (first version)
              </p>
            </motion.section>

            <motion.div
              className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-center text-gray-800 font-medium">
                By using HostPilot, you confirm that you have read, understood,
                and fully accepted these Terms and Conditions of Service.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button
              onClick={() => navigate("/hostpilot")}
              className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Hostpilot
            </Button>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default HostpilotTerms;

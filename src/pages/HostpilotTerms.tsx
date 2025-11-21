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
    title: "End User License Agreement - Hostpilot",
    description:
      "Read HostPilot's End User License Agreement (EULA). Learn about licensing terms, user rights, service usage, data processing, and legal terms for our vacation rental management platform.",
    keywords: [
      "Hostpilot EULA",
      "end user license agreement",
      "terms of service",
      "legal terms",
      "vacation rental terms",
      "service agreement",
    ],
    canonicalUrl: "https://eliazavatta.it/hostpilot/terms",
    og: {
      title: "End User License Agreement - Hostpilot",
      description:
        "End User License Agreement for HostPilot vacation rental management platform.",
      url: "https://eliazavatta.it/hostpilot/terms",
      type: "article",
      image: "https://eliazavatta.it/hostpilot.svg",
      locale: "en_US",
      site_name: "Hostpilot",
    },
  });

  useEffect(() => {
    // Redirect to Apple's standard EULA
    window.location.href =
      "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";
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
              End User License Agreement
            </h1>
          </div>

          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> September 8, 2025
          </p>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
            <p className="text-gray-800 leading-relaxed mb-4">
              <strong>Important Notice:</strong> HostPilot is licensed, not
              sold, to you. By downloading, installing, or using the HostPilot
              application ("Licensed Application"), you accept and agree to be
              bound by the terms of this End User License Agreement ("EULA"). If
              you do not agree to these terms, do not download, install, or use
              the Licensed Application.
            </p>
            <p className="text-gray-800 leading-relaxed">
              This EULA incorporates by reference Apple's standard End User
              License Agreement (EULA) for Licensed Applications, available at{" "}
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold"
              >
                https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
              </a>
              . The following terms supplement and, where applicable, supersede
              the standard Apple EULA to address the specific features and
              requirements of the HostPilot application.
            </p>
          </div>

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
                1. License Grant
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                1.1 Scope of License
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Subject to your compliance with this EULA, Elia Zavatta
                ("Licensor") grants you a limited, non-exclusive,
                non-transferable, revocable license to download, install, and
                use the Licensed Application on any Apple-branded or Android
                device that you own or control, strictly in accordance with the
                Licensed Application's documentation and the Usage Rules set
                forth in the App Store Terms of Service or Google Play Terms of
                Service.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                1.2 License Restrictions
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">You may not:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Copy, modify, or create derivative works of the Licensed
                  Application
                </li>
                <li>
                  Distribute, transfer, sublicense, lease, lend, or rent the
                  Licensed Application
                </li>
                <li>
                  Reverse engineer, decompile, disassemble, or attempt to derive
                  the source code
                </li>
                <li>
                  Make the Licensed Application available over a network for use
                  by multiple devices simultaneously
                </li>
                <li>
                  Remove, alter, or obscure any proprietary notices on the
                  Licensed Application
                </li>
                <li>
                  Use the Licensed Application for any illegal purpose or in
                  violation of any applicable laws
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                The foregoing restrictions apply except to the extent prohibited
                by applicable law or to the extent permitted by licensing terms
                governing any open-source components included with the Licensed
                Application.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                1.3 Reservation of Rights
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Licensor reserves all rights in and to the Licensed Application
                not expressly granted to you under this EULA. The Licensed
                Application is licensed, not sold.
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
                2. Consent to Use of Data
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                2.1 Technical Data Collection
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree that Licensor may collect and use technical data and
                related information—including but not limited to technical
                information about your device, system and application software,
                and peripherals—that is gathered periodically to facilitate the
                provision of software updates, product support, and other
                services to you related to the Licensed Application.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                2.2 Use of Information
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Licensor may use this information, as long as it is in a form
                that does not personally identify you, to improve its products
                or to provide services or technologies to you. For more details
                on data processing, please refer to our{" "}
                <button
                  onClick={() => navigate("/hostpilot/privacy")}
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Privacy Policy
                </button>
                .
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. External Services and Third-Party Content
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                3.1 Access to External Services
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Licensed Application may enable access to Licensor's and/or
                third-party services and websites, including but not limited to
                Airbnb, Booking.com, and other OTA platforms (collectively and
                individually, "External Services"). You agree to use the
                External Services at your sole risk.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                3.2 Disclaimer for External Services
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Licensor is not responsible for examining or evaluating the
                content or accuracy of any third-party External Services, and
                shall not be liable for any such third-party External Services.
                Data displayed by the Licensed Application or External Services,
                including but not limited to financial, booking, and location
                information, is for general informational purposes only and is
                not guaranteed by Licensor.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                3.3 Restrictions on External Services
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree that:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  You will not use External Services in any manner inconsistent
                  with this EULA
                </li>
                <li>
                  You will not infringe intellectual property rights of Licensor
                  or any third party
                </li>
                <li>
                  You will not harass, abuse, stalk, threaten, or defame any
                  person or entity
                </li>
                <li>
                  Licensor is not responsible for your use of External Services
                </li>
                <li>
                  External Services may not be available in all languages or
                  locations
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Licensor reserves the right to change, suspend, remove, disable,
                or impose access restrictions or limits on any External Services
                at any time without notice or liability to you.
              </p>
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
                4. NO WARRANTY
              </h2>

              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-4">
                <p className="text-gray-800 leading-relaxed font-semibold mb-4">
                  YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT USE OF THE LICENSED
                  APPLICATION IS AT YOUR SOLE RISK.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE
                  LICENSED APPLICATION AND ANY SERVICES PERFORMED OR PROVIDED BY
                  THE LICENSED APPLICATION ARE PROVIDED "AS IS" AND "AS
                  AVAILABLE," WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND,
                  AND LICENSOR HEREBY DISCLAIMS ALL WARRANTIES AND CONDITIONS
                  WITH RESPECT TO THE LICENSED APPLICATION AND ANY SERVICES,
                  EITHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING, BUT NOT
                  LIMITED TO, THE IMPLIED WARRANTIES AND/OR CONDITIONS OF
                  MERCHANTABILITY, OF SATISFACTORY QUALITY, OF FITNESS FOR A
                  PARTICULAR PURPOSE, OF ACCURACY, OF QUIET ENJOYMENT, AND OF
                  NONINFRINGEMENT OF THIRD-PARTY RIGHTS.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY LICENSOR OR
                ITS AUTHORIZED REPRESENTATIVE SHALL CREATE A WARRANTY. SHOULD
                THE LICENSED APPLICATION OR SERVICES PROVE DEFECTIVE, YOU ASSUME
                THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR, OR
                CORRECTION.
              </p>

              <p className="text-gray-700 leading-relaxed italic">
                SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED
                WARRANTIES OR LIMITATIONS ON APPLICABLE STATUTORY RIGHTS OF A
                CONSUMER, SO THE ABOVE EXCLUSION AND LIMITATIONS MAY NOT APPLY
                TO YOU.
              </p>
            </motion.section>

            {/* Section 5 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-blue-600" />
                5. Limitation of Liability
              </h2>

              <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-4">
                <p className="text-gray-700 leading-relaxed mb-4">
                  TO THE EXTENT NOT PROHIBITED BY LAW, IN NO EVENT SHALL
                  LICENSOR BE LIABLE FOR PERSONAL INJURY OR ANY INCIDENTAL,
                  SPECIAL, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER,
                  INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS,
                  LOSS OF DATA, BUSINESS INTERRUPTION, OR ANY OTHER COMMERCIAL
                  DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF OR
                  INABILITY TO USE THE LICENSED APPLICATION, HOWEVER CAUSED,
                  REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT, OR
                  OTHERWISE) AND EVEN IF LICENSOR HAS BEEN ADVISED OF THE
                  POSSIBILITY OF SUCH DAMAGES.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                In no event shall Licensor's total liability to you for all
                damages (other than as may be required by applicable law in
                cases involving personal injury) exceed the amount of fifty
                dollars ($50.00). The foregoing limitations will apply even if
                the above stated remedy fails of its essential purpose.
              </p>

              <p className="text-gray-700 leading-relaxed italic">
                SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OF LIABILITY FOR
                PERSONAL INJURY, OR OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO
                THIS LIMITATION MAY NOT APPLY TO YOU.
              </p>
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
                6. Termination
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                This EULA is effective until terminated by you or Licensor. Your
                rights under this EULA will terminate automatically without
                notice from Licensor if you fail to comply with any term(s) of
                this EULA.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Upon termination of this EULA, you shall cease all use of the
                Licensed Application and delete all copies, full or partial, of
                the Licensed Application from your devices.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Sections 4, 5, 7, 8, 9, and 10 of this EULA shall survive any
                termination.
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
                7. Export Control
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                You may not use or otherwise export or re-export the Licensed
                Application except as authorized by United States law and the
                laws of the jurisdiction in which the Licensed Application was
                obtained.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                In particular, but without limitation, the Licensed Application
                may not be exported or re-exported:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Into any U.S.-embargoed countries</li>
                <li>
                  To anyone on the U.S. Treasury Department's Specially
                  Designated Nationals List
                </li>
                <li>
                  To anyone on the U.S. Department of Commerce Denied Persons
                  List or Entity List
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mt-4">
                By using the Licensed Application, you represent and warrant
                that:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>You are not located in any embargoed country</li>
                <li>You are not on any prohibited parties list</li>
                <li>
                  You will not use the Licensed Application for any purposes
                  prohibited by law, including the development, design,
                  manufacture, or production of nuclear, missile, or chemical or
                  biological weapons
                </li>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. U.S. Government End Users
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                The Licensed Application and related documentation are
                "Commercial Items", as that term is defined at 48 C.F.R. §2.101,
                consisting of "Commercial Computer Software" and "Commercial
                Computer Software Documentation", as such terms are used in 48
                C.F.R. §12.212 or 48 C.F.R. §227.7202, as applicable.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Consistent with 48 C.F.R. §12.212 or 48 C.F.R. §227.7202-1
                through 227.7202-4, as applicable, the Commercial Computer
                Software and Commercial Computer Software Documentation are
                being licensed to U.S. Government end users (a) only as
                Commercial Items and (b) with only those rights as are granted
                to all other end users pursuant to the terms and conditions
                herein. Unpublished-rights reserved under the copyright laws of
                the United States.
              </p>
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
                9. Governing Law and Jurisdiction
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                9.1 General Provisions
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                This EULA and the relationship between you and Licensor shall be
                governed by the laws of Italy, excluding its conflicts of law
                provisions. Specifically excluded from application to this EULA
                is the United Nations Convention on the International Sale of
                Goods.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                9.2 European Union Users
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are a citizen of any European Union country, Switzerland,
                Norway, or Iceland, the governing law and forum shall be the
                laws and courts of your usual place of residence.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                9.3 Dispute Resolution
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Any dispute or claim arising from this EULA shall be subject to
                the non-exclusive jurisdiction of the courts of Cesena, Italy,
                or, if you are a consumer residing in the European Union, the
                courts of your place of residence.
              </p>
            </motion.section>

            {/* Section 10 */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-600" />
                10. Additional Terms and Conditions
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                10.1 Service Description
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
                  Synchronization with OTA platforms (Airbnb, Booking.com, etc.)
                </li>
                <li>Financial reporting and statistics</li>
                <li>Data backup and synchronization</li>
                <li>In-app subscriptions for Pro plan features</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                10.2 Eligibility and Account Responsibilities
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To use the Licensed Application, you must:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Be of legal age (at least 18 years old)</li>
                <li>
                  Be an owner or authorized manager of short-term rental
                  properties
                </li>
                <li>Provide accurate information during registration</li>
                <li>
                  Maintain the confidentiality of your account credentials
                </li>
                <li>Be responsible for all activities under your account</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                10.3 Prohibited Uses
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                In addition to the restrictions in Section 1.2, you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Use the Licensed Application for illegal activities</li>
                <li>Enter false or misleading data</li>
                <li>
                  Attempt to breach system security or access unauthorized areas
                </li>
                <li>
                  Use the Licensed Application for purposes other than property
                  management
                </li>
                <li>
                  Share, resell, or sublicense access to the Licensed
                  Application
                </li>
                <li>Use unauthorized bots or automated systems</li>
                <li>
                  Interfere with the proper functioning of the Licensed
                  Application
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                10.4 Guest Data and Privacy Responsibilities
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a property manager using the Licensed Application, you
                acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  You are the independent data controller for guest data you
                  collect and process
                </li>
                <li>
                  You are responsible for informing guests about data processing
                  activities
                </li>
                <li>
                  You must comply with applicable privacy regulations (GDPR,
                  CCPA, etc.)
                </li>
                <li>
                  You are responsible for obtaining necessary consents from
                  guests
                </li>
                <li>
                  You must comply with local guest registration and reporting
                  regulations
                </li>
                <li>
                  You are responsible for the accuracy and legality of data you
                  enter
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                10.5 Subscription Plans and In-App Purchases
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                HostPilot offers subscription plans, including a Pro plan with
                enhanced features. By subscribing, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Pay the subscription fees as displayed in the Licensed
                  Application
                </li>
                <li>
                  Automatic renewal unless cancelled before the renewal date
                </li>
                <li>
                  Payment processing through App Store, Google Play Store, or
                  other authorized payment processors
                </li>
                <li>
                  Subscription terms and pricing may change with reasonable
                  notice
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Refund requests for in-app subscriptions are subject to the
                policies of the App Store or Google Play Store. You may cancel
                your subscription at any time through your app store account
                settings. Cancellation will take effect at the end of the
                current billing period.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                10.6 Intellectual Property
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Licensed Application, including its design, code, logo,
                trademarks, and content, is protected by intellectual property
                rights owned by Licensor. You retain ownership of the data you
                enter into the Licensed Application. By using the Licensed
                Application, you grant Licensor a limited license to process
                your data for the purpose of providing the services.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                10.7 Service Availability and Modifications
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                While Licensor strives to maintain service availability, we do
                not guarantee:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Continuous 24/7 availability without interruption</li>
                <li>Absence of downtime for maintenance or updates</li>
                <li>
                  Compatibility with all operating system versions or devices
                </li>
                <li>Availability in all geographic locations</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Licensor reserves the right to modify, suspend, or discontinue
                any features of the Licensed Application with or without notice.
                We will provide reasonable notice for material changes when
                feasible.
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
                11. Modifications to EULA
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Licensor reserves the right to modify this EULA at any time. We
                will notify you of material changes through:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>In-app notifications</li>
                <li>
                  Email notifications (if you have provided an email address)
                </li>
                <li>
                  Publication of the updated EULA in the Licensed Application
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mt-4">
                Your continued use of the Licensed Application after such
                modifications constitutes your acceptance of the modified EULA.
                If you do not agree to the modified terms, you must cease using
                the Licensed Application and delete it from your devices.
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
                12. Third-Party Beneficiaries
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Apple Inc., Google LLC, and their respective subsidiaries (as
                applicable, depending on the platform from which you obtained
                the Licensed Application) are third-party beneficiaries of this
                EULA.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Upon your acceptance of this EULA, the applicable third-party
                beneficiary will have the right (and will be deemed to have
                accepted the right) to enforce this EULA against you as a
                third-party beneficiary thereof.
              </p>
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
                13. General Provisions
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                13.1 Entire Agreement
              </h3>
              <p className="text-gray-700 leading-relaxed">
                This EULA, together with the Privacy Policy, constitutes the
                entire agreement between you and Licensor regarding the Licensed
                Application and supersedes all prior agreements and
                understandings, whether written or oral.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                13.2 Severability
              </h3>
              <p className="text-gray-700 leading-relaxed">
                If any provision of this EULA is found to be unenforceable or
                invalid by a court of competent jurisdiction, that provision
                shall be limited or eliminated to the minimum extent necessary
                so that this EULA shall otherwise remain in full force and
                effect and enforceable.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                13.3 Waiver
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No waiver of any term of this EULA shall be deemed a further or
                continuing waiver of such term or any other term, and Licensor's
                failure to assert any right or provision under this EULA shall
                not constitute a waiver of such right or provision.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                13.4 Assignment
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You may not assign or transfer this EULA or any rights granted
                hereunder, by operation of law or otherwise, without Licensor's
                prior written consent. Any attempted assignment in violation of
                this section shall be void. Licensor may assign this EULA
                without restriction.
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
                14. Definitions
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Licensed Application:</strong> The HostPilot mobile
                  and web application, including all updates, upgrades, and
                  related services
                </li>
                <li>
                  <strong>Licensor:</strong> Elia Zavatta, the developer and
                  provider of the Licensed Application
                </li>
                <li>
                  <strong>User/You:</strong> The natural or legal person who
                  downloads, installs, or uses the Licensed Application
                </li>
                <li>
                  <strong>External Services:</strong> Third-party services,
                  platforms, and websites accessible through or integrated with
                  the Licensed Application
                </li>
                <li>
                  <strong>OTA:</strong> Online Travel Agency, including but not
                  limited to Airbnb, Booking.com, Vrbo, and Expedia
                </li>
                <li>
                  <strong>EULA:</strong> This End User License Agreement
                </li>
                <li>
                  <strong>Usage Rules:</strong> The terms and conditions set
                  forth by Apple's App Store or Google's Play Store governing
                  the use of applications distributed through their platforms
                </li>
              </ul>
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
                15. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions, concerns, or requests regarding this EULA, please
                contact:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <p className="text-gray-700">
                  <strong>Licensor:</strong> Elia Zavatta
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
                <p className="text-gray-700 mt-4">
                  <strong>Privacy Policy:</strong>{" "}
                  <button
                    onClick={() => navigate("/hostpilot/privacy")}
                    className="text-blue-600 hover:underline"
                  >
                    View Privacy Policy
                  </button>
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://eliazavatta.it"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://eliazavatta.it
                  </a>
                </p>
              </div>
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
                16. Version History
              </h2>
              <p className="text-gray-700">
                <strong>Version:</strong> 1.0
              </p>
              <p className="text-gray-700">
                <strong>Effective Date:</strong> September 8, 2025
              </p>
              <p className="text-gray-700">
                <strong>Last Revised:</strong> September 8, 2025
              </p>
              <p className="text-gray-700">
                <strong>Previous Version:</strong> N/A (initial version)
              </p>
            </motion.section>

            <motion.div
              className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-center text-gray-800 font-medium mb-4">
                By downloading, installing, or using HostPilot, you acknowledge
                that you have read, understood, and agree to be bound by this
                End User License Agreement.
              </p>
              <p className="text-center text-sm text-gray-600">
                If you do not agree to these terms, do not download, install, or
                use the Licensed Application.
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

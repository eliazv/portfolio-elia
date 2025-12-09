import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const ScadenzarioPrivacy: React.FC = () => {
  const navigate = useNavigate();

  useSEO({
    title: "Privacy Policy - Scadenzario",
    description:
      "Informativa sulla privacy dell'app Scadenzario per la gestione di scadenze e promemoria.",
    canonicalUrl: "https://www.eliazavatta.it/scadenzario/privacy",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-blue-100">
      <Header />

      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8 hover:bg-indigo-100"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Torna indietro
        </Button>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-blue-400 bg-clip-text text-transparent">
            Privacy Policy - Scadenzario
          </h1>

          <p className="text-sm text-gray-500 mb-8 italic">
            Last updated: October 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              This Privacy Policy explains how <strong>Scadenzario</strong>{" "}
              ("the App", "we", "our", "us") collects, stores, and protects your
              data when you use the application.
            </p>

            <p className="text-gray-700 mb-6">
              Scadenzario is developed and managed by{" "}
              <strong>Elia Zavatta</strong>, based in Italy.
            </p>

            <p className="text-gray-700 mb-6">
              For any questions, please contact:{" "}
              <a
                href="mailto:info@eliazavatta.it"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                info@eliazavatta.it
              </a>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Overview
            </h2>
            <p className="text-gray-700 mb-6">
              Scadenzario is a productivity app designed to help users manage
              deadlines, bills, reminders, and personal tasks. The App is built
              with privacy in mind: all personal information is stored locally
              on your device unless you explicitly enable cloud backup or
              synchronization.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Data Collected
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              2.1 User Data You Provide
            </h3>
            <p className="text-gray-700 mb-4">
              The App may store the following information locally on your
              device:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Deadlines, reminders, notes, and categories you create</li>
              <li>Dates, titles, and descriptions of your events</li>
              <li>Attached files or images you manually upload</li>
              <li>Notification settings and reminder preferences</li>
            </ul>
            <p className="text-gray-700 mb-6">
              This data <strong>never leaves your device</strong> unless you use
              optional features such as cloud backup.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              2.2 Automatically Collected Data
            </h3>
            <p className="text-gray-700 mb-6">
              Scadenzario does <strong>not</strong> collect personally
              identifiable information automatically. The App does not track
              user behavior, usage analytics, or device identifiers. Basic
              anonymous crash information may be collected by Apple or Google
              (depending on your device) to improve system stability.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Optional Cloud Sync and Backup
            </h2>
            <p className="text-gray-700 mb-4">
              If you enable synchronization or backup to a third-party service
              (e.g., <strong>Google Drive</strong>
              or <strong>Firebase Cloud Firestore</strong>, when available):
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Your data will be transmitted securely via HTTPS</li>
              <li>
                The information will remain linked to your personal Google or
                Apple account
              </li>
              <li>
                The developer does <strong>not</strong> have direct access to
                your cloud data
              </li>
            </ul>
            <p className="text-gray-700 mb-6">
              Disabling cloud sync immediately stops data transfer. You can
              delete your cloud data anytime through your account provider.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Local Storage
            </h2>
            <p className="text-gray-700 mb-6">
              All data is stored locally on your device using secure storage
              (SQLite / Hive database). Deleting the App will remove all local
              data unless you have made a backup beforehand.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Notifications
            </h2>
            <p className="text-gray-700 mb-6">
              The App uses <strong>local notifications</strong> to remind you of
              upcoming deadlines. Notifications are generated on-device based on
              the reminders you set. No notification data or scheduling
              information is transmitted externally.
            </p>
            <p className="text-gray-700 mb-6">
              You can manage or disable notifications anytime in your device
              settings:
              <br />
              <strong>Settings &gt; Notifications &gt; Scadenzario</strong>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              6. File Uploads
            </h2>
            <p className="text-gray-700 mb-6">
              If you attach documents or images to your reminders, those files
              are stored locally or in your personal cloud (if enabled). The App
              does not access your photo library or files without explicit
              permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              7. Advertising and Analytics
            </h2>
            <p className="text-gray-700 mb-6">
              The free version of Scadenzario may display banner or interstitial
              ads provided by <strong>Google AdMob</strong>. AdMob may collect
              anonymous identifiers (such as advertising ID) to deliver relevant
              ads. No personal reminder data or file information is shared with
              advertisers.
            </p>
            <p className="text-gray-700 mb-4">
              For details, please see Google's Privacy Policy:
            </p>
            <p className="text-gray-700 mb-6">
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                https://policies.google.com/privacy
              </a>
            </p>
            <p className="text-gray-700 mb-6">
              The App does <strong>not</strong> use third-party analytics tools
              like Firebase Analytics or App Tracking Transparency identifiers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              8. Data Security
            </h2>
            <p className="text-gray-700 mb-4">
              We implement technical measures to protect data stored on your
              device:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Local database encryption where supported</li>
              <li>Secure HTTPS connections for all cloud communications</li>
              <li>No sharing of data with unauthorized parties</li>
            </ul>
            <p className="text-gray-700 mb-6">
              However, you are responsible for securing your device and backups.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              9. User Rights (GDPR)
            </h2>
            <p className="text-gray-700 mb-4">
              If you reside in the European Union, you have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Access, modify, or delete your personal data</li>
              <li>Withdraw consent for optional cloud synchronization</li>
              <li>Request permanent deletion of any stored cloud data</li>
            </ul>
            <p className="text-gray-700 mb-6">
              To exercise these rights, contact{" "}
              <a
                href="mailto:info@eliazavatta.it"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                info@eliazavatta.it
              </a>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              10. Children's Privacy
            </h2>
            <p className="text-gray-700 mb-6">
              Scadenzario is not intended for children under 13 years of age. We
              do not knowingly collect or store data from minors.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              11. Third-Party Services Summary
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-indigo-50">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                      Service
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                      Purpose
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-800">
                      Data Shared
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      Apple Push Notifications / iOS Local Notifications
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      Local reminders
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      None sent externally
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      Google AdMob
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      Display non-personalized ads
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      Advertising ID
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      Google Drive / Firebase Cloud Firestore (optional)
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      Cloud backup / sync
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-gray-700">
                      Reminder content (if enabled by user)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              12. Changes to This Policy
            </h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time to reflect
              feature updates or legal requirements. The latest version will
              always be available in the App Store listing and on our official
              website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              13. Contact Information
            </h2>
            <p className="text-gray-700 mb-2">
              For privacy requests or support inquiries:
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@eliazavatta.it"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                info@eliazavatta.it
              </a>
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Developer:</strong> Elia Zavatta
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Website:</strong>{" "}
              <a
                href="https://eliazavatta.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                https://eliazavatta.it
              </a>
            </p>

            <p className="text-sm text-gray-500 italic mt-8">
              Document version 2.0 – Updated October 2025
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ScadenzarioPrivacy;

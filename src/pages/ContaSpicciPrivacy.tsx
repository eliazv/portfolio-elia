import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const ContaSpicciPrivacy: React.FC = () => {
  const navigate = useNavigate();

  useSEO({
    title: "Privacy Policy - ContaSpicci",
    description: "Informativa sulla privacy dell'app ContaSpicci.",
    canonicalUrl: "https://www.eliazavatta.it/contaspicci/privacy",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />

      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8 hover:bg-emerald-100"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Torna indietro
        </Button>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-500 to-lime-400 bg-clip-text text-transparent">
            Privacy Policy - ContaSpicci
          </h1>

          <p className="text-sm text-gray-500 mb-8 italic">
            Effective Date: September 1, 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              This Privacy Policy describes how ContasPicci ("we," "us," or
              "our") collects, uses, and discloses your information when you use
              our mobile application (the "App").
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-700 mb-6">
              We do not collect any personally identifiable information from our
              users. The App is designed to function offline and does not
              transmit any user data to our servers or third parties.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-6">
              Since we do not collect any personal information, we do not use
              your information for any purpose.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Data Storage
            </h2>
            <p className="text-gray-700 mb-6">
              All data you enter into the App (e.g., financial transactions,
              account details) is stored locally on your device. We do not have
              access to this data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-700 mb-6">
              The App does not integrate with any third-party services that
              collect user data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-700 mb-6">
              Our App is not intended for children under the age of 13. We do
              not knowingly collect personally identifiable information from
              children under 13. If you are a parent or guardian and you are
              aware that your child has provided us with personal information,
              please contact us.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Consent
            </h2>
            <p className="text-gray-700 mb-6">
              By using our App, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Data Security
            </h2>
            <p className="text-gray-700 mb-6">
              While we do not collect or store your data, we encourage you to
              take steps to protect your device and data, such as using strong
              passwords and enabling device encryption.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Third-Party Links
            </h2>
            <p className="text-gray-700 mb-6">
              Our App may contain links to other websites or services that are
              not operated by us. If you click on a third-party link, you will
              be directed to that third party's site. We strongly advise you to
              review the Privacy Policy of every site you visit. We have no
              control over and assume no responsibility for the content, privacy
              policies, or practices of any third-party sites or services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 mb-6">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:zavattaelia@gmail.com"
                className="text-emerald-600 hover:text-emerald-700 font-medium"
              >
                zavattaelia@gmail.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContaSpicciPrivacy;

import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Globe, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-emerald-400" />
            <span className="md:text-2xl font-bold text-white">BluechipTrade</span>
          </div>
          <Link to="/register">
            <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Registration
            </Button>
          </Link>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-3xl text-white">Privacy Policy</CardTitle>
            <p className="text-slate-300">Last updated: December 2024</p>
          </CardHeader>
          <CardContent className="space-y-6 text-slate-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
              <p>
                We collect personal information you provide when registering, including your name, email address, phone number, and financial information necessary for investment services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
              <p>
                Your information is used to provide investment services, process transactions, verify your identity, communicate with you, and comply with legal requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Information Sharing</h2>
              <p>
                We do not sell or rent your personal information to third parties. We may share information with service providers, regulatory authorities, or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Data Security</h2>
              <p>
                We implement industry-standard security measures including encryption, secure servers, and regular security audits to protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Cookies and Tracking</h2>
              <p>
                Our platform uses cookies and similar technologies to enhance user experience, analyze usage patterns, and provide personalized content.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal information. You may also opt out of marketing communications at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Data Retention</h2>
              <p>
                We retain your information for as long as necessary to provide services and comply with legal obligations, typically for 7 years after account closure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. International Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Changes to Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically. We will notify you of significant changes via email or platform notifications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Contact Us</h2>
              <p>
                For questions about this Privacy Policy or your personal information, contact us at privacy@bluechiпtrade.com or through our support system.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;

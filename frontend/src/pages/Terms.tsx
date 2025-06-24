import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Globe, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
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
            <CardTitle className="text-3xl text-white">Terms of Service</CardTitle>
            <p className="text-slate-300">Last updated: December 2024</p>
          </CardHeader>
          <CardContent className="space-y-6 text-slate-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using BluechipTrade's investment platform, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Investment Services</h2>
              <p>
                BluechipTrade provides investment opportunities in foreign exchange currency index funds. All investments carry inherent risks, and past performance does not guarantee future results.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Risk Disclosure</h2>
              <p>
                Investing in foreign exchange markets involves substantial risk and may not be suitable for all investors. You should carefully consider your financial situation and risk tolerance before investing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Account Responsibilities</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Deposits and Withdrawals</h2>
              <p>
                All deposits and withdrawals are subject to our verification procedures. Withdrawal requests may take 1-5 business days to process.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Prohibited Activities</h2>
              <p>
                Users are prohibited from engaging in fraudulent activities, money laundering, or any activities that violate applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
              <p>
                BluechipTrade shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or platform notifications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Contact Information</h2>
              <p>
                For questions about these Terms of Service, please contact us at legal@bluechiптrade.com or through our support system.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;
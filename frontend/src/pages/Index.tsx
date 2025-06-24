import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Users,
  Globe,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does BluechipTrade work?",
      answer:
        "BluechipTrade allows you to invest in professionally managed currency index funds. Our expert team trades foreign exchange markets on your behalf, and you earn returns based on the performance of your chosen investment package.",
    },
    {
      question: "What are the minimum investment amounts?",
      answer:
        "Our Starter Fund requires a minimum investment of $100, Growth Fund starts at $1,000, and Premium Fund begins at $10,000. Each package is designed for different investment goals and risk appetites.",
    },
    {
      question: "How long are the investment periods?",
      answer:
        "Investment periods vary by package: Starter Fund (3 months), Growth Fund (6 months), and Premium Fund (12 months). You can track your investment progress in real-time through your dashboard.",
    },
    {
      question: "When can I withdraw my profits?",
      answer:
        "Profits are credited to your account based on your package terms. You can withdraw your profit balance at any time through the withdrawal section of your dashboard.",
    },
    {
      question: "Is my investment secure?",
      answer:
        "Yes, BluechipTrade uses bank-level security, is fully regulated, and maintains insurance coverage. Your funds are held in segregated accounts and protected by industry-standard security measures.",
    },
    {
      question: "How does the referral program work?",
      answer:
        "Earn commissions by referring friends to BluechipTrade. When your referrals make investments, you receive a percentage of their investment as a bonus in your profit balance.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-3 md:p-6 bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
        <div className="flex items-center space-x-3 md:space-x-8">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-emerald-400" />
            <span className="md:text-xl text-lg font-bold text-white">Bluechip Trade</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/dashboard" className="text-slate-300 hover:text-white">
              Dashboard
            </Link>
            <Link to="/packages" className="text-slate-300 hover:text-white">
              Packages
            </Link>
            <Link to="/deposit" className="text-slate-300 hover:text-white">
              Deposit
            </Link>
            <Link to="/referrals" className="text-slate-300 hover:text-white">
              Referrals
            </Link>
          </div>
        </div>
        <div className="flex items-center md:space-x-4 space-x-2">
          <Link to="/login">
            <Button
              variant="ghost"
              className="text-white md:text-base text-sm hover:text-emerald-400"
            >
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-emerald-600 md:text-base text-xs hover:bg-emerald-700 text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Invest in Foreign Exchange
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              {" "}
              Currency Index Funds
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Access professional forex investment opportunities with diversified
            currency index funds. Start building your international portfolio
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg"
              >
                Start Investing <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/packages">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800 px-8 py-6 text-lg"
              >
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 bg-slate-800/30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">
              $2.5B+
            </div>
            <div className="text-slate-300">Assets Under Management</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
            <div className="text-slate-300">Currency Pairs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-slate-300">Market Access</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">
              100K+
            </div>
            <div className="text-slate-300">Active Investors</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Why Choose BluechipTrade?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-emerald-400 mb-4" />
                <CardTitle className="text-white">
                  Professional Investment
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Access institutional-grade investment strategies and real-time
                  market data
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <Shield className="h-12 w-12 text-emerald-400 mb-4" />
                <CardTitle className="text-white">Secure & Regulated</CardTitle>
                <CardDescription className="text-slate-300">
                  Bank-level security with full regulatory compliance and
                  insurance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <Users className="h-12 w-12 text-emerald-400 mb-4" />
                <CardTitle className="text-white">Community Driven</CardTitle>
                <CardDescription className="text-slate-300">
                  Join thousands of investors and earn through our referral
                  program
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 backdrop-blur-sm"
              >
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-lg">
                      {faq.question}
                    </CardTitle>
                    <ChevronDown
                      className={`h-5 w-5 text-emerald-400 transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent>
                    <p className="text-slate-300">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Investing?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of investors who trust BluechipTrade with their
            investments
          </p>
          <Link to="/register">
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg font-semibold"
            >
              Create Account Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>
            &copy; 2024 BluechipTrade. All rights reserved. Investment involves
            risk.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

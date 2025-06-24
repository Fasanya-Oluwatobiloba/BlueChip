import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Globe, CheckCircle, TrendingUp, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: "Starter Fund",
      description: "Perfect for beginners entering forex trading",
      minInvestment: 100,
      maxInvestment: 1000,
      expectedReturn: "8-12%",
      duration: "3 months",
      riskLevel: "Low",
      features: [
        "Diversified currency basket",
        "24/7 monitoring",
        "Monthly reports",
        "Email support",
      ],
      popular: false,
      riskColor: "bg-green-500",
    },
    {
      id: 2,
      name: "Growth Fund",
      description: "Balanced portfolio for steady growth",
      minInvestment: 1000,
      maxInvestment: 10000,
      expectedReturn: "15-20%",
      duration: "6 months",
      riskLevel: "Medium",
      features: [
        "Advanced trading strategies",
        "Real-time notifications",
        "Quarterly dividends",
        "Priority support",
        "Portfolio analytics",
      ],
      popular: true,
      riskColor: "bg-yellow-500",
    },
    {
      id: 3,
      name: "Premium Fund",
      description: "High-yield opportunities for experienced traders",
      minInvestment: 10000,
      maxInvestment: 100000,
      expectedReturn: "25-35%",
      duration: "12 months",
      riskLevel: "High",
      features: [
        "Aggressive trading strategies",
        "Institutional-grade tools",
        "Weekly payouts",
        "Dedicated account manager",
        "Advanced analytics",
        "VIP support",
      ],
      popular: false,
      riskColor: "bg-red-500",
    },
    {
      id: 4,
      name: "Elite Fund",
      description: "Exclusive high-net-worth investment program",
      minInvestment: 100000,
      maxInvestment: 1000000,
      expectedReturn: "40-50%",
      duration: "18 months",
      riskLevel: "Very High",
      features: [
        "Exclusive strategies",
        "Personal trading desk",
        "Daily settlements",
        "Risk management team",
        "Custom portfolio",
        "White-glove service",
      ],
      popular: false,
      riskColor: "bg-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-3 fixed left-0 right-0 top-0 z-50 md:p-6 bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
        <div className="flex items-center space-x-3 md:space-x-8">
          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-emerald-400" />
            <span className="md:text-xl text-lg font-bold text-white">Bluechip Trade</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/dashboard" className="text-slate-300 hover:text-white">
              Dashboard
            </Link>
            <Link to="/packages" className="text-emerald-400 font-medium">
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
          <Link to="/register">
            <Button className="bg-emerald-600 md:text-base text-xs hover:bg-emerald-700 text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      <div className="p-4 md:p-6 mt-16">
        {/* Header */}
        <div className="text-center mb-12 mt-5">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Investment Packages
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Choose from our carefully crafted investment packages designed for
            different risk appetites and investment goals
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`bg-slate-800/50 border-slate-700 backdrop-blur-sm relative overflow-hidden ${
                pkg.popular ? "ring-2 ring-emerald-400" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-emerald-400 text-slate-900 px-3 py-1 text-sm font-semibold rounded-bl-lg">
                  <Star className="h-4 w-4 inline mr-1" />
                  Most Popular
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-white">
                    {pkg.name}
                  </CardTitle>
                  <Badge className={`${pkg.riskColor} text-white`}>
                    {pkg.riskLevel} Risk
                  </Badge>
                </div>
                <CardDescription className="text-slate-300 text-lg">
                  {pkg.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Investment Range */}
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <div className="text-center">
                    <div className="text-sm text-slate-400 mb-1">
                      Investment Range
                    </div>
                    <div className="text-2xl font-bold text-white">
                      ${pkg.minInvestment.toLocaleString()} - $
                      {pkg.maxInvestment.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Returns & Duration */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-slate-400 mb-1">
                      Expected Return
                    </div>
                    <div className="text-lg font-bold text-emerald-400 flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {pkg.expectedReturn}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-slate-400 mb-1">Duration</div>
                    <div className="text-lg font-bold text-white">
                      {pkg.duration}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <div className="text-sm font-semibold text-white mb-3">
                    Package Features:
                  </div>
                  <div className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center text-slate-300"
                      >
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  <Link to="/register">
                    <Button
                      className={`w-full ${
                        pkg.popular
                          ? "bg-emerald-600 hover:bg-emerald-700"
                          : "bg-slate-600 hover:bg-slate-500"
                      } text-white`}
                    >
                      Invest in {pkg.name}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="bg-slate-800/30 border-slate-700 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-slate-300 mb-6 text-lg">
                Join thousands of investors who trust ForexFund with their
                currency trading investments. All packages include comprehensive
                risk management and professional portfolio oversight.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
                  >
                    Create Account
                  </Button>
                </Link>
                <Link to="/login">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-600 text-white hover:bg-slate-800 px-8"
                  >
                    Already have an account?
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Packages;

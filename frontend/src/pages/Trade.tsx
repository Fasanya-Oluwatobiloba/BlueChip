import { useState, type SetStateAction } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  DollarSign,
  Calculator,
  CheckCircle,
  Bell,
  User,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { UserSidebar } from "../components/UserSidebar";

const Trade = () => {
  const [selectedPackage, setSelectedPackage] = useState("");
  const [amount, setAmount] = useState("");

  const availableBalance = 5250.0;

  const investmentPackages = [
    {
      id: "starter",
      name: "Starter Fund",
      description: "Perfect for beginners entering forex investment",
      minInvestment: 100,
      maxInvestment: 1000,
      expectedReturn: "8-12%",
      duration: "3 months",
      riskLevel: "Low",
      riskColor: "bg-green-500",
      features: [
        "Diversified currency basket",
        "24/7 monitoring",
        "Monthly reports",
      ],
    },
    {
      id: "growth",
      name: "Growth Fund",
      description: "Balanced portfolio for steady growth",
      minInvestment: 1000,
      maxInvestment: 10000,
      expectedReturn: "15-20%",
      duration: "6 months",
      riskLevel: "Medium",
      riskColor: "bg-yellow-500",
      features: [
        "Advanced investment strategies",
        "Real-time notifications",
        "Quarterly dividends",
      ],
    },
    {
      id: "premium",
      name: "Premium Fund",
      description: "High-yield opportunities for experienced investors",
      minInvestment: 10000,
      maxInvestment: 100000,
      expectedReturn: "25-35%",
      duration: "12 months",
      riskLevel: "High",
      riskColor: "bg-red-500",
      features: [
        "Aggressive investment strategies",
        "Institutional-grade tools",
        "Weekly payouts",
      ],
    },
  ];

  const selectedPackageData = investmentPackages.find(
    (pkg) => pkg.id === selectedPackage
  );

  const handleInvest = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Investment executed:", { selectedPackage, amount });
    // TODO: Implement actual investment logic
  };

  return (
    <SidebarProvider>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <UserSidebar/>
            <SidebarInset className="flex-1">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 md:p-6 fixed left-0 right-0 top-0 z-50 bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
        <div className="flex items-center space-x-3 md:space-x-8">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <SidebarTrigger className="text-white">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M3 12h18M3 6h18M3 18h18"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </SidebarTrigger>
          </div>

          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 md:h-8 md:w-8 text-emerald-400" />
            <span className="text-xl font-bold text-white">Bluechip Trade</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/dashboard" className="text-slate-300 hover:text-white">
              Dashboard
            </Link>
            <Link to="/trade" className="text-emerald-400 font-medium">
              Trade
            </Link>
            <Link to="/deposit" className="text-slate-300 hover:text-white">
              Deposit
            </Link>
            <Link to="/withdrawal" className="text-slate-300 hover:text-white">
              Withdraw
            </Link>
            <Link to="/referrals" className="text-slate-300 hover:text-white">
              Referrals
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-white">
            <Bell className="lg:h-6 lg:w-6 w-5 h-5" />
          </Button>
          <Link to="/profile">
            <div className="flex items-center space-x-2 text-white border-2 rounded-full p-2 border-green-600">
              <User className="h-5 w-5" />
            </div>
          </Link>
        </div>
      </nav>

      <div className="p-4 md:p-6 space-y-6 mt-20">
        {/* Balance Display */}
        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <DollarSign className="h-5 w-5 mr-2 text-emerald-400" />
              Available Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-emerald-400">
              ${availableBalance.toLocaleString()}
            </div>
            <p className="text-slate-400">Ready for investment</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Investment Panel */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Make Investment</CardTitle>
              <CardDescription className="text-slate-300">
                Choose an investment package and invest your funds
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleInvest} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="investment-package" className="text-white">
                    Investment Package
                  </Label>
                  <Select
                    value={selectedPackage}
                    onValueChange={setSelectedPackage}
                  >
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Select investment package" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-slate-600">
                      {investmentPackages.map((pkg) => (
                        <SelectItem
                          key={pkg.id}
                          value={pkg.id}
                          className="text-white hover:bg-slate-600"
                        >
                          {pkg.name} - {pkg.expectedReturn} ({pkg.duration})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedPackageData && (
                  <div className="bg-slate-700/50 p-4 rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">
                        {selectedPackageData.name}
                      </span>
                      <span
                        className={`px-2 py-1 rounded text-xs text-white ${selectedPackageData.riskColor}`}
                      >
                        {selectedPackageData.riskLevel} Risk
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm">
                      {selectedPackageData.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-slate-400">Expected Return:</span>
                        <div className="text-emerald-400 font-medium">
                          {selectedPackageData.expectedReturn}
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-400">Duration:</span>
                        <div className="text-white font-medium">
                          {selectedPackageData.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-white">
                    Investment Amount ($)
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e: {
                      target: { value: SetStateAction<string> };
                    }) => setAmount(e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    max={availableBalance}
                    min={selectedPackageData?.minInvestment || 10}
                  />
                  <p className="text-xs text-slate-400">
                    {selectedPackageData
                      ? `Min: $${selectedPackageData.minInvestment.toLocaleString()} | Max: $${Math.min(
                          selectedPackageData.maxInvestment,
                          availableBalance
                        ).toLocaleString()}`
                      : `Maximum: $${availableBalance.toLocaleString()}`}
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                  disabled={!selectedPackage || !amount}
                >
                  <Calculator className="h-4 w-4 mr-2" />
                  Make Investment
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Package Features */}
          {selectedPackageData && (
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Package Features</CardTitle>
                <CardDescription className="text-slate-300">
                  What's included with {selectedPackageData.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {selectedPackageData.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-slate-300"
                    >
                      <CheckCircle className="h-4 w-4 text-emerald-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white mb-2">
                      Investment Range
                    </div>
                    <div className="text-emerald-400 text-xl font-bold">
                      ${selectedPackageData.minInvestment.toLocaleString()} - $
                      {selectedPackageData.maxInvestment.toLocaleString()}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {!selectedPackageData && (
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Available Packages</CardTitle>
                <CardDescription className="text-slate-300">
                  Select a package to see details and features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {investmentPackages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="p-4 bg-slate-700/50 rounded-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-white">{pkg.name}</h3>
                        <span
                          className={`px-2 py-1 rounded text-xs text-white ${pkg.riskColor}`}
                        >
                          {pkg.riskLevel}
                        </span>
                      </div>
                      <p className="text-slate-300 text-sm mb-2">
                        {pkg.description}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-emerald-400 font-medium">
                          {pkg.expectedReturn}
                        </span>
                        <span className="text-slate-400">{pkg.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      </SidebarInset>
    </div>
    </SidebarProvider>
  );
};

export default Trade;

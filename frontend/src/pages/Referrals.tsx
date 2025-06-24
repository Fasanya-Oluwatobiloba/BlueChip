import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import {
  Globe,
  Users,
  Copy,
  Share2,
  DollarSign,
  Trophy,
  Gift,
  User,
  Bell,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../components/ui/sidebar";
import { UserSidebar } from "../components/UserSidebar";

const Referrals = () => {
  const [referralCode] = useState("FOREX-ABC123");
  const [referralLink] = useState(`https://forexfund.com/ref/${referralCode}`);

  const referralStats = {
    totalReferrals: 12,
    activeReferrals: 8,
    totalEarnings: 1250.5,
    thisMonthEarnings: 320.75,
  };

  const referralHistory = [
    {
      name: "John D.",
      joinDate: "2024-01-15",
      status: "Active",
      earnings: 125.0,
      level: "Level 1",
    },
    {
      name: "Sarah M.",
      joinDate: "2024-01-10",
      status: "Active",
      earnings: 95.5,
      level: "Level 1",
    },
    {
      name: "Mike R.",
      joinDate: "2024-01-08",
      status: "Inactive",
      earnings: 0,
      level: "Level 1",
    },
    {
      name: "Emily K.",
      joinDate: "2024-01-05",
      status: "Active",
      earnings: 200.75,
      level: "Level 2",
    },
  ];

  const commissionTiers = [
    { level: "Level 1", percentage: "10%", description: "Direct referrals" },
    {
      level: "Level 2",
      percentage: "5%",
      description: "Referrals of your referrals",
    },
    {
      level: "Level 3",
      percentage: "2%",
      description: "Third level referrals",
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    console.log("Copied to clipboard:", text);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <UserSidebar />

        <SidebarInset className="flex-1">
          {/* Navigation */}
          <nav className="flex items-center justify-between fixed left-0 right-0 top-0 z-50 p-4 md:p-6 bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
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
                <Globe className="h-8 w-8 text-emerald-400" />
                <span className="text-xl font-bold text-white">
                  BluechipTrade
                </span>
              </div>
              <div className="hidden md:flex space-x-6">
                <Link
                  to="/dashboard"
                  className="text-slate-300 hover:text-white"
                >
                  Dashboard
                </Link>
                <Link
                  to="/packages"
                  className="text-slate-300 hover:text-white"
                >
                  Packages
                </Link>
                <Link to="/deposit" className="text-slate-300 hover:text-white">
                  Deposit
                </Link>
                <Link
                  to="/referrals"
                  className="text-emerald-400 font-medium"
                >
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
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">
                Referral Program
              </h1>
              <p className="text-xl text-slate-300">
                Earn commissions by inviting friends to ForexFund
              </p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">
                    Total Referrals
                  </CardTitle>
                  <Users className="h-4 w-4 text-emerald-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    {referralStats.totalReferrals}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">
                    Active Referrals
                  </CardTitle>
                  <Trophy className="h-4 w-4 text-green-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    {referralStats.activeReferrals}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">
                    Total Earnings
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-emerald-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-emerald-400">
                    ${referralStats.totalEarnings}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">
                    This Month
                  </CardTitle>
                  <Gift className="h-4 w-4 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-emerald-400">
                    ${referralStats.thisMonthEarnings}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Referral Link */}
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Share2 className="h-5 w-5 text-emerald-400 mr-2" />
                    Your Referral Link
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Share this link to earn commissions from new sign-ups
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-300">
                      Referral Code
                    </label>
                    <div className="flex space-x-2 mt-2">
                      <Input
                        value={referralCode}
                        readOnly
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                      <Button
                        onClick={() => copyToClipboard(referralCode)}
                        variant="outline"
                        className="border-slate-600 text-white hover:bg-slate-700"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-slate-300">
                      Referral Link
                    </label>
                    <div className="flex space-x-2 mt-2">
                      <Input
                        value={referralLink}
                        readOnly
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                      <Button
                        onClick={() => copyToClipboard(referralLink)}
                        variant="outline"
                        className="border-slate-600 text-white hover:bg-slate-700"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
                      Share on Social Media
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-slate-600 text-white hover:bg-slate-700"
                      onClick={() => copyToClipboard(referralLink)}
                    >
                      Copy Link
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Commission Structure */}
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">
                    Commission Structure
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Earn recurring commissions on multiple levels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {commissionTiers.map((tier, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg"
                    >
                      <div>
                        <div className="font-semibold text-white">
                          {tier.level}
                        </div>
                        <div className="text-sm text-slate-400">
                          {tier.description}
                        </div>
                      </div>
                      <Badge className="bg-emerald-600 text-white">
                        {tier.percentage}
                      </Badge>
                    </div>
                  ))}

                  <div className="mt-4 p-4 bg-blue-600/20 border border-blue-600/30 rounded-lg">
                    <h4 className="text-white font-medium mb-2">
                      How it works:
                    </h4>
                    <ul className="text-sm text-slate-300 space-y-1">
                      <li>• Earn 10% of trading fees from direct referrals</li>
                      <li>• Earn 5% from their referrals</li>
                      <li>• Earn 2% from third-level referrals</li>
                      <li>• Commissions paid monthly</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Referral History */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Referral History</CardTitle>
                <CardDescription className="text-slate-300">
                  Track your referrals and their performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {referralHistory.map((referral, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between md:p-4 p-2 bg-slate-700/50 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="md:w-10 w-8 h-8 md:h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {referral.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-white md:text-xl text-sm">
                            {referral.name}
                          </div>
                          <div className="text-xs text-slate-400">
                            Joined {referral.joinDate}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="font-semibold text-emerald-400">
                            ${referral.earnings}
                          </div>
                          <div className="text-sm text-slate-400">
                            {referral.level}
                          </div>
                        </div>
                        <Badge
                          className={
                            referral.status === "Active"
                              ? "bg-green-600 text-white"
                              : "bg-slate-600 text-white"
                          }
                        >
                          {referral.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Referrals;

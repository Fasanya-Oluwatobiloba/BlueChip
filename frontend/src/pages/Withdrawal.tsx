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
  Wallet,
  Clock,
  CheckCircle,
  AlertCircle,
  Bell,
  User,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import { UserSidebar } from "../components/UserSidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";

const Withdrawal = () => {
  const [amount, setAmount] = useState("");
  const [withdrawalMethod, setWithdrawalMethod] = useState("");

  const profitBalance = 2850.75;
  const referralEarnings = 450.25;
  const totalWithdrawable = profitBalance + referralEarnings;

  const withdrawalHistory = [
    {
      id: "WD001",
      amount: 500.0,
      method: "Bank Transfer",
      status: "completed",
      date: new Date("2024-06-01"),
      fee: 5.0,
    },
    {
      id: "WD002",
      amount: 1000.0,
      method: "PayPal",
      status: "pending",
      date: new Date("2024-06-04"),
      fee: 10.0,
    },
    {
      id: "WD003",
      amount: 250.0,
      method: "Crypto Wallet",
      status: "processing",
      date: new Date("2024-06-05"),
      fee: 2.5,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-emerald-400";
      case "pending":
        return "text-yellow-400";
      case "processing":
        return "text-blue-400";
      default:
        return "text-slate-400";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4" />;
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "processing":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const handleWithdrawal = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Withdrawal requested:", { amount, withdrawalMethod });
    // TODO: Implement withdrawal logic
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
            <Link to="/trade" className="text-slate-300 hover:text-white">
              Trade
            </Link>
            <Link to="/deposit" className="text-slate-300 hover:text-white">
              Deposit
            </Link>
            <Link to="/withdrawal" className="text-emerald-400 font-medium">
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
        {/* Withdrawable Balance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Wallet className="h-5 w-5 mr-2 text-emerald-400" />
                Total Withdrawable
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-400">
                ${totalWithdrawable.toFixed(2)}
              </div>
              <p className="text-slate-400">Available for withdrawal</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-blue-400" />
                Profit Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                ${profitBalance.toFixed(2)}
              </div>
              <p className="text-slate-400">Trading profits</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-purple-400" />
                Referral Earnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">
                ${referralEarnings.toFixed(2)}
              </div>
              <p className="text-slate-400">From referrals</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Withdrawal Form */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Request Withdrawal</CardTitle>
              <CardDescription className="text-slate-300">
                Withdraw your profits and referral earnings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleWithdrawal} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="withdrawal-method" className="text-white">
                    Withdrawal Method
                  </Label>
                  <Select
                    value={withdrawalMethod}
                    onValueChange={setWithdrawalMethod}
                  >
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Select withdrawal method" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-slate-600">
                      <SelectItem
                        value="bank"
                        className="text-white hover:bg-slate-600"
                      >
                        Bank Transfer (3-5 business days)
                      </SelectItem>
                      <SelectItem
                        value="paypal"
                        className="text-white hover:bg-slate-600"
                      >
                        PayPal (1-2 business days)
                      </SelectItem>
                      <SelectItem
                        value="crypto"
                        className="text-white hover:bg-slate-600"
                      >
                        Crypto Wallet (Instant)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-white">
                    Withdrawal Amount ($)
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
                    max={totalWithdrawable}
                    min={10}
                  />
                  <p className="text-xs text-slate-400">
                    Minimum: $10 | Maximum: ${totalWithdrawable.toFixed(2)}
                  </p>
                </div>

                {withdrawalMethod && (
                  <div className="bg-slate-700/50 p-4 rounded-lg">
                    <div className="text-sm text-slate-300">
                      <div className="flex justify-between mb-2">
                        <span>Withdrawal Amount:</span>
                        <span>${amount || "0.00"}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Processing Fee:</span>
                        <span>
                          {withdrawalMethod === "bank" && "$5.00"}
                          {withdrawalMethod === "paypal" && "$2.00"}
                          {withdrawalMethod === "crypto" && "$1.00"}
                        </span>
                      </div>
                      <div className="flex justify-between font-bold text-white border-t border-slate-600 pt-2">
                        <span>You'll Receive:</span>
                        <span>
                          $
                          {amount
                            ? (
                                parseFloat(amount) -
                                (withdrawalMethod === "bank"
                                  ? 5
                                  : withdrawalMethod === "paypal"
                                  ? 2
                                  : 1)
                              ).toFixed(2)
                            : "0.00"}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                  disabled={
                    !withdrawalMethod ||
                    !amount ||
                    parseFloat(amount) > totalWithdrawable
                  }
                >
                  <Wallet className="h-4 w-4 mr-2" />
                  Request Withdrawal
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Withdrawal History */}
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Withdrawal History</CardTitle>
              <CardDescription className="text-slate-300">
                Track your recent withdrawal requests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {withdrawalHistory.map((withdrawal) => (
                  <div
                    key={withdrawal.id}
                    className="p-4 bg-slate-700/50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-white">
                        {withdrawal.id}
                      </div>
                      <div
                        className={`flex items-center space-x-1 ${getStatusColor(
                          withdrawal.status
                        )}`}
                      >
                        {getStatusIcon(withdrawal.status)}
                        <span className="text-sm capitalize">
                          {withdrawal.status}
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-slate-300 space-y-1">
                      <div className="flex justify-between">
                        <span>Amount:</span>
                        <span className="font-medium">
                          ${withdrawal.amount.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Method:</span>
                        <span>{withdrawal.method}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fee:</span>
                        <span>${withdrawal.fee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span>{withdrawal.date.toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      </SidebarInset>
    </div>
    </SidebarProvider>
  );
};

export default Withdrawal;

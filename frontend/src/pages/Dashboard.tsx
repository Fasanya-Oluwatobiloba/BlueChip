import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  DollarSign,
  TrendingUp,
  Users,
  ArrowUpRight,
  ArrowDownLeft,
  Bell,
  User,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import { UserSidebar } from "../components/UserSidebar";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "../components/ui/sidebar";

const Dashboard = () => {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    balance: 15750.5,
    totalInvested: 5000,
    activeInvestments: 3,
    totalEarnings: 750.5,
    referrals: 12,
  });

  const [investments] = useState([
    {
      id: 1,
      package: "Growth Fund",
      amount: 5000,
      progress: 65,
      earnings: 750,
      status: "active",
    },
    {
      id: 2,
      package: "Starter Fund",
      amount: 1000,
      progress: 100,
      earnings: 200,
      status: "completed",
    },
    {
      id: 3,
      package: "Premium Fund",
      amount: 2500,
      progress: 30,
      earnings: 125,
      status: "active",
    },
  ]);

  const [recentTransactions] = useState([
    {
      id: 1,
      type: "deposit",
      amount: 1000,
      date: "2024-06-10",
      status: "completed",
    },
    {
      id: 2,
      type: "withdrawal",
      amount: 500,
      date: "2024-06-09",
      status: "pending",
    },
    {
      id: 3,
      type: "earnings",
      amount: 75,
      date: "2024-06-08",
      status: "completed",
    },
  ]);

  return (
    <SidebarProvider>
      <div>
        <UserSidebar />

        <SidebarInset className="flex-1">
          {/* Navigation */}
          <nav className="flex items-center justify-between md:p-6 p-4 fixed left-0 right-0 top-0 z-50 bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
            <div className="flex items-center md:space-x-8 space-x-3">
              {/* Mobile menu button */}
              <div className="md:hidden">
                <SidebarTrigger className="text-white">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="-mb-2"
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
                <span className="md:text-xl text-xl font-bold text-white">
                  Bluechip Trade
                </span>
              </div>
              <div className="hidden md:flex space-x-6">
                <Link to="/dashboard" className="text-emerald-400 font-medium">
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
                  className="text-slate-300 hover:text-white"
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

          {/* Dashboard Content */}
          <div className="md:p-6 mt-20 p-4 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">
                    Account Balance
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-emerald-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    ${user.balance.toLocaleString()}
                  </div>
                  <p className="text-xs text-slate-400">
                    Available for investment
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">
                    Total Invested
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    ${user.totalInvested.toLocaleString()}
                  </div>
                  <p className="text-xs text-slate-400">
                    Across {user.activeInvestments} investments
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">
                    Total Earnings
                  </CardTitle>
                  <ArrowUpRight className="h-4 w-4 text-emerald-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-emerald-400">
                    ${user.totalEarnings.toFixed(2)}
                  </div>
                  <p className="text-xs text-slate-400">+15% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300">
                    Referrals
                  </CardTitle>
                  <Users className="h-4 w-4 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    {user.referrals}
                  </div>
                  <p className="text-xs text-slate-400">Active referrals</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="md:flex md:space-x-4 space-x-2">
                <Link to="/deposit">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    <ArrowUpRight className="h-4 w-4 md:mr-2" />
                    Deposit Funds
                  </Button>
                </Link>
                <Link to="/packages">
                  <Button className="bg-blue-600 mt-3 md:mt-0 hover:bg-blue-700 text-white">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    View Packages
                  </Button>
                </Link>
                <Link to="/withdrawal">
                  <Button
                    variant="outline"
                    className="border-slate-600 mt-3 md:mt-0 text-white hover:bg-slate-700"
                  >
                    <ArrowDownLeft className="h-4 w-4 mr-2" />
                    Withdraw
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Active Investments */}
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">
                    Active Investments
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Your current investment portfolio
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {investments
                      .filter((inv) => inv.status === "active")
                      .map((investment) => (
                        <div
                          key={investment.id}
                          className="p-4 bg-slate-700/30 rounded-lg"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-semibold text-white">
                                {investment.package}
                              </h4>
                              <p className="text-sm text-slate-400">
                                ${investment.amount.toLocaleString()}
                              </p>
                            </div>
                            <Badge
                              variant="secondary"
                              className="bg-emerald-600/20 text-emerald-400 border-emerald-400/20"
                            >
                              {investment.status}
                            </Badge>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-slate-400">Progress</span>
                              <span className="text-white">
                                {investment.progress}%
                              </span>
                            </div>
                            <Progress
                              value={investment.progress}
                              className="h-2"
                            />
                            <div className="flex justify-between text-sm">
                              <span className="text-slate-400">
                                Current Earnings
                              </span>
                              <span className="text-emerald-400">
                                ${investment.earnings}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Transactions */}
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">
                    Recent Transactions
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Your latest account activity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-slate-300">Type</TableHead>
                        <TableHead className="text-slate-300">Amount</TableHead>
                        <TableHead className="text-slate-300">Date</TableHead>
                        <TableHead className="text-slate-300">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentTransactions.map((transaction) => (
                        <TableRow
                          key={transaction.id}
                          className="border-slate-700"
                        >
                          <TableCell className="text-white capitalize">
                            {transaction.type}
                          </TableCell>
                          <TableCell className="text-white">
                            ${transaction.amount}
                          </TableCell>
                          <TableCell className="text-slate-300">
                            {transaction.date}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                transaction.status === "completed"
                                  ? "default"
                                  : "secondary"
                              }
                              className={
                                transaction.status === "completed"
                                  ? "bg-emerald-600"
                                  : "bg-yellow-600"
                              }
                            >
                              {transaction.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;

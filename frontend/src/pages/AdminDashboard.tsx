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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import {
  Settings,
  Image,
  Play,
  Pause,
  CheckCircle,
  XCircle,
  Edit,
} from "lucide-react";
import { AdminHeader } from "../components/admin/AdminHeader";
import { AdminStats } from "../components/admin/AdminStats";
import { UserManagement } from "../components/admin/UserManagement";
import { PackageManagement } from "../components/admin/PackageManagement";
import { AdminManagement } from "../components/admin/AdminManagement";

const AdminDashboard = () => {
  const [stats] = useState({
    totalUsers: 1247,
    activeInvestments: 856,
    totalInvested: 2847500.0,
    totalProfits: 342180.75,
    pendingWithdrawals: 15,
    pendingDeposits: 8,
  });

  const [packages, setPackages] = useState([
    {
      id: 1,
      name: "Starter Fund",
      minAmount: 100,
      maxAmount: 999,
      duration: 30,
      returnRate: 20,
      description: "Perfect for beginners looking to start their investment journey",
      status: "active",
    },
    {
      id: 2,
      name: "Growth Fund",
      minAmount: 1000,
      maxAmount: 9999,
      duration: 60,
      returnRate: 50,
      description: "Ideal for serious investors seeking substantial growth",
      status: "active",
    },
    {
      id: 3,
      name: "Premium Fund",
      minAmount: 10000,
      maxAmount: 99999,
      duration: 90,
      returnRate: 100,
      description: "Exclusive package for high-net-worth individuals",
      status: "active",
    },
  ]);

  const [admins, setAdmins] = useState([
    {
      id: 1,
      name: "John Admin",
      email: "admin@example.com",
      role: "Super Admin",
      lastLogin: "2024-06-10 10:30",
      status: "active",
    },
  ]);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      balance: 15750.5,
      status: "active",
      joinDate: "2024-01-15",
      totalInvested: 5000,
      currentProfit: 750.5,
      phone: "+1234567890",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      balance: 8900.25,
      status: "active",
      joinDate: "2024-02-20",
      totalInvested: 3000,
      currentProfit: 450.25,
      phone: "+1987654321",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      balance: 25600.0,
      status: "suspended",
      joinDate: "2024-01-08",
      totalInvested: 10000,
      currentProfit: 1200.0,
      phone: "+1122334455",
    },
  ]);

  const [deposits] = useState([
    {
      id: "DEP001",
      user: "John Doe",
      amount: 1000.0,
      method: "Bank Transfer",
      date: "2024-06-06",
      status: "pending",
      screenshot: "/api/placeholder/300/200",
      reference: "BT123456",
    },
    {
      id: "DEP002",
      user: "Jane Smith",
      amount: 500.0,
      method: "Credit Card",
      date: "2024-06-05",
      status: "approved",
      screenshot: null,
      reference: "CC789012",
    },
  ]);

  const [investments, setInvestments] = useState([
    {
      id: 1,
      user: "John Doe",
      package: "Growth Fund",
      amount: 5000,
      startDate: "2024-06-01",
      status: "active",
      progress: 65,
      expectedReturn: 7500,
      currentValue: 5750,
    },
    {
      id: 2,
      user: "Jane Smith",
      package: "Starter Fund",
      amount: 1000,
      startDate: "2024-05-20",
      status: "completed",
      progress: 100,
      expectedReturn: 1200,
      currentValue: 1200,
    },
    {
      id: 3,
      user: "Mike Johnson",
      package: "Premium Fund",
      amount: 10000,
      startDate: "2024-06-03",
      status: "on-hold",
      progress: 30,
      expectedReturn: 15000,
      currentValue: 10300,
    },
  ]);

  const handleApproveDeposit = (depositId: string) => {
    console.log("Approving deposit:", depositId);
  };

  const handleRejectDeposit = (depositId: string) => {
    console.log("Rejecting deposit:", depositId);
  };

  const handleInvestmentStatusChange = (investmentId: number, newStatus: string) => {
    setInvestments(
      investments.map((investment) =>
        investment.id === investmentId
          ? { ...investment, status: newStatus }
          : investment
      )
    );
  };

  return (
    <div className="flex h-screen bg-slate-900 overflow-hidden">

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        
        <div className="flex-1 overflow-y-auto p-4 lg:p-6">
          <AdminStats stats={stats} />

          <Tabs defaultValue="users" className="mt-6">
            <div className="overflow-x-auto">
              <TabsList className="bg-slate-800 text-white">
                <TabsTrigger value="users" className="data-[state=active]:bg-red-600">
                  User Management
                </TabsTrigger>
                <TabsTrigger value="packages" className="data-[state=active]:bg-red-600">
                  Package Management
                </TabsTrigger>
                <TabsTrigger value="deposits" className="data-[state=active]:bg-red-600">
                  Deposits
                </TabsTrigger>
                <TabsTrigger value="investments" className="data-[state=active]:bg-red-600">
                  Investments
                </TabsTrigger>
                <TabsTrigger value="admins" className="data-[state=active]:bg-red-600">
                  Admin Management
                </TabsTrigger>
                <TabsTrigger value="settings" className="data-[state=active]:bg-red-600">
                  Settings
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="users">
              <UserManagement users={users} setUsers={setUsers} />
            </TabsContent>

            <TabsContent value="packages">
              <PackageManagement packages={packages} setPackages={setPackages} />
            </TabsContent>

            <TabsContent value="deposits">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Deposit Management & Payment Screenshots</CardTitle>
                  <CardDescription className="text-slate-300">
                    Review deposits and verify payment screenshots
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-slate-300">Deposit ID</TableHead>
                          <TableHead className="text-slate-300">User</TableHead>
                          <TableHead className="text-slate-300">Amount</TableHead>
                          <TableHead className="text-slate-300">Method</TableHead>
                          <TableHead className="text-slate-300">Date</TableHead>
                          <TableHead className="text-slate-300">Screenshot</TableHead>
                          <TableHead className="text-slate-300">Status</TableHead>
                          <TableHead className="text-slate-300">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {deposits.map((deposit) => (
                          <TableRow key={deposit.id} className="border-slate-700">
                            <TableCell className="font-semibold text-white">
                              {deposit.id}
                            </TableCell>
                            <TableCell className="text-white">{deposit.user}</TableCell>
                            <TableCell className="text-white">
                              ${deposit.amount.toFixed(2)}
                            </TableCell>
                            <TableCell className="text-slate-300">
                              {deposit.method}
                            </TableCell>
                            <TableCell className="text-slate-300">
                              {deposit.date}
                            </TableCell>
                            <TableCell>
                              {deposit.screenshot ? (
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="border-slate-600 text-white hover:bg-slate-700"
                                    >
                                      <Image className="h-3 w-3 mr-1" />
                                      View
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-2xl">
                                    <DialogHeader>
                                      <DialogTitle>Payment Screenshot - {deposit.id}</DialogTitle>
                                      <DialogDescription className="text-slate-300">
                                        Reference: {deposit.reference}
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex justify-center">
                                      <img
                                        src={deposit.screenshot}
                                        alt="Payment Screenshot"
                                        className="max-w-full max-h-96 rounded-lg border border-slate-600"
                                      />
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              ) : (
                                <span className="text-slate-500">No screenshot</span>
                              )}
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={deposit.status === "approved" ? "default" : "secondary"}
                                className={deposit.status === "approved" ? "bg-emerald-600" : "bg-yellow-600"}
                              >
                                {deposit.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button
                                  size="sm"
                                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                                  onClick={() => handleApproveDeposit(deposit.id)}
                                >
                                  <CheckCircle className="h-3 w-3" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-red-600 text-red-400 hover:bg-red-600/20"
                                  onClick={() => handleRejectDeposit(deposit.id)}
                                >
                                  <XCircle className="h-3 w-3" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="investments">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Investment Status Management</CardTitle>
                  <CardDescription className="text-slate-300">
                    Control investment progress and status for all users
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-slate-300">User</TableHead>
                          <TableHead className="text-slate-300">Package</TableHead>
                          <TableHead className="text-slate-300">Amount</TableHead>
                          <TableHead className="text-slate-300">Progress</TableHead>
                          <TableHead className="text-slate-300">Current Value</TableHead>
                          <TableHead className="text-slate-300">Status</TableHead>
                          <TableHead className="text-slate-300">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {investments.map((investment) => (
                          <TableRow key={investment.id} className="border-slate-700">
                            <TableCell className="text-white">{investment.user}</TableCell>
                            <TableCell className="text-white">{investment.package}</TableCell>
                            <TableCell className="text-white">
                              ${investment.amount.toLocaleString()}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <div className="w-16 bg-slate-700 rounded-full h-2">
                                  <div
                                    className="bg-emerald-600 h-2 rounded-full"
                                    style={{ width: `${investment.progress}%` }}
                                  ></div>
                                </div>
                                <span className="text-white text-sm">{investment.progress}%</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-emerald-400">
                              ${investment.currentValue.toLocaleString()}
                            </TableCell>
                            <TableCell>
                              <Select
                                defaultValue={investment.status}
                                onValueChange={(value: string) =>
                                  handleInvestmentStatusChange(investment.id, value)
                                }
                              >
                                <SelectTrigger className="w-32 bg-slate-700 border-slate-600 text-white">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="active">Active</SelectItem>
                                  <SelectItem value="on-hold">On Hold</SelectItem>
                                  <SelectItem value="completed">Completed</SelectItem>
                                  <SelectItem value="cancelled">Cancelled</SelectItem>
                                </SelectContent>
                              </Select>
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-slate-600 text-white hover:bg-slate-700"
                                  onClick={() =>
                                    handleInvestmentStatusChange(
                                      investment.id,
                                      investment.status === "active" ? "on-hold" : "active"
                                    )
                                  }
                                >
                                  {investment.status === "active" ? (
                                    <Pause className="h-3 w-3" />
                                  ) : (
                                    <Play className="h-3 w-3" />
                                  )}
                                </Button>
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="border-slate-600 text-white hover:bg-slate-700"
                                    >
                                      <Edit className="h-3 w-3" />
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="bg-slate-800 border-slate-700 text-white">
                                    <DialogHeader>
                                      <DialogTitle>
                                        Edit Investment - {investment.user}
                                      </DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-4">
                                      <div>
                                        <label className="text-white text-sm">Current Value</label>
                                        <Input
                                          defaultValue={investment.currentValue.toString()}
                                          className="bg-slate-700 border-slate-600 text-white"
                                        />
                                      </div>
                                      <div>
                                        <label className="text-white text-sm">Progress (%)</label>
                                        <Input
                                          defaultValue={investment.progress.toString()}
                                          className="bg-slate-700 border-slate-600 text-white"
                                        />
                                      </div>
                                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                                        Update Investment
                                      </Button>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="admins">
              <AdminManagement admins={admins} setAdmins={setAdmins} />
            </TabsContent>

            <TabsContent value="settings">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Platform Settings</CardTitle>
                  <CardDescription className="text-slate-300">
                    Configure platform-wide settings and parameters
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white text-sm">Minimum Investment</label>
                      <Input
                        className="bg-slate-700 border-slate-600 text-white"
                        defaultValue="100"
                      />
                    </div>
                    <div>
                      <label className="text-white text-sm">Maximum Investment</label>
                      <Input
                        className="bg-slate-700 border-slate-600 text-white"
                        defaultValue="100000"
                      />
                    </div>
                    <div>
                      <label className="text-white text-sm">Withdrawal Fee (%)</label>
                      <Input
                        className="bg-slate-700 border-slate-600 text-white"
                        defaultValue="2"
                      />
                    </div>
                    <div>
                      <label className="text-white text-sm">Referral Commission (%)</label>
                      <Input
                        className="bg-slate-700 border-slate-600 text-white"
                        defaultValue="10"
                      />
                    </div>
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    <Settings className="h-4 w-4 mr-2" />
                    Save Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
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
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Globe,
  CreditCard,
  Bitcoin,
  Building,
  Shield,
  CheckCircle,
  Upload,
  X,
  Bell,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import { UserSidebar } from "../components/UserSidebar";

const Deposit = () => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const quickAmounts = [100, 500, 1000, 2500, 5000, 10000];

  const paymentMethods = [
    {
      id: "card",
      name: "Automatic",
      icon: CreditCard,
      processingTime: "Instant",
      fee: "3.5%",
      minAmount: 50,
      description: "Visa, Mastercard, American Express",
    },
    {
      id: "bank",
      name: "Bank Transfer",
      icon: Building,
      processingTime: "1-3 business days",
      fee: "Free",
      minAmount: 100,
      description: "Direct bank transfer (ACH/Wire)",
    },
    {
      id: "crypto",
      name: "Cryptocurrency",
      icon: Bitcoin,
      processingTime: "15-30 minutes",
      fee: "1%",
      minAmount: 50,
      description: "Bitcoin, Ethereum, USDT",
    },
  ];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount.toString());
    setCustomAmount("");
  };

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount("");
  };

  const getDepositAmount = () => {
    return customAmount || selectedAmount;
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const removeUploadedFile = () => {
    setUploadedFile(null);
  };

  return (
    <SidebarProvider>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <UserSidebar />
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
            <Globe className="h-8 w-8 text-emerald-400" />
            <span className="text-xl font-bold text-white">BluechipTrade</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/dashboard" className="text-slate-300 hover:text-white">
              Dashboard
            </Link>
            <Link to="/packages" className="text-slate-300 hover:text-white">
              Packages
            </Link>
            <Link to="/deposit" className="text-emerald-400 font-medium">
              Deposit
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

      <div className="md:p-6 mt-20 p-4 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Deposit Funds</h1>
          <p className="text-xl text-slate-300">
            Add funds to your account to start investing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Deposit Form */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="h-5 w-5 text-emerald-400 mr-2" />
                  Secure Deposit
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Choose your deposit amount and payment method
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Amount Selection */}
                <div className="space-y-4">
                  <Label className="text-white text-lg">
                    Select Amount (USD)
                  </Label>

                  {/* Quick Amount Buttons */}
                  <div className="grid grid-cols-3 gap-3">
                    {quickAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={
                          selectedAmount === amount.toString()
                            ? "default"
                            : "outline"
                        }
                        className={`${
                          selectedAmount === amount.toString()
                            ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                            : "border-slate-600 text-white hover:bg-slate-700"
                        }`}
                        onClick={() => handleAmountSelect(amount)}
                      >
                        ${amount.toLocaleString()}
                      </Button>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <div className="space-y-2">
                    <Label className="text-slate-300">
                      Or enter custom amount
                    </Label>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e: { target: { value: string } }) =>
                        handleCustomAmount(e.target.value)
                      }
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      min="50"
                    />
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="space-y-4">
                   <Label className="text-white text-lg">Payment Method</Label>

                  <Tabs defaultValue="crypto" className="mt-4">
                    <TabsList className="flex w-full bg-slate-700/50 gap-1 overflow-x-auto">
                      {paymentMethods.map((method) => (
                        <TabsTrigger
                          key={method.id}
                          value={method.id}
                          className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white flex-shrink-0 text-xs sm:text-sm"
                        >
                          <method.icon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                          <span>{method.name}</span>
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {paymentMethods.map((method) => (
                      <TabsContent
                        key={method.id}
                        value={method.id}
                        className="space-y-4"
                      >
                        <div className="bg-slate-700/30 p-4 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white font-medium">
                              {method.name}
                            </span>
                            <Badge
                              variant="outline"
                              className="border-slate-600 text-slate-300"
                            >
                              {method.processingTime}
                            </Badge>
                          </div>
                          <p className="text-slate-300 text-sm mb-2">
                            {method.description}
                          </p>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-400">
                              Fee: {method.fee}
                            </span>
                            <span className="text-slate-400">
                              Min: ${method.minAmount}
                            </span>
                          </div>
                        </div>

                        {method.id === "card" && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label className="text-white">
                                  Card Number
                                </Label>
                                <Input
                                  placeholder="1234 5678 9012 3456"
                                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                />
                              </div>
                              <div>
                                <Label className="text-white">
                                  Cardholder Name
                                </Label>
                                <Input
                                  placeholder="John Doe"
                                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                />
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label className="text-white">
                                  Expiry Date
                                </Label>
                                <Input
                                  placeholder="MM/YY"
                                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                />
                              </div>
                              <div>
                                <Label className="text-white">CVV</Label>
                                <Input
                                  placeholder="123"
                                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        {method.id === "bank" && (
                          <div className="space-y-4">
                            <div className="bg-blue-600/20 border border-blue-600/30 p-4 rounded-lg">
                              <h4 className="text-white font-medium mb-2">
                                Bank Transfer Details
                              </h4>
                              <div className="text-sm text-slate-300 space-y-1">
                                <p>Bank: BluechipTrade Bank</p>
                                <p>Account: 1234567890</p>
                                <p>Routing: 123456789</p>
                                <p>Reference: Your Account ID</p>
                              </div>

                              {/* Payment Screenshot Upload */}
                              <div className="space-y-3">
                                <Label className="text-white">
                                  Upload Payment Screenshot
                                </Label>
                                <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center">
                                  {!uploadedFile ? (
                                    <div>
                                      <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                                      <p className="text-slate-300 mb-2">
                                        Upload your payment screenshot
                                      </p>
                                      <p className="text-sm text-slate-400 mb-4">
                                        PNG, JPG up to 10MB
                                      </p>
                                      <Input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileUpload}
                                        className="hidden"
                                        id="file-upload"
                                      />
                                      <Label
                                        htmlFor="file-upload"
                                        className="cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md inline-block"
                                      >
                                        Choose File
                                      </Label>
                                    </div>
                                  ) : (
                                    <div className="flex items-center justify-between bg-slate-700 p-3 rounded-lg">
                                      <div className="flex items-center space-x-2">
                                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                                        <span className="text-white text-sm">
                                          {uploadedFile.name}
                                        </span>
                                      </div>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={removeUploadedFile}
                                        className="text-slate-400 hover:text-white"
                                      >
                                        <X className="h-4 w-4" />
                                      </Button>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {method.id === "crypto" && (
                          <div className="space-y-4">
                            <div className="bg-orange-600/20 border border-orange-600/30 p-4 rounded-lg">
                              <h4 className="text-white font-medium mb-2">
                                Cryptocurrency Deposit
                              </h4>
                              <p className="text-sm text-slate-300 mb-2">
                                Send your cryptocurrency to the address below:
                              </p>
                              <div className="bg-slate-700 p-3 rounded font-mono text-sm text-white break-all">
                                1A1Z6MEAnqvhwxc9u3Uuu62W8AQu2D9UuC
                              </div>
                            </div>
                          </div>
                        )}
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>

                <Button
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                  disabled={!getDepositAmount()}
                >
                  Deposit $
                  {getDepositAmount()
                    ? Number(getDepositAmount()).toLocaleString()
                    : "0"}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Summary & Security */}
          <div className="space-y-6">
            {/* Deposit Summary */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Deposit Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-300">Amount</span>
                  <span className="text-white font-semibold">
                    $
                    {getDepositAmount()
                      ? Number(getDepositAmount()).toLocaleString()
                      : "0"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Processing Fee</span>
                  <span className="text-white">$0.00</span>
                </div>
                <div className="border-t border-slate-600 pt-4">
                  <div className="flex justify-between">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-emerald-400 font-bold text-lg">
                      $
                      {getDepositAmount()
                        ? Number(getDepositAmount()).toLocaleString()
                        : "0"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Features */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Security Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-slate-300">
                  <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                  <span className="text-sm">256-bit SSL encryption</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                  <span className="text-sm">PCI DSS compliant</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                  <span className="text-sm">Segregated accounts</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                  <span className="text-sm">24/7 fraud monitoring</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-white hover:bg-slate-700"
                >
                  Contact Support
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-white hover:bg-slate-700"
                >
                  View FAQ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </SidebarInset>
    </div>
    </SidebarProvider>
  );
};

export default Deposit;

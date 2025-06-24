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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { User, Shield, CreditCard, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../components/ui/sidebar";
import { UserSidebar } from "../components/UserSidebar";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    address: "123 Main St, New York, NY 10001",
    bankAccount: "**** **** **** 1234",
    routingNumber: "123456789",
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    smsAlerts: false,
    pushNotifications: true,
    marketingEmails: false,
  });

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated:", userInfo);
    // TODO: Implement profile update logic
  };

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <UserSidebar />
        {/* Navigation */}
        <SidebarInset>
          <nav className="flex items-center justify-between fixed left-0 right-0 top-0 z-50 md:p-6 p-4 bg-slate-900/50 backdrop-blur-sm border-b border-slate-700">
            <div className="flex items-center md:space-x-8 space-x-3">
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
                <span className="md:text-xl text-xl font-bold text-white">
                  Bluechip Trade
                </span>
              </div>
              <div className="hidden md:flex space-x-6">
                <Link to="/dashboard" className="text-slate-300 hover:text-white">
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
              <Link to="/login">
                <Button
                  variant="outline"
                  className="border-slate-600 text-white hover:bg-slate-800"
                >
                  Logout
                </Button>
              </Link>
            </div>
          </nav>

          <div className="p-4 md:p-6 mt-20">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-16 w-16 bg-emerald-600 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">
                    {userInfo.firstName} {userInfo.lastName}
                  </h1>
                  <p className="text-slate-400">Investor since January 2024</p>
                </div>
              </div>

              <Tabs defaultValue="personal" className="space-y-6">
                <div className="overflow-x-auto">
                  <TabsList className="bg-slate-800 text-white">
                  <TabsTrigger
                    value="personal"
                    className="data-[state=active]:bg-emerald-600"
                  >
                    Personal Info
                  </TabsTrigger>
                  <TabsTrigger
                    value="payment"
                    className="data-[state=active]:bg-emerald-600"
                  >
                    Payment Methods
                  </TabsTrigger>
                  <TabsTrigger
                    value="security"
                    className="data-[state=active]:bg-emerald-600"
                  >
                    Security
                  </TabsTrigger>
                  <TabsTrigger
                    value="notifications"
                    className="data-[state=active]:bg-emerald-600"
                  >
                    Notifications
                  </TabsTrigger>
                </TabsList>
                </div>

                <TabsContent value="personal">
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white">
                        Personal Information
                      </CardTitle>
                      <CardDescription className="text-slate-300">
                        Update your personal details and contact information
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSaveProfile} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName" className="text-white">
                              First Name
                            </Label>
                            <Input
                              id="firstName"
                              value={userInfo.firstName}
                              onChange={(e: { target: { value: any } }) =>
                                setUserInfo((prev) => ({
                                  ...prev,
                                  firstName: e.target.value,
                                }))
                              }
                              className="bg-slate-700 border-slate-600 text-white"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName" className="text-white">
                              Last Name
                            </Label>
                            <Input
                              id="lastName"
                              value={userInfo.lastName}
                              onChange={(e: { target: { value: any } }) =>
                                setUserInfo((prev) => ({
                                  ...prev,
                                  lastName: e.target.value,
                                }))
                              }
                              className="bg-slate-700 border-slate-600 text-white"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-white">
                            Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={userInfo.email}
                            onChange={(e: { target: { value: any } }) =>
                              setUserInfo((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                            className="bg-slate-700 border-slate-600 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-white">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            value={userInfo.phone}
                            onChange={(e: { target: { value: any } }) =>
                              setUserInfo((prev) => ({
                                ...prev,
                                phone: e.target.value,
                              }))
                            }
                            className="bg-slate-700 border-slate-600 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address" className="text-white">
                            Address
                          </Label>
                          <Input
                            id="address"
                            value={userInfo.address}
                            onChange={(e: { target: { value: any } }) =>
                              setUserInfo((prev) => ({
                                ...prev,
                                address: e.target.value,
                              }))
                            }
                            className="bg-slate-700 border-slate-600 text-white"
                          />
                        </div>
                        <Button
                          type="submit"
                          className="bg-emerald-600 hover:bg-emerald-700 text-white"
                        >
                          Save Changes
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="payment">
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white">
                        Payment Methods
                      </CardTitle>
                      <CardDescription className="text-slate-300">
                        Manage your bank accounts and payment methods
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="bankAccount" className="text-white">
                          Bank Account
                        </Label>
                        <Input
                          id="bankAccount"
                          value={userInfo.bankAccount}
                          onChange={(e: { target: { value: any } }) =>
                            setUserInfo((prev) => ({
                              ...prev,
                              bankAccount: e.target.value,
                            }))
                          }
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="routingNumber" className="text-white">
                          Routing Number
                        </Label>
                        <Input
                          id="routingNumber"
                          value={userInfo.routingNumber}
                          onChange={(e: { target: { value: any } }) =>
                            setUserInfo((prev) => ({
                              ...prev,
                              routingNumber: e.target.value,
                            }))
                          }
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </div>
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Add New Payment Method
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="security">
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white">
                        Security Settings
                      </CardTitle>
                      <CardDescription className="text-slate-300">
                        Manage your password and security preferences
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex gap-2">
                      <Button
                        variant="outline"
                        className="border-slate-600 text-white hover:bg-slate-700"
                      >
                        <Shield className="h-4 w-4 mr-2" />
                        Change Password
                      </Button>
                      <Button
                        variant="outline"
                        className="border-slate-600 text-white hover:bg-slate-700"
                      >
                        Enable Two-Factor Authentication
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="notifications">
                  <Card className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white">
                        Notification Preferences
                      </CardTitle>
                      <CardDescription className="text-slate-300">
                        Choose how you want to receive updates and alerts
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {Object.entries(notifications).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex items-center justify-between"
                        >
                          <Label className="text-white capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </Label>
                          <Button
                            variant={value ? "default" : "outline"}
                            size="sm"
                            onClick={() =>
                              handleNotificationChange(key, !value)
                            }
                            className={
                              value
                                ? "bg-emerald-600 hover:bg-emerald-700"
                                : "border-slate-600 text-white hover:bg-slate-700"
                            }
                          >
                            {value ? "On" : "Off"}
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Profile;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Eye } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  balance: number;
  status: string;
  joinDate: string;
  totalInvested: number;
  currentProfit: number;
  phone: string;
}

interface UserManagementProps {
  users: User[];
  setUsers: (users: User[]) => void;
}

export function UserManagement({ users, setUsers }: UserManagementProps) {
  const handleUserAction = (userId: number, action: string) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: action === "suspend" ? "suspended" : "active" }
        : user
    ));
  };

  const updateUserBalance = (userId: number, newBalance: string) => {
    setUsers(users.map(user =>
      user.id === userId
        ? { ...user, balance: parseFloat(newBalance) || 0 }
        : user
    ));
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Advanced User Management</CardTitle>
        <CardDescription className="text-slate-300">
          Comprehensive user account control and management
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-slate-300">User</TableHead>
              <TableHead className="text-slate-300">Contact</TableHead>
              <TableHead className="text-slate-300">Balance</TableHead>
              <TableHead className="text-slate-300">Invested</TableHead>
              <TableHead className="text-slate-300">Profit</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className="border-slate-700">
                <TableCell>
                  <div>
                    <div className="font-semibold text-white">{user.name}</div>
                    <div className="text-sm text-slate-400">ID: {user.id}</div>
                    <div className="text-sm text-slate-400">Joined: {user.joinDate}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="text-white">{user.email}</div>
                    <div className="text-sm text-slate-400">{user.phone}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col space-y-1">
                    <Input
                      defaultValue={user.balance.toString()}
                      className="w-24 h-8 bg-slate-700 border-slate-600 text-white text-sm"
                      onBlur={(e: { target: { value: string; }; }) => updateUserBalance(user.id, e.target.value)}
                    />
                  </div>
                </TableCell>
                <TableCell className="text-white">${user.totalInvested.toLocaleString()}</TableCell>
                <TableCell className="text-emerald-400">${user.currentProfit.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge variant={user.status === "active" ? "default" : "destructive"} className={
                    user.status === "active" ? "bg-emerald-600" : "bg-red-600"
                  }>
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
                          <Eye className="h-3 w-3" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-slate-800 border-slate-700 text-white">
                        <DialogHeader>
                          <DialogTitle>User Details - {user.name}</DialogTitle>
                          <DialogDescription className="text-slate-300">
                            Complete user information and account management
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="text-white">Email</Label>
                              <Input value={user.email} className="bg-slate-700 border-slate-600 text-white" />
                            </div>
                            <div>
                              <Label className="text-white">Phone</Label>
                              <Input value={user.phone} className="bg-slate-700 border-slate-600 text-white" />
                            </div>
                            <div>
                              <Label className="text-white">Account Balance</Label>
                              <Input value={user.balance.toString()} className="bg-slate-700 border-slate-600 text-white" />
                            </div>
                            <div>
                              <Label className="text-white">Status</Label>
                              <Select defaultValue={user.status}>
                                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="active">Active</SelectItem>
                                  <SelectItem value="suspended">Suspended</SelectItem>
                                  <SelectItem value="pending">Pending</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                            Update User
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-slate-600 text-white hover:bg-slate-700"
                      onClick={() => handleUserAction(user.id, user.status === "active" ? "suspend" : "activate")}
                    >
                      {user.status === "active" ? "Suspend" : "Activate"}
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

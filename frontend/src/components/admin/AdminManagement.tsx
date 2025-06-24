import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { UserPlus, Edit } from "lucide-react";

interface Admin {
  id: number;
  name: string;
  email: string;
  role: string;
  lastLogin: string;
  status: string;
}

interface AdminManagementProps {
  admins: Admin[];
  setAdmins: (admins: Admin[]) => void;
}

export function AdminManagement({ admins, setAdmins }: AdminManagementProps) {
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    password: "",
    role: "Admin",
  });

  const handleCreateAdmin = () => {
    if (newAdmin.name && newAdmin.email && newAdmin.password) {
      const admin = {
        id: admins.length + 1,
        name: newAdmin.name,
        email: newAdmin.email,
        role: newAdmin.role,
        lastLogin: "Never",
        status: "active",
      };
      setAdmins([...admins, admin]);
      setNewAdmin({ name: "", email: "", password: "", role: "Admin" });
      console.log("Admin created:", admin);
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Admin Management</CardTitle>
        <CardDescription className="text-slate-300">
          Manage admin accounts and permissions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <UserPlus className="h-4 w-4 mr-2" />
                Add New Admin
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-800 border-slate-700 text-white">
              <DialogHeader>
                <DialogTitle>Create New Admin</DialogTitle>
                <DialogDescription className="text-slate-300">
                  Add a new admin user to the system
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label className="text-white">Full Name</Label>
                  <Input
                    value={newAdmin.name}
                    onChange={(e: { target: { value: any } }) =>
                      setNewAdmin({ ...newAdmin, name: e.target.value })
                    }
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <Label className="text-white">Email</Label>
                  <Input
                    type="email"
                    value={newAdmin.email}
                    onChange={(e: { target: { value: any } }) =>
                      setNewAdmin({ ...newAdmin, email: e.target.value })
                    }
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <Label className="text-white">Password</Label>
                  <Input
                    type="password"
                    value={newAdmin.password}
                    onChange={(e: { target: { value: any } }) =>
                      setNewAdmin({ ...newAdmin, password: e.target.value })
                    }
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="Enter password"
                  />
                </div>
                <div>
                  <Label className="text-white">Role</Label>
                  <Select
                    value={newAdmin.role}
                    onValueChange={(value: any) =>
                      setNewAdmin({ ...newAdmin, role: value })
                    }
                  >
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="Super Admin">Super Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  onClick={handleCreateAdmin}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  Create Admin
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-slate-300">Name</TableHead>
              <TableHead className="text-slate-300">Email</TableHead>
              <TableHead className="text-slate-300">Role</TableHead>
              <TableHead className="text-slate-300">Last Login</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {admins.map((admin) => (
              <TableRow key={admin.id} className="border-slate-700">
                <TableCell className="text-white font-semibold">
                  {admin.name}
                </TableCell>
                <TableCell className="text-white">{admin.email}</TableCell>
                <TableCell className="text-white">{admin.role}</TableCell>
                <TableCell className="text-slate-300">
                  {admin.lastLogin}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      admin.status === "active" ? "default" : "destructive"
                    }
                    className={
                      admin.status === "active" ? "bg-emerald-600" : ""
                    }
                  >
                    {admin.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-slate-600 text-white hover:bg-slate-700"
                    >
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-red-600 text-red-400 hover:bg-red-600/20"
                    >
                      Suspend
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

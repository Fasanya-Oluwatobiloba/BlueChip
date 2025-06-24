import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Link } from "react-router-dom";
import { UserCheck } from "lucide-react";


export function AdminHeader() {


  return (
    <>
      <header className="flex items-center justify-between p-4 lg:p-5 z-40 bg-red-700 backdrop-blur-sm border-b border-red-700">
        <div className="">
          <h1 className="text-xl lg:text-2xl font-bold text-white">
            Admin Dashboard
          </h1>
        </div>
        <div className="flex items-center space-x-2 lg:space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="text-white flex items-center space-x-2"
              >
                <UserCheck className="h-4 w-4" />
                <span className="hidden sm:inline">John Admin</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-800 border-slate-700 text-white">
              <DialogHeader>
                <DialogTitle>Admin Profile</DialogTitle>
                <DialogDescription className="text-slate-300">
                  Manage your admin account settings
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label className="text-white">Name</Label>
                  <Input
                    defaultValue="John Admin"
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white">Email</Label>
                  <Input
                    defaultValue="admin@example.com"
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white">Role</Label>
                  <Input
                    defaultValue="Super Admin"
                    disabled
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white">Last Login</Label>
                  <Input
                    defaultValue="2024-06-10 10:30"
                    disabled
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Update Profile
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Button
            variant="outline"
            className="border-slate-600 text-white hover:bg-slate-800"
          >
            <Link to="/admin/login">Logout</Link>
          </Button>
        </div>
      </header>
    </>
  );
}

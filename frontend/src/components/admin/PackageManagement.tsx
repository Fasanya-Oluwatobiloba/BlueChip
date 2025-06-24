import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { Package, Edit } from "lucide-react";

interface PackageType {
  id: number;
  name: string;
  minAmount: number;
  maxAmount: number;
  duration: number;
  returnRate: number;
  description: string;
  status: string;
}

interface PackageManagementProps {
  packages: PackageType[];
  setPackages: (packages: PackageType[]) => void;
}

export function PackageManagement({ packages, setPackages }: PackageManagementProps) {
  const handlePackageUpdate = (packageId: number, updates: any) => {
    setPackages(packages.map(pkg =>
      pkg.id === packageId ? { ...pkg, ...updates } : pkg
    ));
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Package Management</CardTitle>
        <CardDescription className="text-slate-300">
          Create and manage investment packages
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Package className="h-4 w-4 mr-2" />
                Create New Package
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-800 border-slate-700 text-white">
              <DialogHeader>
                <DialogTitle>Create New Package</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label className="text-white">Package Name</Label>
                  <Input className="bg-slate-700 border-slate-600 text-white" placeholder="e.g., Elite Fund" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white">Min Amount ($)</Label>
                    <Input type="number" className="bg-slate-700 border-slate-600 text-white" />
                  </div>
                  <div>
                    <Label className="text-white">Max Amount ($)</Label>
                    <Input type="number" className="bg-slate-700 border-slate-600 text-white" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white">Duration (days)</Label>
                    <Input type="number" className="bg-slate-700 border-slate-600 text-white" />
                  </div>
                  <div>
                    <Label className="text-white">Return Rate (%)</Label>
                    <Input type="number" className="bg-slate-700 border-slate-600 text-white" />
                  </div>
                </div>
                <div>
                  <Label className="text-white">Description</Label>
                  <Textarea className="bg-slate-700 border-slate-600 text-white" />
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  Create Package
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-slate-300">Package Name</TableHead>
              <TableHead className="text-slate-300">Amount Range</TableHead>
              <TableHead className="text-slate-300">Duration</TableHead>
              <TableHead className="text-slate-300">Return Rate</TableHead>
              <TableHead className="text-slate-300">Status</TableHead>
              <TableHead className="text-slate-300">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {packages.map((pkg) => (
              <TableRow key={pkg.id} className="border-slate-700">
                <TableCell className="text-white font-semibold">{pkg.name}</TableCell>
                <TableCell className="text-white">${pkg.minAmount} - ${pkg.maxAmount}</TableCell>
                <TableCell className="text-white">{pkg.duration} days</TableCell>
                <TableCell className="text-emerald-400">{pkg.returnRate}%</TableCell>
                <TableCell>
                  <Badge variant={pkg.status === "active" ? "default" : "secondary"} className={
                    pkg.status === "active" ? "bg-emerald-600" : "bg-gray-600"
                  }>
                    {pkg.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
                          <Edit className="h-3 w-3" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-slate-800 border-slate-700 text-white">
                        <DialogHeader>
                          <DialogTitle>Edit Package - {pkg.name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label className="text-white">Package Name</Label>
                            <Input defaultValue={pkg.name} className="bg-slate-700 border-slate-600 text-white" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="text-white">Min Amount ($)</Label>
                              <Input defaultValue={pkg.minAmount} className="bg-slate-700 border-slate-600 text-white" />
                            </div>
                            <div>
                              <Label className="text-white">Max Amount ($)</Label>
                              <Input defaultValue={pkg.maxAmount} className="bg-slate-700 border-slate-600 text-white" />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="text-white">Duration (days)</Label>
                              <Input defaultValue={pkg.duration} className="bg-slate-700 border-slate-600 text-white" />
                            </div>
                            <div>
                              <Label className="text-white">Return Rate (%)</Label>
                              <Input defaultValue={pkg.returnRate} className="bg-slate-700 border-slate-600 text-white" />
                            </div>
                          </div>
                          <div>
                            <Label className="text-white">Status</Label>
                            <Select defaultValue={pkg.status}>
                              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="inactive">Inactive</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                            Update Package
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-slate-600 text-white hover:bg-slate-700"
                      onClick={() => handlePackageUpdate(pkg.id, { status: pkg.status === "active" ? "inactive" : "active" })}
                    >
                      {pkg.status === "active" ? "Deactivate" : "Activate"}
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
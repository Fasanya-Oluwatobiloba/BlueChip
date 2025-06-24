import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/ui/sidebar";
import {
  Home,
  TrendingUp,
  CreditCard,
  ArrowUpRight,
  ArrowDownLeft,
  Users,
  Settings,
  User,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function UserSidebar() {
  const location = useLocation();

  const sidebarItems = [
    { title: "Dashboard", icon: Home, href: "/dashboard" },
    { title: "Packages", icon: TrendingUp, href: "/packages" },
    { title: "Trade", icon: CreditCard, href: "/trade" },
    { title: "Deposit", icon: ArrowUpRight, href: "/deposit" },
    { title: "Withdrawal", icon: ArrowDownLeft, href: "/withdrawal" },
    { title: "Referrals", icon: Users, href: "/referrals" },
    { title: "Profile", icon: User, href: "/profile" },
  ];

  return (
    <Sidebar className="bg-slate-800/50 border-slate-700 pt-20">

      <SidebarContent>
        <SidebarMenu>
          {sidebarItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={location.pathname === item.href}
                className="text-slate-300 hover:text-white hover:bg-slate-700/50 data-[active=true]:bg-red-600 data-[active=true]:text-white"
              >
                <Link to={item.href}>
                  <div className="flex gap-2 items-center pb-4">
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarContent className="border-t border-slate-700">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="text-slate-300 hover:text-white hover:bg-slate-700/50"
            >
              <Link to="/settings">
                <div className="flex gap-2 items-center">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

import * as React from "react";
import { createContext, useContext, useState } from "react";
import { cn } from "../../lib/util";
import { Link, type LinkProps } from "react-router-dom";

type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, ...props }, ref) => {
    const { isOpen } = useSidebar();

    return (
      <div
        ref={ref}
        className={cn(
          "fixed left-0 top-0 h-full w-64 border-r bg-background/95 backdrop-blur-sm transition-all duration-300 ease-in-out z-50",
          "lg:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className
        )}
        {...props}
      />
    );
  }
);
Sidebar.displayName = "Sidebar";

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex h-16 items-center px-4", className)}
    {...props}
  />
));
SidebarHeader.displayName = "SidebarHeader";

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1 overflow-y-auto", className)}
    {...props}
  />
));
SidebarContent.displayName = "SidebarContent";

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-4", className)}
    {...props}
  />
));
SidebarFooter.displayName = "SidebarFooter";

interface SidebarMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const SidebarMenu = React.forwardRef<HTMLDivElement, SidebarMenuProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("space-y-1 px-2 py-4", className)}
      {...props}
    />
  )
);
SidebarMenu.displayName = "SidebarMenu";

interface SidebarMenuItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string;
}

const SidebarMenuItem = React.forwardRef<HTMLLIElement, SidebarMenuItemProps>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("list-none", className)} {...props} />
  )
);
SidebarMenuItem.displayName = "SidebarMenuItem";

type BaseSidebarMenuButtonProps = {
  className?: string;
  isActive?: boolean;
  children?: React.ReactNode;
};

type ButtonProps = BaseSidebarMenuButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: false;
  };

type AnchorProps = BaseSidebarMenuButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild: true;
  };

type SidebarMenuButtonProps = ButtonProps | AnchorProps;

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  SidebarMenuButtonProps
>((props, ref) => {
  if (props.asChild) {
    const { asChild, isActive, className, ...rest } = props;
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        className={cn(
          "w-full flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "bg-primary text-primary-foreground"
            : "hover:bg-accent hover:text-accent-foreground",
          className
        )}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  const { isActive, className, ...rest } = props;
  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      className={cn(
        "w-full flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
        isActive
          ? "bg-primary text-primary-foreground"
          : "hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
});
SidebarMenuButton.displayName = "SidebarMenuButton";

interface SidebarLinkProps extends LinkProps {
  className?: string;
  isActive?: boolean;
}

const SidebarLink = React.forwardRef<HTMLAnchorElement, SidebarLinkProps>(
  ({ className, isActive = false, ...props }, ref) => (
    <Link
      ref={ref}
      className={cn(
        "flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
        isActive
          ? "bg-primary text-primary-foreground"
          : "hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
);
SidebarLink.displayName = "SidebarLink";

export function SidebarTrigger({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { setIsOpen } = useSidebar();

  return (
    <button className={className} onClick={() => setIsOpen((prev) => !prev)}>
      {children || (
        <svg
          width="24"
          height="24"
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
      )}
    </button>
  );
}

export function SidebarInset({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("lg:ml-0", className)}>{children}</div>;
}

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarLink,
};

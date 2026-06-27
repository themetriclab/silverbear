import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sync active tab with current route
  useEffect(() => {
    const currentPath = location.pathname + location.hash;
    const match = items.find((item) => {
      if (item.url === "/#home" && location.pathname === "/" && !location.hash) return true;
      return currentPath === item.url || currentPath.startsWith(item.url);
    });
    if (match) setActiveTab(match.name);
  }, [location, items]);

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6 pointer-events-none",
        className
      )}
    >
      <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg pointer-events-auto">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;
          const isRouterLink = item.url.startsWith("/") && !item.url.startsWith("/#");

          const content = (
            <>
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden flex flex-col items-center gap-0.5">
                <Icon size={18} strokeWidth={2.5} aria-hidden="true" />
                <span className="text-[10px] font-medium leading-none">{item.name}</span>
              </span>
              {isActive && (
                <motion.div
                  layoutId="tubelight"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1 0" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </>
          );

          const classes = cn(
            "relative cursor-pointer text-sm font-semibold px-3 py-2 md:px-6 rounded-full transition-colors",
            "text-foreground/80 hover:text-primary",
            isActive && "bg-muted text-primary"
          );

          if (isRouterLink) {
            return (
              <Link
                key={item.name}
                to={item.url}
                aria-label={item.name}
                onClick={() => setActiveTab(item.name)}
                className={classes}
              >
                {content}
              </Link>
            );
          }

          return (
            <a
              key={item.name}
              href={item.url}
              aria-label={item.name}
              onClick={() => setActiveTab(item.name)}
              className={classes}
            >
              {content}
            </a>
          );
        })}
      </div>
    </div>
  );
}

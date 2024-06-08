import { useState } from "react";

import { LogIn, Menu } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/connections",
    label: "Connections",
  },
  {
    href: "/wordle",
    label: "Wordle",
  },
  {
    href: "/langGuessr",
    label: "LangGuessr",
  },
  {
    href: "/leaderboard",
    label: "Leaderboard",
  }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { user } = useUser();

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link
              to="/"
              className="ml-2 font-bold text-xl flex"
            >
              
              Onisogo
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Onisogo
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <Link
                      key={label}
                      to={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </Link>
                  ))}
                  {user ? (  
                    <UserButton afterSignOutUrl="/"/>
                  ):(
                    <SignInButton mode="modal">
                    <Button>Login</Button>
                  </SignInButton>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps) => (
              <Link
                to={route.href}
                key={route.href}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            {user ? (
              <UserButton afterSignOutUrl="/"/>
            ):(
              <SignInButton mode="modal">
                Login
              </SignInButton>
            )}

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

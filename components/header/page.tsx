// Header.tsx
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FaPhone } from "react-icons/fa6";
import { TiThMenuOutline } from "react-icons/ti";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { LoginForm } from "../registration/login";
import { SignupForm } from "../registration/signup";
import { DialogProvider } from "@/components/common/DialogContext";
import { useDialog } from "@/components/common/DialogContext";
import SearchEngine from "../carousel-slides/search-engine/page";

const Header: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleCheckoutClick = () => {
    router.push("/checkout");
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  const {
    isLoginDialogOpen,
    setLoginDialogOpen,
    isSignupDialogOpen,
    setSignupDialogOpen,
  } = useDialog(); // Use the context

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header
      className={`relative ${
        pathname === "/" ? "h-[900px] md:h-[400px] lg:h-[450px] bg-[url('/menubar/banner.jpg')] bg-no-repeat bg-cover bg-center" : "h-auto"
      } ${pathname !== "/" ? "bg-[#1e2755]" : ""}`}
    >
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-28">
        <div className="flex h-24 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block">
              <span className="sr-only">Home</span>
              <div className="relative h-30 w-45">
                <Image
                  src="/menubar/logo.png"
                  height={60}
                  width={180}
                  alt="logo"
                  onClick={handleLogoClick}
                />
              </div>
            </a>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Drawer open={isMenuOpen} onOpenChange={setMenuOpen}>
              <DrawerTrigger asChild>
                <Button
                  className="rounded-full bg-[#FF9C00] p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={toggleMenu}
                >
                  <TiThMenuOutline className="h-5 w-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <Image
                      src="/menubar/logo.png"
                      height={60}
                      width={180}
                      alt="logo"
                    />
                  </DrawerHeader>
                  <div className="p-4 pb-0">
                    <div className="space-y-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="text-gray-300 lg:text-md md:text-sm text-sm font-bold">
                          My Account
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Profile</DropdownMenuItem>
                          <DropdownMenuItem onClick={handleCheckoutClick}>
                            Billing
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => setLoginDialogOpen(true)}
                          >
                            Login
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => setSignupDialogOpen(true)}
                          >
                            Signup
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <Dialog
                        open={isLoginDialogOpen}
                        onOpenChange={setLoginDialogOpen}
                      >
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Signup</DialogTitle>
                            <DialogDescription>
                              Enter your details to signup.
                            </DialogDescription>
                          </DialogHeader>
                          <LoginForm />
                        </DialogContent>
                      </Dialog>
                      <Dialog
                        open={isSignupDialogOpen}
                        onOpenChange={setSignupDialogOpen}
                      >
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Signup</DialogTitle>
                            <DialogDescription>
                              Enter your details to signup.
                            </DialogDescription>
                          </DialogHeader>
                          <SignupForm />
                        </DialogContent>
                      </Dialog>
                      <div>
                        <Button
                          className="rounded-full bg-[#FF9C00] hover:bg-orange-500/90 active:border-b-0 text-black px-4 py-2 sm:py-3 md:py-4"
                          variant="custom"
                        >
                          Agent Login
                        </Button>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <FaPhone className="text-1xl text-white" />
                          <span className="text-1xl text-white">
                            123-456-7890
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button variant="common">Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <nav
            aria-label="Global"
            className="hidden md:flex items-center gap-8 text-sm"
          >
            <div className="text-gray-300 transition hover:text-gray-300/75">
              <Select>
                <SelectTrigger className=" text-gray-200 lg:text-md md:text-sm text-sm font-bold">
                  <SelectValue placeholder="USD" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="BDT">BDT</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-200 lg:text-md md:text-sm text-sm font-bold">
                My Account
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem onClick={handleCheckoutClick}>
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLoginDialogOpen(true)}>
                  Login
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSignupDialogOpen(true)}>
                  Signup
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Dialog open={isLoginDialogOpen} onOpenChange={setLoginDialogOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Login</DialogTitle>
                  <DialogDescription>
                    Enter your details to login.
                  </DialogDescription>
                </DialogHeader>
                <LoginForm />
              </DialogContent>
            </Dialog>
            <Dialog
              open={isSignupDialogOpen}
              onOpenChange={setSignupDialogOpen}
            >
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Signup</DialogTitle>
                  <DialogDescription>
                    Enter your details to signup.
                  </DialogDescription>
                </DialogHeader>
                <SignupForm />
              </DialogContent>
            </Dialog>
            <div>
              <Button className="h-9 font-bold" variant="custom">
                Agent Login
              </Button>
            </div>
            <div className="text-gray-500 transition hover:text-gray-500/75">
              <div className="rounded-full bg-[#FF9C00] p-2">
                <FaPhone className="text-1xl text-black" />
              </div>
            </div>
          </nav>
        </div>
        {pathname === "/" && <SearchEngine />}
      </div>
    </header>
  );
};

const HeaderWithProvider: React.FC = () => (
  <DialogProvider>
    <Header />
  </DialogProvider>
);

export default HeaderWithProvider;

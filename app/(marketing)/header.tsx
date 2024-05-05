"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader } from "lucide-react";
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

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-white h-screen bg-gradient-to-r bg-[url('/banner.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-28">
        <div className="flex h-28 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600">
              <span className="sr-only">Home</span>
              <Image src="/logo.png" height={60} width={180} alt="logo" />
            </a>
          </div>
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-8 text-sm">
                <li className="text-gray-500 transition hover:text-gray-500/75">
                  <Select>
                    <SelectTrigger className="w-[75px]">
                      <SelectValue placeholder="USD" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="BDT">Dollar</SelectItem>
                        <SelectItem value="banana">BDT</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </li>

                <li>
                  <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                  </ClerkLoading>
                  <ClerkLoaded>
                    <SignedIn>
                      <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                    <SignedOut>
                      <SignInButton mode="modal">
                        <Button size="lg" variant="common">
                          Login
                        </Button>
                      </SignInButton>
                    </SignedOut>
                  </ClerkLoaded>
                </li>

                <li>
                  <Button className="h-9 font-bold" variant="custom">
                    Agent Login
                  </Button>
                </li>

                <li className="text-gray-500 transition hover:text-gray-500/75">
                  <div className="rounded-full bg-[#FF9C00] p-2">
                    <FaPhone className="text-1xl text-black" />
                  </div>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <Drawer>
                  <DrawerTrigger asChild>
                    <button
                      className="rounded-full bg-[#FF9C00] p-2 text-gray-600 transition hover:text-gray-600/75"
                      onClick={toggleMenu}
                    >
                      <TiThMenuOutline className="h-5 w-5" />
                    </button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                      <DrawerHeader>
                        <Image
                          src="/logo.png"
                          height={90}
                          width={90}
                          alt="logo"
                        />
                      </DrawerHeader>
                      <div className="p-4 pb-0">
                        <ul className="space-y-4">
                          <li>
                            <ClerkLoading>
                              <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                            </ClerkLoading>
                            <ClerkLoaded>
                              <SignedIn>
                                <UserButton afterSignOutUrl="/" />
                              </SignedIn>
                              <SignedOut>
                                <SignInButton mode="modal">
                                  <Button size="lg" variant="custom">
                                    Register
                                  </Button>
                                </SignInButton>
                              </SignedOut>
                            </ClerkLoaded>
                          </li>
                          <li>
                            <Button className="w-full" variant="custom">
                              Agent Login
                            </Button>
                          </li>
                          <li>
                            <div className="flex items-center space-x-2">
                              <FaPhone className="text-1xl text-white" />
                              <span className="text-1xl text-white">
                                123-456-7890
                              </span>
                            </div>
                          </li>
                        </ul>
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
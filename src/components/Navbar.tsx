"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

type Props = {};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-screen-xl p-4">
      <nav className="flex items-center justify-between">
        {/* Desktop View */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/task1">
              <Button variant="link">Task 1</Button>
            </Link>
          </li>
          <li>
            <Link href="/task2">
              <Button variant="link">Task 2</Button>
            </Link>
          </li>
          <li>
            <Link href="/task3">
              <Button variant="link">Task 3</Button>
            </Link>
          </li>
          <li>
            <Link href="/task4">
              <Button variant="link">Task 4</Button>
            </Link>
          </li>
        </ul>

        {/* Mobile VIew */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/task1">
                  <Button variant="link">Task 1</Button>
                </Link>
              </li>
              <li>
                <Link href="/task2">
                  <Button variant="link">Task 2</Button>
                </Link>
              </li>
              <li>
                <Link href="/task3">
                  <Button variant="link">Task 3</Button>
                </Link>
              </li>
              <li>
                <Link href="/task4">
                  <Button variant="link">Task 4</Button>
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;

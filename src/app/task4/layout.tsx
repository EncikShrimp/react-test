"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = { children: React.ReactNode };

// navigation links is added into the layout component so that it can be shared across it's child components

const PageRouting = ({ children }: Props) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-x-4 space-y-36">
      <div className="flex flex-col items-center justify-center space-x-4 space-y-4 text-center">
        <h1>Please select page to reroute to ;)</h1>
        <div>
          <Link href="/task4/home">
            <Button variant="link" size="lg">
              Home
            </Button>
          </Link>
          <Link href="/task4/about">
            <Button variant="link" size="lg">
              About
            </Button>
          </Link>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PageRouting;

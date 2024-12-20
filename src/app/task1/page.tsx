"use client";
import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const Counter = (props: Props) => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-center justify-center md:space-x-10">
        <Button
          className="px-4 py-2 bg-lime-500 text-white  hover:text-lime-500"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </Button>
        <h1 className="text-9xl font-extrabold text-lime-500 hover:">
          {count}
        </h1>
        <Button
          className="px-4 py-2 bg-red-500 text-white  hover:text-red-500"
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;

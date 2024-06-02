"use client";
import * as React from "react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

type Setter = React.Dispatch<React.SetStateAction<number>>;

export function SelectAge() {
  const [isOpen, setIsOpen] = useState<boolean>(false); // State to control options visibility
  const [adultCount, setAdultCount] = useState<number>(0);
  const [childrenCount, setChildrenCount] = useState<number>(0);
  const [kidsCount, setKidsCount] = useState<number>(0);
  const [infantsCount, setInfantsCount] = useState<number>(0);

  const totalCount = adultCount + childrenCount + kidsCount + infantsCount;

  const increment = (setter: Setter) => () =>
    setter((count: number) => count + 1);
  const decrement = (setter: Setter) => () =>
    setter((count: number) => Math.max(0, count - 1));

  const resetCounts = () => {
    setAdultCount(1);
    setChildrenCount(0);
    setKidsCount(0);
    setInfantsCount(0);
  };

  const handleDoneClick = () => {
    setIsOpen(false); // Close options content when Done is clicked
  };

  return (
    <Select>
      <SelectTrigger
        onClick={() => setIsOpen(!isOpen)}
        className="w-full lg:w-auto border-2 border-gray-300 hover:border-gray-300 rounded-md p-2 bg-slate-100 md:bg-transparent md:border-0 lg:border-0"
      >
        <SelectValue placeholder="Age" />
        <span className="ml-2">{totalCount}</span>
      </SelectTrigger>
      {isOpen && (
        <SelectContent className="w-full lg:w-auto">
          <SelectGroup>
            <div className="flex flex-col gap-4 p-5">
              <div className="flex justify-between items-center gap-10">
                <div>
                  <div className="mb-1">Adults</div>
                  <div className="text-sm text-gray-500">12 years & above</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" onClick={decrement(setAdultCount)}>
                    -
                  </Button>
                  <span>{adultCount}</span>
                  <Button size="sm" onClick={increment(setAdultCount)}>
                    +
                  </Button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="mb-1">Children</div>
                  <div className="text-sm text-gray-500">
                    From 5 to under 12
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" onClick={decrement(setChildrenCount)}>
                    -
                  </Button>
                  <span>{childrenCount}</span>
                  <Button size="sm" onClick={increment(setChildrenCount)}>
                    +
                  </Button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="mb-1">Kids</div>
                  <div className="text-sm text-gray-500">From 2 to under 5</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" onClick={decrement(setKidsCount)}>
                    -
                  </Button>
                  <span>{kidsCount}</span>
                  <Button size="sm" onClick={increment(setKidsCount)}>
                    +
                  </Button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="mb-1">Infants</div>
                  <div className="text-sm text-gray-500">Under 2 years</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" onClick={decrement(setInfantsCount)}>
                    -
                  </Button>
                  <span>{infantsCount}</span>
                  <Button size="sm" onClick={increment(setInfantsCount)}>
                    +
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-2 p-2">
              <Button size="sm" onClick={resetCounts}>
                Reset
              </Button>
              <Button size="sm" onClick={handleDoneClick}>
                Done
              </Button>
            </div>
          </SelectGroup>
        </SelectContent>
      )}
    </Select>
  );
}

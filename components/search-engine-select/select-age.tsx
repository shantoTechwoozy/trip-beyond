import * as React from "react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
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
      <SelectTrigger className="w-full" onClick={() => setIsOpen(!isOpen)}>
        {" "}
        {/* Toggle options visibility */}
        <SelectValue placeholder="Travellers" />
        <span className="ml-2">{totalCount}</span>
      </SelectTrigger>
      {isOpen && ( // Render options content only if isOpen is true
        <SelectContent>
          <SelectGroup>
            <div className="flex flex-col gap-4 p-5">
              <div className="flex justify-between items-center gap-10">
                <div>
                  <div className="mb-1">Adults</div>
                  <div className="text-sm text-gray-500">12 years & above</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button onClick={decrement(setAdultCount)}>-</Button>
                  <span>{adultCount}</span>
                  <Button onClick={increment(setAdultCount)}>+</Button>
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
                  <Button onClick={decrement(setChildrenCount)}>-</Button>
                  <span>{childrenCount}</span>
                  <Button onClick={increment(setChildrenCount)}>+</Button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="mb-1">Kids</div>
                  <div className="text-sm text-gray-500">From 2 to under 5</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button onClick={decrement(setKidsCount)}>-</Button>
                  <span>{kidsCount}</span>
                  <Button onClick={increment(setKidsCount)}>+</Button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="mb-1">Infants</div>
                  <div className="text-sm text-gray-500">Under 2 years</div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button onClick={decrement(setInfantsCount)}>-</Button>
                  <span>{infantsCount}</span>
                  <Button onClick={increment(setInfantsCount)}>+</Button>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-2 p-2">
              <Button onClick={resetCounts}>Reset</Button>
              <Button onClick={handleDoneClick}>Done</Button>{" "}
              {/* Call handleDoneClick to close options */}
            </div>
          </SelectGroup>
        </SelectContent>
      )}
    </Select>
  );
}

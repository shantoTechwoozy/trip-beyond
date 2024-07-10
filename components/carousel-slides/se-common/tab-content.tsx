import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MdSwapHorizontalCircle } from "react-icons/md";
import { DepartureDatePresets } from "@/components/carousel-slides/search-engine-select/departure-date";
import { ReturnDatePresets } from "@/components/carousel-slides/search-engine-select/return-date";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Dropdown from "@/components/carousel-slides/se-common/dropdown";
import { Country, State } from "country-state-city";
import { useRouter } from "next/navigation";
interface Props {
  from: { value: string; displayValue: string };
  to: { value: string; displayValue: string };
  setFrom: (option: { value: string; displayValue: string }) => void;
  setTo: (option: { value: string; displayValue: string }) => void;
  isLoading: boolean;
  handleReadMoreClick: () => void;
  handleSwap: () => void;
}

export const Content: React.FC<Props> = ({
  from,
  to,
  setFrom,
  setTo,
  isLoading,
  handleReadMoreClick,
  handleSwap,
}) => {

  const router=useRouter()

  const handleSearchClick = () =>{
    router.push("/contact")
  }

  const countryData = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    displayValue: `${country.name} (${country.isoCode})`,
  }));

  return (
    <Card className="border-none">
      <CardContent className="w-full p-1 flex flex-wrap md:flex-nowrap lg:flex-nowrap items-center">
        <div className="w-full md:w-[150px] lg:w-[180px] mb-4 md:mb-0 lg:mb-0">
          <Label htmlFor="from" className="text-orange-400 font-bold">
            From
          </Label>
          <Dropdown
            options={countryData}
            selectedOption={from}
            setSelectedOption={setFrom}
          />
        </div>
        <div className="self-center md:ml-4 lg:ml-0">
          <MdSwapHorizontalCircle
            size={24}
            onClick={handleSwap}
            className="cursor-pointer text-orange-400"
            aria-label="Swap From and To"
          />
        </div>
        <div className="w-full md:w-[150px] lg:w-[180px] mb-4 md:mb-0 lg:mb-0 md:ml-8 lg:ml-16 mt-5 md:mt-0 lg:mt-0">
          <Label htmlFor="to" className="text-orange-400 font-bold">
            To
          </Label>
          <Dropdown
            options={countryData}
            selectedOption={to}
            setSelectedOption={setTo}
          />
        </div>
        <div className="hidden md:block lg:block border-l border-gray-200 h-16 mx-4 mr-2"></div>

        <div className="flex flex-col md:w-1/5 lg:w-1/5 ">
          <Label
            htmlFor="departure"
            className="text-orange-400 font-bold ml-0 md:ml-5 lg:ml-5"
          >
            Departure
          </Label>
          <DepartureDatePresets />
        </div>

        <div className="flex flex-col md:w-1/5 lg:w-1/5 ">
          <Label
            htmlFor="return"
            className="text-orange-400 font-bold ml-8 md:ml-5 lg:ml-0"
          >
            Return
          </Label>
          <ReturnDatePresets />
        </div>

        <div className="flex justify-center w-full md:w-auto lg:w-auto md:ml-2 lg:ml-4 mt-4 md:mt-5 lg:mt-5">
          {isLoading ? (
            <Button
              disabled
              className="rounded-full justify-center bg-[#FF9C00] hover:bg-orange-500/90 active:border-b-0 text-black px-4 py-2 sm:py-3 md:py-3 lg:py-4"
            >
              <Loader2 className="h-4 w-4 animate-spin" />
              Please Wait
            </Button>
          ) : (
            <Button
              className="w-full md:w-28 lg:w-32 rounded-full bg-[#FF9C00] hover:bg-orange-500/90 active:border-b-0 text-black px-4 py-2 sm:py-3 md:py-3 lg:py-4 ml-0 md:ml-2 lg:ml-2"
              onClick={handleSearchClick}
            >
              Search
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

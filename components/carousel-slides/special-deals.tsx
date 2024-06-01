"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SelectAge } from "@/components/search-engine-select/select-age";
import { SelectEconomy } from "@/components/search-engine-select/select-economy";
import { MdSwapHorizontalCircle } from "react-icons/md";
import { DepartureDatePresets } from "./departure-date";
import { ReturnDatePresets } from "./return-date";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Loader2 } from "lucide-react";

const SpecialDeals: React.FC = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleReadMoreClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div className="flex flex-col justify-center items-start w-full lg:w-[1055px] p-4 lg:p-10 space-y-4 lg:space-y-0">
      <Tabs defaultValue="oneWay" className="w-full lg:flex-grow">
        <div className="flex flex-wrap justify-start items-center w-full">
          <TabsList className="flex w-full lg:w-[350px] space-x-1">
            <TabsTrigger
              value="oneWay"
              className="flex-grow text-center px-1 py-2 text-black font-bold"
            >
              One Way
            </TabsTrigger>
            <TabsTrigger
              value="roundTrip"
              className="flex-grow text-center px-1 py-2 text-black font-bold"
            >
              Round Trip
            </TabsTrigger>
            <TabsTrigger
              value="multiCity"
              className="flex-grow text-center px-1 py-2 text-black font-bold"
            >
              Multi-City
            </TabsTrigger>
          </TabsList>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-start lg:space-x-4 space-y-4 lg:space-y-0 w-full lg:w-auto mt-5 lg:mt-0 ml-0 lg:ml-8">
            <SelectAge />
            <SelectEconomy />
          </div>

          <div className="flex items-center space-x-2 ml-0 lg:ml-56 mt-5 lg:mt-0">
            <Switch id="direct flights only" />
            <Label htmlFor="direct flights only">Direct Flights only</Label>
          </div>
        </div>
        <TabsContent value="oneWay">
          <Card className="border-none">
            <CardContent className="w-full p-1 flex flex-wrap lg:flex-nowrap items-center">
              <div className="w-full lg:w-[180px] mb-4 lg:mb-0">
                <Label htmlFor="from" className="text-orange-400 font-bold">
                  From
                </Label>
                <Input
                  id="from"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="Type city name"
                  className="border-none p-0 focus-visible:ring-transparent"
                />
              </div>
              <div className="self-center lg:self-auto lg:ml-4">
                <MdSwapHorizontalCircle
                  size={24}
                  onClick={handleSwap}
                  className="cursor-pointer text-orange-400"
                  aria-label="Swap From and To"
                />
              </div>
              <div className="w-full lg:w-[180px] mb-4 lg:mb-0 lg:ml-12 mt-5 lg:mt-0">
                <Label htmlFor="to" className="text-orange-400 font-bold">
                  To
                </Label>
                <Input
                  id="to"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="Type city name"
                  className="border-none p-0 focus-visible:ring-transparent"
                />
              </div>
              <div className="hidden lg:block border-l border-gray-200 h-16 mx-4"></div>
              <div className="w-full lg:w-1/5 mb-4 lg:mb-0 lg:ml-8">
                <DepartureDatePresets />
              </div>
              <div className="w-full lg:w-1/5 mb-4 lg:mb-0 lg:ml-4">
                <ReturnDatePresets />
              </div>
              <div className="flex justify-center w-full lg:w-auto lg:ml-4 mt-4 lg:mt-5">
                {isLoading ? (
                  <Button
                    disabled
                    className="rounded-full justify-center bg-[#FF9C00] hover:bg-orange-500/90 active:border-b-0 text-black px-4 py-2 sm:py-3 md:py-4"
                  >
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Searching
                  </Button>
                ) : (
                  <Button
                    className="w-full lg:w-32 rounded-full bg-[#FF9C00] hover:bg-orange-500/90 active:border-b-0 text-black px-4 py-2 sm:py-3 md:py-4"
                    onClick={handleReadMoreClick}
                  >
                    Search
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="roundTrip">
          <Card className="border-none">
            <CardContent className="w-full p-1 flex flex-wrap lg:flex-nowrap items-center">
              <div className="w-full lg:w-[180px] mb-4 lg:mb-0">
                <Label htmlFor="from" className="text-orange-400 font-bold">
                  From
                </Label>
                <Input
                  id="from"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="Type city name"
                  className="border-none p-0 focus-visible:ring-transparent"
                />
              </div>
              <div className="self-center lg:self-auto lg:ml-4">
                <MdSwapHorizontalCircle
                  size={24}
                  onClick={handleSwap}
                  className="cursor-pointer text-orange-400"
                  aria-label="Swap From and To"
                />
              </div>
              <div className="w-full lg:w-[180px] mb-4 lg:mb-0 lg:ml-12 mt-5 lg:mt-0">
                <Label htmlFor="to" className="text-orange-400 font-bold">
                  To
                </Label>
                <Input
                  id="to"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="Type city name"
                  className="border-none p-0 focus-visible:ring-transparent"
                />
              </div>
              <div className="hidden lg:block border-l border-gray-200 h-16 mx-4"></div>
              <div className="w-full lg:w-1/5 mb-4 lg:mb-0 lg:ml-8">
                <DepartureDatePresets />
              </div>
              <div className="w-full lg:w-1/5 mb-4 lg:mb-0 lg:ml-4">
                <ReturnDatePresets />
              </div>
              <div className="flex justify-center w-full lg:w-auto lg:ml-4 mt-4 lg:mt-5">
                {isLoading ? (
                  <Button
                    disabled
                    className="rounded-full justify-center bg-[#FF9C00] hover:bg-orange-500/90 active:border-b-0 text-black px-4 py-2 sm:py-3 md:py-4"
                  >
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Searching
                  </Button>
                ) : (
                  <Button
                    className="w-full lg:w-32 rounded-full bg-[#FF9C00] hover:bg-orange-500/90 active:border-b-0 text-black px-4 py-2 sm:py-3 md:py-4"
                    onClick={handleReadMoreClick}
                  >
                    Search
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="multiCity">
          <Card className="border-none">
            <CardContent className="w-full p-1 flex flex-wrap lg:flex-nowrap items-center">
              <div className="w-full lg:w-[180px] mb-4 lg:mb-0">
                <Label htmlFor="from" className="text-orange-400 font-bold">
                  From
                </Label>
                <Input
                  id="from"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="Type city name"
                  className="border-none p-0 focus-visible:ring-transparent"
                />
              </div>
              <div className="self-center lg:self-auto lg:ml-4">
                <MdSwapHorizontalCircle
                  size={24}
                  onClick={handleSwap}
                  className="cursor-pointer text-orange-400"
                  aria-label="Swap From and To"
                />
              </div>
              <div className="w-full lg:w-[180px] mb-4 lg:mb-0 lg:ml-12 mt-5 lg:mt-0">
                <Label htmlFor="to" className="text-orange-400 font-bold">
                  To
                </Label>
                <Input
                  id="to"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="Type city name"
                  className="border-none p-0 focus-visible:ring-transparent"
                />
              </div>
              <div className="hidden lg:block border-l border-gray-200 h-16 mx-4"></div>
              <div className="w-full lg:w-1/5 mb-4 lg:mb-0 lg:ml-8">
                <DepartureDatePresets />
              </div>
              <div className="w-full lg:w-1/5 mb-4 lg:mb-0 lg:ml-4">
                <ReturnDatePresets />
              </div>
              <div className="flex justify-center w-full lg:w-auto lg:ml-4 mt-4 lg:mt-5">
                {isLoading ? (
                  <Button
                    disabled
                    className="rounded-full justify-center bg-[#FF9C00] hover:bg-orange-500/90 active:border-b-0 text-black px-4 py-2 sm:py-3 md:py-4"
                  >
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Searching
                  </Button>
                ) : (
                  <Button
                    className="w-full lg:w-32 rounded-full bg-[#FF9C00] hover:bg-orange-500/90 active:border-b-0 text-black px-4 py-2 sm:py-3 md:py-4"
                    onClick={handleReadMoreClick}
                  >
                    Search
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SpecialDeals;

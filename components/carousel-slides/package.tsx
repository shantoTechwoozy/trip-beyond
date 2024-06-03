"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SelectAge } from "@/components/search-engine-select/select-age";
import { SelectEconomy } from "@/components/search-engine-select/select-economy";
import { MdSwapHorizontalCircle } from "react-icons/md";
import { DepartureDatePresets } from "@/components/search-engine-select/departure-date";
import { ReturnDatePresets } from "@/components/search-engine-select/return-date";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Loader2 } from "lucide-react";

const Package: React.FC = () => {
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
    <div className="flex flex-col justify-center items-start w-full p-4 md:p-5 lg:p-10 space-y-4 md:space-y-2 lg:space-y-0">
      <Tabs defaultValue="oneWay" className="w-full lg:flex-grow">
        <div className="flex flex-wrap justify-between items-center w-full">
          <TabsList className="flex w-full md:w-auto lg:w-auto space-x-1 gap-8 lg:gap-8 md:gap-8">
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

          <div className="flex flex-col md:flex-row justify-center md:justify-start md:space-x-2 lg:space-x-4 space-y-4 md:space-y-0 w-full md:w-auto mt-4 md:mt-0 mr-0 md:mr-0 lg:mr-18">
            <SelectAge />
            <SelectEconomy />
          </div>

          <div className="flex items-center space-x-2 ml-0 md:ml-8 mt-5 lg:mt-0 md:mt-0">
            <Switch id="direct flights only" />
            <Label
              htmlFor="direct flights only"
              className="text-xs md:text-sm lg:text-md"
            >
              Direct Flights only
            </Label>
          </div>
        </div>
        <TabsContent value="oneWay">
          <Card className="border-none">
            <CardContent className="w-full p-1 flex flex-wrap md:flex-nowrap lg:flex-nowrap items-center">
              <div className="w-full md:w-[150px] lg:w-[150px] mb-4 md:mb-0 lg:mb-0">
                <Label htmlFor="from" className="text-orange-400 font-bold">
                  From
                </Label>
                <Input
                  id="from"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="Type city name"
                  className="lg:text-lg md:text-xs border-none p-0 focus-visible:ring-transparent"
                />
              </div>
              <div className="self-center md:self-auto lg:self-auto md:ml-4 lg:ml-4">
                <MdSwapHorizontalCircle
                  size={24}
                  onClick={handleSwap}
                  className="cursor-pointer text-orange-400"
                  aria-label="Swap From and To"
                />
              </div>
              <div className="w-full md:w-[150px] lg:w-[150px] mb-4 md:mb-0 lg:mb-0 md:ml-6 lg:ml-16 mt-5 md:mt-0 lg:mt-0">
                <Label htmlFor="to" className="text-orange-400 font-bold">
                  To
                </Label>
                <Input
                  id="to"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="Type city name"
                  className="lg:text-lg md:text-xs border-none p-0 focus-visible:ring-transparent"
                />
              </div>
              <div className="hidden md:block lg:block border-l border-gray-200 h-16 mx-4 mr-8"></div>

              <div className="flex flex-col md:w-1/5 lg:w-1/5 ">
                <Label
                  htmlFor="departure"
                  className="text-orange-400 font-bold ml-0 md:ml-5 lg:ml-0"
                >
                  Departure
                </Label>
                <DepartureDatePresets />
              </div>

              <div className="flex flex-col md:w-1/5 lg:w-1/5 ">
                <Label
                  htmlFor="return"
                  className="text-orange-400 font-bold ml-5 md:ml-5 lg:ml-0"
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
            <CardContent className="w-full p-1 flex flex-wrap md:flex-nowrap lg:flex-nowrap items-center">
              <div className="w-full md:w-[150px] lg:w-[150px] mb-4 md:mb-0 lg:mb-0">
                <Label htmlFor="from" className="text-orange-400 font-bold">
                  From
                </Label>
                <Input
                  id="from"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="Type city name"
                  className="lg:text-lg md:text-xs border-none p-0 focus-visible:ring-transparent"
                />
              </div>
              <div className="self-center md:self-auto lg:self-auto md:ml-4 lg:ml-4">
                <MdSwapHorizontalCircle
                  size={24}
                  onClick={handleSwap}
                  className="cursor-pointer text-orange-400"
                  aria-label="Swap From and To"
                />
              </div>
              <div className="w-full md:w-[150px] lg:w-[150px] mb-4 md:mb-0 lg:mb-0 md:ml-6 lg:ml-16 mt-5 md:mt-0 lg:mt-0">
                <Label htmlFor="to" className="text-orange-400 font-bold">
                  To
                </Label>
                <Input
                  id="to"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="Type city name"
                  className="lg:text-lg md:text-xs border-none p-0 focus-visible:ring-transparent"
                />
              </div>
              <div className="hidden md:block lg:block border-l border-gray-200 h-16 mx-4 mr-8"></div>

              <div className="flex flex-col md:w-1/5 lg:w-1/5 ">
                <Label
                  htmlFor="departure"
                  className="text-orange-400 font-bold ml-0 md:ml-5 lg:ml-0"
                >
                  Departure
                </Label>
                <DepartureDatePresets />
              </div>

              <div className="flex flex-col md:w-1/5 lg:w-1/5 ">
                <Label
                  htmlFor="return"
                  className="text-orange-400 font-bold ml-5 md:ml-5 lg:ml-0"
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
            <CardContent className="w-full p-1 flex flex-wrap md:flex-nowrap lg:flex-nowrap items-center">
              <div className="w-full md:w-[150px] lg:w-[150px] mb-4 md:mb-0 lg:mb-0">
                <Label htmlFor="from" className="text-orange-400 font-bold">
                  From
                </Label>
                <Input
                  id="from"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="Type city name"
                  className="lg:text-lg md:text-xs border-none p-0 focus-visible:ring-transparent"
                />
              </div>
              <div className="self-center md:self-auto lg:self-auto md:ml-4 lg:ml-4">
                <MdSwapHorizontalCircle
                  size={24}
                  onClick={handleSwap}
                  className="cursor-pointer text-orange-400"
                  aria-label="Swap From and To"
                />
              </div>
              <div className="w-full md:w-[150px] lg:w-[150px] mb-4 md:mb-0 lg:mb-0 md:ml-6 lg:ml-16 mt-5 md:mt-0 lg:mt-0">
                <Label htmlFor="to" className="text-orange-400 font-bold">
                  To
                </Label>
                <Input
                  id="to"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="Type city name"
                  className="lg:text-lg md:text-xs border-none p-0 focus-visible:ring-transparent"
                />
              </div>
              <div className="hidden md:block lg:block border-l border-gray-200 h-16 mx-4 mr-8"></div>

              <div className="flex flex-col md:w-1/5 lg:w-1/5 ">
                <Label
                  htmlFor="departure"
                  className="text-orange-400 font-bold ml-0 md:ml-5 lg:ml-0"
                >
                  Departure
                </Label>
                <DepartureDatePresets />
              </div>

              <div className="flex flex-col md:w-1/5 lg:w-1/5 ">
                <Label
                  htmlFor="return"
                  className="text-orange-400 font-bold ml-5 md:ml-5 lg:ml-0"
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

export default Package;

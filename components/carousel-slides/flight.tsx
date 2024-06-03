import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SelectAge } from "@/components/search-engine-select/select-age";
import { SelectEconomy } from "@/components/search-engine-select/select-economy";
import { Switch } from "@/components/ui/switch";
import { Content } from "../se-common/tab-content";

const Flight: React.FC = () => {
  const [from, setFrom] = useState({ value: "", displayValue: "" });
  const [to, setTo] = useState({ value: "", displayValue: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleReadMoreClick = () => {
    setIsLoading(true); // Set loading state to true when search button is clicked
    // Simulate loading delay, replace setTimeout with actual API call
    setTimeout(() => {
      setIsLoading(false); // Reset loading state after loading is complete
      console.log("Read more clicked");
    }, 2000); // Simulating 2 seconds loading time
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
          <Content
            from={from}
            to={to}
            setFrom={setFrom}
            setTo={setTo}
            isLoading={isLoading}
            handleReadMoreClick={handleReadMoreClick}
            handleSwap={handleSwap}
          />
        </TabsContent>
        <TabsContent value="roundTrip">
          <Content
            from={from}
            to={to}
            setFrom={setFrom}
            setTo={setTo}
            isLoading={isLoading}
            handleReadMoreClick={handleReadMoreClick}
            handleSwap={handleSwap}
          />
        </TabsContent>
        <TabsContent value="multiCity">
          <Content
            from={from}
            to={to}
            setFrom={setFrom}
            setTo={setTo}
            isLoading={isLoading}
            handleReadMoreClick={handleReadMoreClick}
            handleSwap={handleSwap}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Flight;

"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SelectAge } from "../search-engine-select/select-age";
import { SelectEconomy } from "../search-engine-select/select-economy";
import { MdSwapHorizontalCircle } from "react-icons/md";
import { motion } from "framer-motion"; // for animations

const SoecialDeals: React.FC = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start w-full lg:w-[660px] p-10 space-y-4 lg:space-y-0 lg:space-x-4">
      <Tabs defaultValue="oneWay" className="w-full lg:flex-grow">
        <TabsList className="flex justify-between space-x-1 lg:space-x-0">
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
        <TabsContent value="oneWay">
          <Card className="border-none">
            <CardContent className="space-y-4 p-1">
              <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
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
                </motion.div>
                <div className="self-center lg:self-auto">
                  <MdSwapHorizontalCircle
                    size={24}
                    onClick={handleSwap}
                    className="cursor-pointer text-orange-400 lg:mt-8"
                    aria-label="Swap From and To"
                  />
                </div>
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Label
                    htmlFor="to"
                    className="text-orange-400 font-bold md:ml-16"
                  >
                    To
                  </Label>
                  <Input
                    id="to"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="Type city name"
                    className="border-none p-0  focus-visible:ring-transparent md:ml-16"
                  />
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="roundTrip">
          <Card className="border-none">
            <CardContent className="space-y-4 p-1">
              <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
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
                </motion.div>
                <div className="self-center lg:self-auto mt-4 lg:mt-0">
                  <MdSwapHorizontalCircle
                    size={24}
                    onClick={handleSwap}
                    className="cursor-pointer text-orange-400 lg:mt-8"
                    aria-label="Swap From and To"
                  />
                </div>
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Label
                    htmlFor="to"
                    className="text-orange-400 font-bold md:ml-16"
                  >
                    To
                  </Label>
                  <Input
                    id="to"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="Type city name"
                    className="border-none p-0 focus-visible:ring-transparent md:ml-16"
                  />
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="multiCity">
          <Card className="border-none">
            <CardContent className="space-y-4 p-1">
              <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
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
                </motion.div>
                <div className="self-center lg:self-auto mt-4 lg:mt-0">
                  <MdSwapHorizontalCircle
                    size={24}
                    onClick={handleSwap}
                    className="cursor-pointer text-orange-400 lg:mt-8"
                    aria-label="Swap From and To"
                  />
                </div>
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Label
                    htmlFor="to"
                    className="text-orange-400 font-bold md:ml-16"
                  >
                    To
                  </Label>
                  <Input
                    id="to"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="Type city name"
                    className="border-none p-0 focus-visible:ring-transparent md:ml-16"
                  />
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-start lg:space-x-4 space-y-4 lg:space-y-0 w-full lg:w-auto">
        <SelectAge />
        <SelectEconomy />
      </div>
    </div>
  );
};

export default SoecialDeals;

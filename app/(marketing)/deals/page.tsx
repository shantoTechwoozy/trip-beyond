"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import dealsData from "@/data-resources/dealsData";
import { Button } from "@/components/ui/button";

const DealsCard: React.FC = () => {
  return (
    <Carousel className="w-full max-w-screen-lg mx-auto">
      <CarouselContent className="-ml-1">
        {dealsData.map((deal) => (
          <CarouselItem
            key={deal.id}
            className="pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card className="relative h-[250px] sm:h-[180px] overflow-hidden">
                <Image
                  src={deal.imageUrl}
                  alt={deal.title}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="absolute inset-0 opacity-100 transition-opacity"
                />
                <CardContent className="absolute inset-0 flex flex-col items-start justify-end p-6 bg-black bg-opacity-40 transition-opacity">
                  <h3 className="text-xl font-medium text-white">
                    {deal.title}
                  </h3>
                  <p className="mt-2 text-xs text-white">{deal.description}</p>
                  <Button
                    variant="custom"
                    className="mt-3 font-bold inline-block px-5 py-3 tracking-wide"
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-slate-500 hidden lg:block" />
      <CarouselNext className="bg-slate-500 hidden lg:block top-24" />
    </Carousel>
  );
};

export default DealsCard;

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
import packageData from "@/data-resources/fev-packages";
import { Button } from "@/components/ui/button";

const FavoriteDesCard: React.FC = () => {
  return (
    <Carousel className="w-full max-w-screen-lg mx-auto">
      <CarouselContent className="-ml-1">
        {packageData.map((deal) => (
          <CarouselItem
            key={deal.id}
            className="pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card className="relative h-[250px] sm:h-[250px] overflow-hidden">
                <Image
                  src={deal.imageUrl}
                  alt={deal.title}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="absolute inset-0 opacity-100 transition-opacity"
                />
                <CardContent className="absolute inset-0 flex flex-col justify-end items-center p-6 bg-black bg-opacity-5 transition-opacity">
                  <Button
                    variant="custom"
                    className="mt-auto font-bold mb-4 inline-block px-5 py-3 tracking-wide"
                  >
                    Plan Trip
                  </Button>
                </CardContent>
              </Card>
            </div>
            <h3 className="text-md font-medium text-black text-center">
              {deal.title}
            </h3>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-slate-500 hidden lg:block top-32" />
      <CarouselNext className="bg-slate-500 hidden lg:block top-32" />
    </Carousel>
  );
};

export default FavoriteDesCard;

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
            className="pl-1 md:basis-1/2 lg:basis-1/4"
          >
            <div className="p-1">
              <Card className="relative h-[250px] sm:h-[250px] overflow-hidden">
                <Image
                  src={deal.imageUrl}
                  alt={deal.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="absolute inset-0 opacity-100 transition-opacity"
                />
                <CardContent className="absolute inset-0 flex flex-col justify-end items-center p-6 bg-black bg-opacity-40 transition-opacity">
                  <Button
                    variant="custom"
                    className="mt-auto mb-4 inline-block px-5 py-3 tracking-wide"
                  >
                    Plan Trip
                  </Button>
                </CardContent>
              </Card>
            </div>
            <h3 className="text-xl font-medium text-black text-center">
              {deal.title}
            </h3>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:block top-32" />
      <CarouselNext className="hidden lg:block top-32" />
    </Carousel>
  );
};

export default FavoriteDesCard;

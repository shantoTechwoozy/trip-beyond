import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Flight from "@/components/carousel-slides/flight";
import Hotel from "@/components/carousel-slides/hotel";
import Package from "@/components/carousel-slides/package";
import SpecialDeals from "@/components/carousel-slides/special-deals";
import Transportation from "@/components/carousel-slides/transportation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

// Components for each carousel slide
const CarouselSlides = [Flight, Hotel, Package, Transportation, SpecialDeals];

export default function SearchEngine() {
  const [api, setApi] = useState<CarouselApi | undefined>();
  const [current, setCurrent] = useState(0);

  //Carousel Menu
  const menus = [
    "Flights",
    "Hotels",
    "Packages",
    "Transportation",
    "Special Deals",
  ];

  useEffect(() => {
    if (!api) return;

    const updateCurrentSlide = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    const setApiListeners = () => {
      api.on("select", updateCurrentSlide);
    };

    setApiListeners();
    updateCurrentSlide();

    return () => {
      api.off("select", updateCurrentSlide);
    };
  }, [api]);

  const handleMenuClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="w-full max-w-screen-xl">
      <div className="flex flex-wrap justify-center py-2 text-center text-sm text-white space-x-6">
        {menus.map((menu, index) => (
          <div
            key={index}
            className={`cursor-pointer ${
              current === index + 1 ? "font-bold" : ""
            }`}
            onClick={() => handleMenuClick(index)}
          >
            {menu}
          </div>
        ))}
      </div>
      <Carousel setApi={setApi} className="h-62">
        <CarouselContent>
          {CarouselSlides.map((Slide, index) => (
            <CarouselItem key={index}>
              <Card>
                <Slide />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:block" />
        <CarouselNext className="hidden sm:block" />
      </Carousel>
    </div>
  );
}

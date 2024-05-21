import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Flight from "@/components/carousel-slides/flight";
import Hotel from "@/components/carousel-slides/hotel";
import Package from "@/components/carousel-slides/package";
import SpecialDeals from "@/components/carousel-slides/special-deals";
import Transportation from "@/components/carousel-slides/transportation";
import { MdFlight } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { TbPackages } from "react-icons/tb";
import { IoCarOutline } from "react-icons/io5";
import { ImTicket } from "react-icons/im";
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

  // Carousel Menu
  const menus = [
    { label: "Flights", icon: <MdFlight /> },
    { label: "Hotels", icon: <RiHotelLine /> },
    { label: "Packages", icon: <TbPackages /> },
    { label: "Transportation", icon: <IoCarOutline /> },
    { label: "Special Deals", icon: <ImTicket /> },
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
      <div className="flex flex-wrap justify-center py-2 text-center text-lg italic text-white space-x-4 sm:space-x-8">
        {menus.map((menu, index) => (
          <div
            key={index}
            className={`cursor-pointer flex items-center mb-2 sm:mb-0 ${
              current === index + 1 ? "font-bold" : ""
            }`}
            onClick={() => handleMenuClick(index)}
          >
            {typeof menu === "object" ? (
              <div className="flex items-center hover:bg-orange-400 p-2 rounded-lg">
                {menu.icon}
                <span className="ml-2">{menu.label}</span>
              </div>
            ) : (
              menu
            )}
          </div>
        ))}
      </div>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {CarouselSlides.map((Slide, index) => (
            <CarouselItem key={index}>
              <Card>
                <Slide />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:block top-24" />
        <CarouselNext className="hidden lg:block top-24" />
      </Carousel>
    </div>
  );
}

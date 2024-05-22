"use client";
import { useState } from "react";
import DealsCard from "./deals/page";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Exclusives from "./exclusives/page";
import { FaV } from "react-icons/fa6";
import FavoriteDesCard from "./favorite-destination/page";
import DownloadApp from "./download-app/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleReadMoreClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <main className="flex flex-col items-center justify-center px-4 md:p-8 lg:p-10">
      <div className="w-full max-w-screen-lg mx-auto mt-5 mb-5">
        <div className="text-justify max-w-lg md:max-w-[1150px] text-base md:text-lg lg:text-sm decoration-solid mt-10">
          {" "}
          <p>
            Unlock the extraordinary with Trip Beyond, your passport to
            unparalleled adventures. From secluded beaches to majestic peaks,
            our expert team crafts tailor-made journeys that redefine travel.
            Immerse yourself in culture, savor unique experiences, and create
            memories that last a lifetime. Join us and journey beyond the
            ordinary with Trip Beyond.
          </p>
          <div className="flex justify-center">
            {isLoading ? (
              <Button
                disabled
                className="rounded-full justify-center bg-[#FF9C00] hover:bg-orange-500/90 active:border-b-0 text-black px-4 py-2 sm:py-3 md:py-4 mt-5"
              >
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button
                className="rounded-full bg-[#FF9C00] hover:bg-orange-500/90 active:border-b-0 text-black px-4 py-2 sm:py-3 md:py-4 mt-5"
                onClick={handleReadMoreClick}
              >
                Read more
              </Button>
            )}
          </div>
        </div>

        <h1 className="text-xl md:text-2xl lg:text-xl text-center font-bold mb-5 mt-8">
          Find Great Deals, Only for you
        </h1>
        <DealsCard />
        <h1 className="text-xl md:text-2xl lg:text-xl text-center font-bold mb-5 mt-20">
          Exclusives from our partners
        </h1>
        <Exclusives />
        <h1 className="text-xl md:text-2xl lg:text-xl text-center font-bold mb-5 mt-20">
          Favourite Destination Packages
        </h1>
        <FavoriteDesCard />
        <DownloadApp />
        <div className="text-justify max-w-lg md:max-w-[1150px] decoration-solid mt-10">
          <h2 className=" font-bold">Save on Travel with tripbeyond.com</h2>
          <p className="text-justify text-base md:text-lg lg:text-sm decoration-solid mt-5">
            Unlock the extraordinary with Trip Beyond, your passport to
            unparalleled adventures. From secluded beaches to majestic peaks,
            our expert team crafts tailor-made journeys that redefine travel.
            Immerse yourself in culture, savor unique experiences, and create
            memories that last a lifetime. Join us and journey beyond the
            ordinary with Trip Beyond.
          </p>
        </div>
        <div className="text-justify max-w-lg md:max-w-[1150px] decoration-solid mt-5">
          <h2 className=" font-bold">Featured Hotel Destinations</h2>
          <p className="text-justify text-base md:text-lg lg:text-sm decoration-solid mt-5">
            Hotels in Shanghai | Hotels in Beijing | Hotels in Guangzhou |
            Hotels in Shenzhen | Hotels in Hangzhou | Hotels in Xiamen | Hotels
            in Chengdu | Hotels in Hong Kong | Hotels in Macau | Hotels in Tokyo
            | Hotels in Osaka | Hotels in Kyoto | Hotels in Fukuoka | Hotels in
            Sapporo | Hotels in Seoul | Hotels in Taipei | Hotels in Singapore |
            Hotels in Kuala Lumpur | Hotels in Bangkok | Hotels in Da Nang
          </p>
        </div>
        <div className="text-justify max-w-lg md:max-w-[1150px] decoration-solid mt-5">
          <h2 className=" font-bold">Featured Flight Destinations</h2>
          <p className="text-justify text-base md:text-lg lg:text-sm decoration-solid mt-5">
            Flights to Cebu | Flights to Jakarta | Flights to Hanoi | Flights to
            Chengdu | Flights to Phuket | Flights to Macau | Flights to Ho Chi
            Minh | Flights to Osaka | Flights to Shenzhen | Flights to Shanghai
            | Flights to Beijing | Flights to Hong Kong | Flights to Seoul |
            Flights to Bangkok | Flights to Taipei | Flights to Singapore |
            Flights to Tokyo | Flights to Manila | Flights to Guangzhou |
            Flights to Kuala Lumpur
          </p>
        </div>
        <div className="text-justify max-w-lg md:max-w-[1150px] decoration-solid mt-5">
          <h2 className=" font-bold">Featured Tours & Tickets</h2>
          <p className="text-justify text-base md:text-lg lg:text-sm decoration-solid mt-5">
            Shanghai Disneyland Ticket | Forbidden City Ticket | Terracotta
            Warriors Ticket | Sichuan Opera Show Ticket | Universal Orlando
            Ticket | Legoland Florida Ticket | Antelope Canyon Ticket | Empire
            State Building Observation Deck Ticket | Statue of Liberty Cruise |
            Kualoa Ranch Day Tou
          </p>
        </div>
      </div>
    </main>
  );
}

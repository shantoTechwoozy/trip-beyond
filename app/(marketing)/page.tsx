"use client";
import { useState } from "react";
import DealsCard from "./deals/page";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Exclusives from "./exclusives/page";
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
        <div className="text-justify max-w-lg md:max-w-[1150px] text-base sm:text-sm md:text-lg lg:text-base decoration-solid mt-10">
          <p className="text-sm decoration-inherit">
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

        <h1 className="text-xl sm:text-lg md:text-2xl lg:text-xl text-center font-bold mb-5 mt-14">
          Find Great Deals, Only for you
        </h1>
        <DealsCard />
        <h1 className="text-xl sm:text-lg md:text-2xl lg:text-xl text-center font-bold mb-5 mt-20">
          Exclusives from our partners
        </h1>
        <Exclusives />
        <h1 className="text-xl sm:text-lg md:text-2xl lg:text-xl text-center font-bold mb-5 mt-20">
          Favourite Destination Packages
        </h1>
        <FavoriteDesCard />
        <DownloadApp />
        <div className="text-justify max-w-lg md:max-w-[1150px] text-base sm:text-sm md:text-lg lg:text-base decoration-solid mt-10">
          <h2 className="font-bold">Save on Travel with tripbeyond.com</h2>
          <p className="mt-5 text-sm decoration-inherit">
            Tripbeyond.com is a rapidly-growing global online travel agency,
            Tripbeyond.com is here to help you plan the perfect trip. Whether
            youre going on holiday, taking a business trip, or looking to set up
            a corporate travel account, Tripbeyond.com is here to help you
            travel the world with cheap fights, discount hotels, and train
            tickets. Looking to find great travel deals or enjoy the biggest
            savings on your next trip? Trip.com has you covered. With our
            easy-to-use website and app, along with 24-hour customer service,
            booking your next trip couldn&apos;t be simpler. With
            Tripbeyond.com, quality travel services in over a dozen languages
            including English, Mandarin, Cantonese, Japanese, Korean, German,
            French, and Spanish are just a call— or click—away. Easily Customize
            Your Trip with the Best Hotel and Flight Deals
          </p>
          <p className="mt-5 text-sm decoration-inherit">
            It&apos;s easy to customize your travel experience with our robust
            flight and hotel search filter options and Trip.com travel tools
            like flight fare alerts, deal-finder calendar, and early bird deals.
            Tripbeyond.com&apos;s secure payment system takes the stress out of
            travel by providing easy payment options, including credit and debit
            cards, and UnionPay.
          </p>
        </div>
        <div className="text-justify max-w-lg md:max-w-[1150px] text-base sm:text-sm md:text-lg lg:text-base decoration-solid mt-5">
          <h2 className="font-bold">Featured Hotel Destinations</h2>
          <p className="mt-5 text-sm decoration-inherit">
            Hotels in Shanghai | Hotels in Beijing | Hotels in Guangzhou |
            Hotels in Shenzhen | Hotels in Hangzhou | Hotels in Xiamen | Hotels
            in Chengdu | Hotels in Hong Kong | Hotels in Macau | Hotels in Tokyo
            | Hotels in Osaka | Hotels in Kyoto | Hotels in Fukuoka | Hotels in
            Sapporo | Hotels in Seoul | Hotels in Taipei | Hotels in Singapore |
            Hotels in Kuala Lumpur | Hotels in Bangkok | Hotels in Da Nang
          </p>
        </div>
        <div className="text-justify max-w-lg md:max-w-[1150px] text-base sm:text-sm md:text-lg lg:text-base decoration-solid mt-5">
          <h2 className="font-bold">Featured Flight Destinations</h2>
          <p className="mt-5 text-sm decoration-inherit">
            Flights to Cebu | Flights to Jakarta | Flights to Hanoi | Flights to
            Chengdu | Flights to Phuket | Flights to Macau | Flights to Ho Chi
            Minh | Flights to Osaka | Flights to Shenzhen | Flights to Shanghai
            | Flights to Beijing | Flights to Hong Kong | Flights to Seoul |
            Flights to Bangkok | Flights to Taipei | Flights to Singapore |
            Flights to Tokyo | Flights to Manila | Flights to Guangzhou |
            Flights to Kuala Lumpur
          </p>
        </div>
        <div className="text-justify max-w-lg md:max-w-[1150px] text-base sm:text-sm md:text-lg lg:text-base decoration-solid mt-5">
          <h2 className="font-bold">Featured Tours & Tickets</h2>
          <p className="mt-5 text-sm decoration-inherit">
            Shanghai Disneyland Ticket | Forbidden City Ticket | Terracotta
            Warriors Ticket | Sichuan Opera Show Ticket | Universal Orlando
            Ticket | Legoland Florida Ticket | Antelope Canyon Ticket | Empire
            State Building Observation Deck Ticket | Statue of Liberty Cruise |
            Kualoa Ranch Day Tour
          </p>
        </div>
      </div>
    </main>
  );
}

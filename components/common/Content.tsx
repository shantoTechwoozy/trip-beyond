"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function Content() {
  const [isLoading, setIsLoading] = useState(false);

  const handleReadMoreClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 md:p-8 lg:p-10">
      <div className="w-full max-w-screen-lg mx-auto mt-5 mb-5">
        <div className="text-justify max-w-lg md:max-w-[1150px] text-base sm:text-sm md:text-lg lg:text-base decoration-solid mt-10">
          <p className="text-sm decoration-inherit text-center sm:text-justify">
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
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import DealsCard from "../../components/deals/page";
import Exclusives from "../../components/exclusives/page";
import FavoriteDesCard from "../../components/favorite-destination/page";
import DownloadApp from "../../components/download-app/page";
import Content from "@/components/common/Content";
import ContentFooter from "@/components/common/ContentFooter";
import SearchEngine from "@/components/carousel-slides/search-engine/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleReadMoreClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <main>
      {/* <div className="flex flex-col justify-center items-start w-full p-4 md:p-5 lg:p-10 space-y-4 md:space-y-2 lg:space-y-0">
      <SearchEngine/>
      </div> */}
   
      <div className="w-full max-w-screen-lg mx-auto mt-5 mb-5 p-8">
        <Content />
        <DealsCard />
        <Exclusives />
        <FavoriteDesCard />
        <DownloadApp />
        <ContentFooter />
      </div>
    </main>
  );
}

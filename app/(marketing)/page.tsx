import { DealsCard } from "@/components/card-sections/deals";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4 md:p-8 lg:p-10">
      <p className="text-justify max-w-lg md:max-w-none text-base md:text-lg lg:text-xl decoration-solid mt-10">
        Unlock the extraordinary with Trip Beyond, your passport to unparalleled
        adventures. From secluded beaches to majestic peaks, our expert team
        crafts tailor-made journeys that redefine travel. Immerse yourself in
        culture, savor unique experiences, and create memories that last a
        lifetime. Join us and journey beyond the ordinary with Trip Beyond.
      </p>
      <Button
        className="rounded-full bg-[#FF9C00] hover:bg-orange-500/90 active:border-b-0 text-black px-4 py-2 sm:py-3 md:py-4 mt-5"
        variant="custom"
      >
        Read more
      </Button>
      <div className="w-full max-w-screen-lg mx-auto mt-5 mb-5">
        <h1 className="text-xl md:text-2xl lg:text-xl text-center font-bold mb-5 mt-8">
          Find Great Deals, Only for you
        </h1>
        <DealsCard />
      </div>
    </main>
  );
}

import { Button } from "@/components/ui/button";
import Image from "next/image";

const Exclusives: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      {/* banner images */}
      <div className="h-64 rounded-[35px] relative bg-gray-200 lg:col-span-2">
        <Image
          src="/exclusive/exclusive1.jpg"
          alt="Exclusive 1"
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="rounded-[35px]"
        />
      </div>
      <div className="h-64 rounded-[35px] relative bg-gray-200">
        <Image
          src="/exclusive/exclusive2.jpg"
          alt="Exclusive 2"
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="rounded-[35px]"
        />
      </div>
      {/* banner descriptions */}
      <div className="h-48 relative lg:col-span-2 flex items-start p-4">
        <div className="flex items-center justify-between w-full">
          <div>
            <h3 className="text-xl font-bold mb-2">Last minute Summer Trip</h3>
            <p className="text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <Button variant="custom" className="ml-4 font-bold">
            Let&apos;s Go
          </Button>
        </div>
      </div>
      <div className="h-48 relative flex items-center p-4">
        <div className="flex item-start justify-between w-full">
          <div>
            <h3 className="text-xl font-bold mb-2">
              Flying from Delhi-London?
            </h3>
            <p className="text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <Button variant="custom" className="ml-4 mt-5 font-bold">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Exclusives;

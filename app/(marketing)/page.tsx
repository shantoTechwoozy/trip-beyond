import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-5 md:p-24">
      {" "}
      {/* Adjust padding for different screen sizes */}
      <p className="text-center text-justify max-w-lg md:max-w-none decoration-solid">
        {" "}
        {/* Limit text width on larger screens */}
        Unlock the extraordinary with Trip Beyond, your passport to unparalleled
        adventures. From secluded beaches to majestic peaks, our expert team
        crafts tailor-made journeys that redefine travel. Immerse yourself in
        culture, savor unique experiences, and create memories that last a
        lifetime. Join us and journey beyond the ordinary with Trip Beyond.
      </p>
      <Button className="mt-4" variant="custom">
        Read more
      </Button>
    </main>
  );
}

import React from "react";
import Image from "next/image";

const QRCodeComponent = () => {
  return (
    <div className="h-80 md:h-96 lg:h-80 rounded-[35px] relative lg:col-span-2 mt-12 lg:mt-24">
      <Image
        src="/qrBanner/qrcode.png"
        alt="QR code"
        fill
        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
        className="rounded-[35px]"
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start p-4 sm:p-6 bg-black bg-opacity-40 rounded-[35px] transition-opacity">
        <div className="text-orange-400 text-left lg:ml-10">
          {/* <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 sm:mb-2 leading-tight">
            Download Our App
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 sm:mb-2 leading-tight">
            and personalise your travel booking
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 sm:mb-2 leading-tight">
            experience
          </h2> */}
        </div>
      </div>
    </div>
  );
};

export default QRCodeComponent;

import Image from "next/image";
import { Card } from "@/app/ui/Card";

export default function ServiceSection() {
  return (
    <div className="flex flex-col max-w-[90%] mx-auto justify-center items-center">
        <div>
            <h1>
            OUR SERVICES
            </h1> 
            <p>
            E-Africa equips individuals with job-ready skills and helps organizations build better teams        
            through training, consulting, and talent sourcing.
            </p>
        </div>
        <Card className="w-full max-w-5xl mx-auto p-4 bg-transparent border-none shadow-none">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="relative w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src="/service1.webp"
            alt="Top Left Overlay"
            fill
            className="object-cover"
          />
          {/* <div className="absolute bottom-0 w-full backdrop-blur-md bg-white/30 text-black px-4 py-2 text-sm font-medium">
            Top Left Overlay Text
          </div> */}
        </div>

        <div className="relative w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src="/service-2.webp"
            alt="Top Right Overlay"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 w-full backdrop-blur-md bg-white/30 text-black px-4 py-2 text-sm font-medium">
            Top Right Overlay Text
          </div>
        </div>
      </div>

      <div className="relative w-full aspect-[5/2] overflow-hidden rounded-xl">
        <Image
          src="/service-3.webp"
          alt="Full Width Overlay"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 w-full backdrop-blur-md bg-white/30 text-black px-6 py-4 text-lg font-semibold">
          Full Width Image Text
        </div>
      </div>
    </Card>

    </div>
    
  );
}

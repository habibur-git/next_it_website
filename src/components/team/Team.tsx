import { teamData } from "@/data/team";
import Image from "next/image";

export default function Team() {
  return (
    <section className="nt-pb-36">
      <div className="nt-container">
        <div className="nt-mb-16 nt-text-center">
          <h2 className="nt-text-white">Our Team Behind The Studio</h2>
        </div>
        <div className="nt-grid sm:nt-grid-cols-2 md:nt-grid-cols-3 lg:nt-grid-cols-4 nt-gap-4 nt-p-0">
          {teamData.slice(0, 4).map((elm, i) => (
            <div key={i} className="w-full">
              <Image
                width={306}
                height={350}
                src={elm.imageSrc}
                alt="Team Image"
                priority={false}
                className="nt-w-full nt-object-cover"
              />
              <div className="nt-mt-6">
                <h5 className="nt-mb-0 nt-text-white">{elm.name}</h5>
                <p className="nt-mt-2 nt-text-white/60 nt-text-sm">{elm.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

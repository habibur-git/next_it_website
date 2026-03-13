import { socialMediaLinks } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="nt-grid nt-grid-cols-2 sm:nt-grid-cols-4 nt-gap-2 nt-mb-6">
      {socialMediaLinks.map((link) => {
        const Icon = link.icon;

        return (
          <Link
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="nt-w-full nt-h-full nt-flex nt-flex-col nt-items-center nt-justify-center nt-text-white nt-bg-white/5 nt-bg-opacity-10 nt-hover:nt-bg-opacity-20 nt-rounded-3xl nt-py-8 nt-px-6 nt-transition nt-text-center"
          >
            {link.image ? (
              <Image
                src={link.image}
                alt={link.label}
                width={82}
                height={30}
                className="-mb-0.5"
              />
            ) : Icon ? (
              <Icon className="nt-text-h5 nt-sm:nt-text-h2" />
            ) : null}
            <h5 className="hidden md:block nt-text-[16px] nt-text-white nt-mt-4">
              {link.label}
            </h5>
          </Link>
        );
      })}
    </div>
  );
}

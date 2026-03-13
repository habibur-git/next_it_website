import { links } from "@/data/footerlink";
// import Image from "next/image";
import Link from "next/link";
import Socials from "./component/Socials";

export default function Footer() {
  return (
    <footer className="nt-bg-black nt-relative nt-pt-20 nt-overflow-hidden">
      <div className="nt-container">
        <div className="nt-grid nt-grid-cols-4 nt-gap-6 nt-justify-between nt-mb-12">
          {Object.entries(links).map(([sectionName, sectionLinks]) => (
            <div key={sectionName}>
              <h6 className="nt-text-white nt-uppercase nt-text-[16px] nt-font-bold">
                {sectionName}
              </h6>
              <ul className="nt-p-0 nt-flex nt-flex-col nt-gap-2 nt-mt-5">
                {sectionLinks.map((link) => (
                  <li key={link.id} className="nt-list-none">
                    <Link
                      scroll={false}
                      href={link.href}
                      className="nt-text-white nt-opacity-80 nt-hover:nt-text-secondary nt-hover:nt-opacity-[1] nt-no-underline"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-full">
          <Socials />
          <div className="nt-flex nt-justify-between nt-flex-wrap nt-gap-6 nt-mt-12 nt-py-6">
            <p className="nt-text-white nt-text-base">
              Copyright © {new Date().getFullYear()}
              <Link
                href="https://devionex.com"
                className="nt-ml-1 nt-font-semibold nt-text-theme"
              >
                nextit.agency
              </Link>
            </p>
            <p className="nt-text-white nt-text-base">
              Download Company Profile
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import Button from "@/components/ui/button";

// type 
type IProps = {
  cls?: string;
};

export default function BigText({cls=""}: IProps) {
  return (
    <div className={`sv-big-text-area pb-80 ${cls}`}>
      <div className="container container-1530">
        <div className="sv-small-text-box d-flex justify-content-between">
          <span>DIGITAL DESIGN EXPERIENCE</span>
          <span>CREATIVE STUDIO</span>
        </div>
        <div className="sv-big-text-box">
          <h4 className="sv-big-text tp-char-animation">
            <Button label="Get in Touch" href="/contact" variant="primary" />
          </h4>
        </div>
      </div>
    </div>
  );
}

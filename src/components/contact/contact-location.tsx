import Image from "next/image";
// images
// images
import location_1 from "@/assets/img/bd.webp";
import location_3 from "@/assets/img/ku.webp";
import location_2 from "@/assets/img/ml.jpg";
import Link from "next/link";

// data
const location_data = [
  {
    id: 1,
    img: location_1,
    country: "Bangladesh",
    time: "GMT+6",
    location_title: "Dhaka Office",
    address:
      "H/1, Road-6, Duaripara Bazar, <br /> Rupnagar, Mirpur, Dhaka-1216",
    phone: "(+880) 1690274952",
    email: "contact@devionex.com",
  },
  {
    id: 2,
    img: location_2,
    country: "Malaysia",
    time: "GMT+8",
    location_title: "Malaysia Office",
    address: "Seri Kembangan, Selangor, <br /> Malaysia 43300",
    phone: "(+880) 1690274952",
    email: "contact@devionex.com",
  },
  {
    id: 3,
    img: location_3,
    country: "Kuwait",
    time: "GMT+3",
    location_title: "Update my location",
    address:
      "Al-Mubarakah: Fahad Al-Basman Heritage Complex, <br /> Ground Floor, Shop No. 16",
    phone: "(+880) 1690274952",
    email: "contact@devionex.com",
  },
];

const ContactLocation = () => {
  return (
    <div className="cn-contact-info-area">
      <div className="container container-1840">
        <div className="cn-contact-info-bg black-bg">
          {location_data.map((item) => (
            <div key={item.id} className="cn-contact-info-item">
              <div className="row">
                <div className="col-xl-7">
                  <div className="cn-contact-left d-flex flex-wrap align-items-center">
                    <div className="cn-contact-info-thumb">
                      <Image
                        src={item.img}
                        alt="image"
                        width={100}
                        height={100}
                        style={{ height: "auto" }}
                      />
                    </div>
                    <div className="cn-contact-left-info">
                      <h4 className="cn-contact-left-title">{item.country}</h4>
                      <span>
                        <i className="fa-regular fa-clock"></i>
                        {item.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="cn-contact-right-wrap d-flex align-items-start justify-content-between">
                    <div className="cn-contact-right">
                      <div className="cn-contact-location">
                        <span className="cn-contact-location-title">
                          {item.location_title}
                        </span>
                        <Link
                          href="https://www.google.com/maps"
                          target="_blank"
                          dangerouslySetInnerHTML={{ __html: item.address }}
                        ></Link>
                      </div>
                      <div className="nt-flex nt-flex-col nt-gap-2">
                        <Link
                          className="nt-text-h6 nt-text-white"
                          href={`tel:${item.phone.replace(/\s/g, "")}`}
                        >
                          {item.phone}
                        </Link>
                        <Link
                          className="nt-text-h6 nt-text-white"
                          href={`mailto:${item.email}`}
                        >
                          {item.email}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactLocation;

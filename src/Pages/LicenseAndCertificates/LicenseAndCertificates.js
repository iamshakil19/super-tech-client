import React, { useEffect } from "react";
import PageTitle from "../../Utils/PageTitle";
import LicenseAndCertificateCard from "./LicenseAndCertificateCard";
const data = [
  {
    name: "E - Trade license Furniture",
    colorFrom: "from-[#36D1DC]",
    colorTo: "to-[#5B86E5]",
    link: "https://drive.google.com/file/d/10WHuMt5hjuftORAjBo0wzYc6Cdjq_OPw/view?usp=sharing",
  },
  {
    name: "ISO 9001-2015 Certificate",
    colorFrom: "from-[#EF3B36]",
    colorTo: "to-[#FFFFFF]",
    link: "https://drive.google.com/file/d/1Z4UyJmfdSNyWokuoPd9q2kNq-Jm6q8SU/view?usp=sharing",
  },
  {
    name: "Value Added Tax Registration Certificate",
    colorFrom: "from-[#DCE35B]",
    colorTo: "to-[#45B649]",
    link: "https://drive.google.com/file/d/1YWlf1tP2qD-eF4XKz8Lo3VUCpl0i-lLL/view?usp=sharing",
  },
  {
    name: "TIN",
    colorFrom: "from-[#000046]",
    colorTo: "to-[#1CB5E0]",
    link: "https://drive.google.com/file/d/1eOM23FQJkBFS2ISlCy2-JisRzBpaGsAo/view?usp=sharing",
  },
  {
    name: "TIN Certificate",
    colorFrom: "from-[#F2994A]",
    colorTo: "to-[#F2C94C]",
    link: "https://drive.google.com/file/d/1sS77VTzJ5Y3fLfhm7h6BCeIdiUOOmlCl/view?usp=sharing",
  },
  {
    title: "Vat Certificate",
    name: "Vat Certificate",
    colorFrom: "from-[#4AC29A]",
    colorTo: "to-[#BDFFF3]",
    link: "https://drive.google.com/file/d/1Kdae3lJIEC3PlwjmKTRZgOTV2QRDDgdI/view?usp=sharing",
  },
  {
    name: "Factory license",
    colorFrom: "from-[#4568DC]",
    colorTo: "to-[#B06AB3]",
    link: "https://drive.google.com/file/d/1z9Nf0yKHzlpstZu-SDNEjkE93trQW3FA/view?usp=sharing",
  },
  {
    name: "Bangladesh Furniture Exporters Association Membership Certificate",
    colorFrom: "from-[#34e89e]",
    colorTo: "to-[#0f3443]",
    link: "https://drive.google.com/file/d/1GOZMGUWsrnml5voRm16QgoPXPvUTT_6u/view?usp=sharing",
  },
  {
    name: "Fair license",
    colorFrom: "from-[#F0F2F0]",
    colorTo: "to-[#000C40]",
    link: "https://drive.google.com/file/d/1ZbZlSrqizy6e94TzA25abbn3CID0EunH/view?usp=sharing",
  },
];
const LicenseAndCertificates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="my-10 container mx-auto">
      <PageTitle
        title={"License & Certificates - Super Tech Furniture & Interior"}
      ></PageTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 px-5">
        {data?.map((license) => (
          <LicenseAndCertificateCard license={license} />
        ))}
      </div>
    </div>
  );
};

export default LicenseAndCertificates;

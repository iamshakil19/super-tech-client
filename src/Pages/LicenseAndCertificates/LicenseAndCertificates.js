import React, { useEffect } from "react";
import PageTitle from "../../Utils/PageTitle";
import LicenseAndCertificateCard from "./LicenseAndCertificateCard";
const data = [
  {
    title: "Factory licenses",
    name: "Factory licenses",
    colorFrom: "from-[#36D1DC]",
    colorTo: "to-[#5B86E5]",
    link: "https://drive.google.com/file/d/1qx2PWNyNIqe1aMnrCiT66aXavfJlA9PV/view?usp=sharing",
    date: "",
  },
  {
    title: "Factory licenses",
    name: "Factory licenses",
    colorFrom: "from-[#EF3B36]",
    colorTo: "to-[#FFFFFF]",
    link: "https://drive.google.com/file/d/1qx2PWNyNIqe1aMnrCiT66aXavfJlA9PV/view?usp=sharing",
    date: "",
  },
  {
    title: "Factory licenses",
    name: "Factory licenses",
    colorFrom: "from-[#DCE35B]",
    colorTo: "to-[#45B649]",
    link: "https://drive.google.com/file/d/1qx2PWNyNIqe1aMnrCiT66aXavfJlA9PV/view?usp=sharing",
    date: "",
  },
  {
    title: "Factory licenses",
    name: "Factory licenses",
    colorFrom: "from-[#000046]",
    colorTo: "to-[#1CB5E0]",
    link: "https://drive.google.com/file/d/1qx2PWNyNIqe1aMnrCiT66aXavfJlA9PV/view?usp=sharing",
    date: "",
  },
  {
    title: "Factory licenses",
    name: "Factory licenses",
    colorFrom: "from-[#F2994A]",
    colorTo: "to-[#F2C94C]",
    link: "https://drive.google.com/file/d/1qx2PWNyNIqe1aMnrCiT66aXavfJlA9PV/view?usp=sharing",
    date: "",
  },
  {
    title: "Factory licenses",
    name: "Factory licenses",
    colorFrom: "from-[#4AC29A]",
    colorTo: "to-[#BDFFF3]",
    link: "https://drive.google.com/file/d/1qx2PWNyNIqe1aMnrCiT66aXavfJlA9PV/view?usp=sharing",
    date: "",
  },
  {
    title: "Factory licenses",
    name: "Factory licenses",
    colorFrom: "from-[#4568DC]",
    colorTo: "to-[#B06AB3]",
    link: "https://drive.google.com/file/d/1qx2PWNyNIqe1aMnrCiT66aXavfJlA9PV/view?usp=sharing",
    date: "",
  },
  {
    title: "Factory licenses",
    name: "Factory licenses",
    colorFrom: "from-[#34e89e]",
    colorTo: "to-[#0f3443]",
    link: "https://drive.google.com/file/d/1qx2PWNyNIqe1aMnrCiT66aXavfJlA9PV/view?usp=sharing",
    date: "",
  },
  {
    title: "Factory licenses",
    name: "Factory licenses",
    colorFrom: "from-[#F0F2F0]",
    colorTo: "to-[#000C40]",
    link: "https://drive.google.com/file/d/1qx2PWNyNIqe1aMnrCiT66aXavfJlA9PV/view?usp=sharing",
    date: "",
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

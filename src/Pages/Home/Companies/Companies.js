import React from "react";
import buet from "../../../Assets/Companies/buet.png";
import bfidc from "../../../Assets/Companies/bfidc.jpg";
import sAlomGroup from "../../../Assets/Companies/s_alam_group.jpg";
import ict from "../../../Assets/Companies/ict.png";
import ilo from "../../../Assets/Companies/ilo.jpg";
import pwd from "../../../Assets/Companies/pwd.png";
import who from "../../../Assets/Companies/who.png";
import bsmrmu from "../../../Assets/Companies/bsmrmu.png";
import bangjin from "../../../Assets/Companies/bangjin.png";
import palmal from "../../../Assets/Companies/palmal.png";
import green from "../../../Assets/Companies/green.png";
import summit from "../../../Assets/Companies/summit.png";

const Companies = () => {
  const companies = [
    buet,
    ict,
    bfidc,
    pwd,
    bsmrmu,
    green,
    who,
    ilo,
    summit,
    sAlomGroup,
    palmal,
    bangjin,
  ];

  return (
    <div className="mt-16 mb-24 container mx-auto">
      <h2 className="text-3xl font-bold poppins text-black  text-center pb-10">
        Trusted By Top Companies
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 ">
        {companies.map((company, i) => (
          <img key={i} className="w-32 mx-auto p-5" src={company} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Companies;

import React from "react";
import buet from "../../../Assets/Companies/buet.png";
import bfidc from "../../../Assets/Companies/bfidc.jpg";
import sAlomGroup from "../../../Assets/Companies/s_alam_group.jpg";
import ict from "../../../Assets/Companies/ict.png";
import ilo from "../../../Assets/Companies/ilo.jpg";
import pwd from "../../../Assets/Companies/pwd.png";
import who from "../../../Assets/Companies/who.png";
import bsmrmu from "../../../Assets/Companies/bsmrmu.png";

const Companies = () => {
  const companies = [buet, bfidc, sAlomGroup, ict, ilo, pwd, who, bsmrmu];

  return (
    <div className="mt-16 mb-24 container mx-auto">
      <h2 className="text-3xl font-bold poppins text-slate-700 text-center pb-10">
        Trusted By Top Companies
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 ">
        {companies.map((company) => (
          <img className="w-32 mx-auto p-5" src={company} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Companies;

import React from "react";
import PersonalInfo from "./PersonalInfo";
import ProffInfo from "./ProffInfo";

const Props = () => {
  let userName = "Prakash";
  let userAge = 24;
  let userEmail = "prakash@me.in";
  let userMobile = "987656784";

  let company = {
    company_name: "Microsoft Corp.",
    department: "Frontend",
    designation: "Software Developer",
    github: "www.github.com/prakash-ms",
    skills : ["React", "Angular", "Bootstrap", "Micro frontend"]
  };


  return (
    <div className="container">
      <div className="row mt-3">
        <PersonalInfo
          name={userName}
          age={userAge}
          email={userEmail}
          mob={userMobile}
        />
        <ProffInfo compData={company} />

      </div>
    </div>
  );
};

export default Props;

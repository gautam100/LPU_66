import React from "react";

const ProffInfo = ({ compData }) => {
  return (
    <>
      <div className="col-md-4" style={{ float: "left" }}>
        <div className="card" style={{ width: 18 + "rem" }}>
          <div className="card-body">
            <h5 className="card-title">Professional Information</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {compData.designation}
            </h6>
            <p className="card-text mb-3">
              {compData.company_name} | {compData.department}
            </p>
            <p>
                <span class="badge text-bg-warning m-1">
                    {compData.skills[0]}
                </span> 
                <span class="badge text-bg-primary m-1">
                    {compData.skills[1]}
                </span> 
                <span class="badge text-bg-success m-1">
                    {compData.skills[2]}
                </span>
                <span class="badge text-bg-danger m-1">
                    {compData.skills[3]}
                </span>
            </p>
            <a href="#" className="card-link">
              {compData.github}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProffInfo;

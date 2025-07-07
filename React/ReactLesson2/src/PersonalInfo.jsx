import React from "react";

const PersonalInfo = (data) => {
  return (
    <>
      <div className="col-md-4" style={{ float: "left" }}>
        <div className="card" style={{ width: 18 + "rem" }}>
          <div className="card-body">
            <h5 className="card-title">Personal Information</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {data.name}
            </h6>
            <p className="card-text">
              Prakash is a final year student of Btech, he is {data.age} years
              old. He loves frontend Programming.
            </p>
            <a href="#" className="card-link">
              {data.email}
            </a>
            <a href="#" className="card-link">
              {data.mob}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;

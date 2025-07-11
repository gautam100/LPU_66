import React, { useState } from "react";

function DynamicFormBuilder() {
  const [fields, setFields] = useState([{ id: Date.now(), value: "" }]);
  const [submittedValues, setSubmittedValues] = useState([]);

  const addField = () => {
    setFields([...fields, { id: Date.now(), value: "" }]);
  };

  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleChange = (id, newValue) => {
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, value: newValue } : field
      )
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const values = fields.map((f) => f.value.trim()).filter((v) => v !== "");
    setSubmittedValues(values);
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        className="w-100"
        style={{ maxWidth: "500px" }}
      >
        <h3 className="text-center mb-4 fw-bold">Dynamic Form Builder</h3>

        {fields.map((field, index) => (
          <div className="input-group mb-3" key={field.id}>
            <input
              type="text"
              className="form-control rounded-start"
              placeholder={`Field ${index + 1}`}
              value={field.value}
              onChange={(e) => handleChange(field.id, e.target.value)}
            />
            <button
              type="button"
              className="btn btn-danger rounded-end"
              onClick={() => removeField(field.id)}
            >
              Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          className="btn w-40 mb-2 text-white"
          style={{ backgroundColor: "#28cc69" }}
          onClick={addField}
        >
          Add Field
        </button> 
        <button
          type="submit"
          className="btn w-40 mb-2 text-white ms-2"
          style={{ backgroundColor: "#2c7ef8"}}
        >
          Submit
        </button>
      </form>
      {/* Show submitted values */}
      {submittedValues.length > 0 && (

        <div className="w-100" style={{ maxWidth: "500px" }}>
          <h5 className="text-center fw-bold mb-3">Submitted Values</h5>
          <ul className="list-group">
            {submittedValues.map((val, idx) => (
              <li key={idx} className="list-group-item">
                {val}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DynamicFormBuilder;

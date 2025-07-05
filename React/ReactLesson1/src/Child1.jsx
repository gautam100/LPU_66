import "./child1.css";

const Child1 = () => {
  let name = "John";
  let designation = "Software Developer";
  let skills = ["JS", "PHP", "Python", "GenAI"];
  return (
    <div>
      <h1>Introduction</h1>
      <div className="intro">
        <div>
          <span>Name:</span> {name}
        </div>
        <div>
          <span>Name:</span> {designation}
        </div>
        <div>
          <span>Skills:</span> {skills[0]} | {skills[1]} | {skills[2]} |{" "}
          {skills[3]}
        </div>
      </div>
    </div>
  );
};

export default Child1;

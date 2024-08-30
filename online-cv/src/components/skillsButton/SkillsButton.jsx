/* import React from "react";

const SkillsButton = () => {
  const skills = ["Javascript", "Figma", "Typescript"];

  const alertMessage = `Ferdigheter: \n * ${skills.join("\n * ")}`;
  return (
    <div>
      <button onClick={() => alert(alertMessage)}>Vis detaljer</button>
    </div>
  );
};

export default SkillsButton; */

import React, { useState } from "react";
import "./SkillsButton.css";

// Denne kan også bli lagt i separat komponent siden kan brukes i andre områder enn skills
const Skillsmodal = ({ skills, onClose, onSkillClick }) => {
  return (
    <section className="modal">
      <div className="modal-content">
        <h1>Ferdigheter</h1>
        <ul>
          {skills.map((skill, index) => (
            <li key={index} onClick={() => onSkillClick(skill)}>
              {index + 1}. {skill}
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close modal</button>
      </div>
    </section>
  );
};

const SkillsButton = ({ skills }) => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSkillClick = (skill) => {
    alert(`${skill} is clicked`);
  };

  return (
    <section>
      <button onClick={handleButtonClick}>Vis Ferdigheter</button>
      {showModal && (
        <Skillsmodal
          skills={skills}
          onClose={handleCloseModal}
          onSkillClick={handleSkillClick}
        />
      )}
    </section>
  );
};

export default SkillsButton;

import React from "react";
import { getStudentsContext } from "../context/studentsContext";
import studentsGet from "../modules/studentsGet";

import "./AllStudentsComponent.css";
import { PersonalizedTableComponent } from "./PersonalizedTableComponent";

const AllStudentsComponent = () => {
  const [stateStudents, setStudents] = getStudentsContext();
  const studentsLocalStorage = JSON.parse(localStorage.getItem("students"));

  const students = studentsGet(stateStudents, studentsLocalStorage);
  return (
    <div>
      {students ? (
        <PersonalizedTableComponent students={students} componentFunc="show" />
      ) : (
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h1>Sem Alunos</h1>
        </div>
      )}
    </div>
  );
};

export { AllStudentsComponent };

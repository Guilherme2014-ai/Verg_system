/* eslint-disable @typescript-eslint/no-unused-vars */
// Dependencies
import React from "react";

// Contect
import { getStudentsContext } from "../context/studentsContext";

// Modules
import studentsGet from "../modules/studentsGet";

// Components
import Button from "@mui/material/Button";
import { PersonalizedTableComponent } from "./PersonalizedTableComponent";

// CSS
import "./AllStudentsComponent.css";
import { Link } from "react-router-dom";

const AllStudentsComponent = () => {
  const [stateStudents, setStudents] = getStudentsContext();
  const studentsLocalStorage = JSON.parse(localStorage.getItem("students"));

  const students = studentsGet(stateStudents, studentsLocalStorage);
  return (
    <div>
      {students ? (
        <div>
          <PersonalizedTableComponent
            students={students}
            componentFunc="show"
          />
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h1>Sem Alunos</h1>
        </div>
      )}
      <br />
      <Link to="/alunos/novo">
        <Button
          variant="contained"
          style={{
            backgroundColor: "rgb(44, 63, 192)",
          }}
        >
          Novo Aluno
        </Button>
      </Link>
    </div>
  );
};

export { AllStudentsComponent };

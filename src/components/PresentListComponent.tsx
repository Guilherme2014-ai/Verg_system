/* eslint-disable @typescript-eslint/no-unused-vars */
// Dependencies
import React from "react";

// Components
import { PersonalizedTableComponent } from "./PersonalizedTableComponent";

// Contexts
import { getStudentsContext } from "../context/studentsContext";

// Modules
import chooseStudentData from "../modules/chooseStudentData";
import getStudentLocalStorage from "../modules/getStudentLocalStorage";

// CSS
import "./PresentListComponent.css";

const PresentListComponent = () => {
  const [stateStudents, setStudents] = getStudentsContext();
  const studentsLocalStorage = getStudentLocalStorage();

  const students = chooseStudentData(stateStudents, studentsLocalStorage);

  return (
    <div className="content">
      <br />
      <h1>Lista de Chamada</h1>
      <br />
      <br />
      <section>
        <div className="table_area">
          {students ? (
            <PersonalizedTableComponent
              students={students}
              componentFunc="mark-present"
            />
          ) : (
            <div>
              <h1>Sem Alunos</h1>
              <p>
                Para adicionar novos alunos basta ir em chamada, e em seguida
                "Novo Aluno"
              </p>
            </div>
          )}
        </div>
      </section>
      <br />
    </div>
  );
};

export { PresentListComponent };

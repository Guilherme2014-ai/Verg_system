// Dependencies
import React from "react";
import { useParams } from "react-router-dom";

// Modules
import getOneStudentById from "../modules/getOneStudentById";
import getStudentLocalStorage from "../modules/getStudentLocalStorage";

// CSS
import "./StudentPageComponent.css";

const StudentPageComponent = () => {
  console.log("student"); //
  const { student_id } = useParams();

  const studentsDatabase = getStudentLocalStorage();
  const student = getOneStudentById(studentsDatabase, student_id);

  console.log(student); //

  return (
    <div>
      <h1>Página do Aluno</h1>
      <h2>Aluno: {student.name}</h2>
    </div>
  );
};

export { StudentPageComponent };

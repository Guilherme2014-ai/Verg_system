// Dependencies
import React from "react";
import { useParams } from "react-router-dom";

// Modules
import getOneStudentById from "../modules/getOneStudentById";
import getStudentLocalStorage from "../modules/getStudentLocalStorage";

// CSS
import "./StudentPageComponent.css";

const StudentPageComponent = () => {
  const { student_id } = useParams();

  const studentsDatabase = getStudentLocalStorage();
  const student = getOneStudentById(studentsDatabase, student_id);

  return (
    <div className="area_main_student_page">
      <main className="main_student_page">
        <img src={student.avatar} alt="student_page" />

        <h1>{student.name}</h1>

        <div className="student_content">
          <h3>
            <strong>RA</strong> <small>{student.RA}</small>
          </h3>
          <h3>
            <strong>Idade</strong> <small>{student.age}</small>
          </h3>
          <h3>
            <strong>Sala</strong> <small>{student.room}</small>
          </h3>
        </div>
      </main>
    </div>
  );
};

export { StudentPageComponent };

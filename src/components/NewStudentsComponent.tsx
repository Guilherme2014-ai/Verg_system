// Dependencies
import React, { useState } from "react";

// Components
import Button from "@mui/material/Button";

// Context
import { getStudentsContext } from "../context/studentsContext";

// CSS
import "./NewStudentsComponent.css";
import { TextField } from "@mui/material";
import IStudents from "../interfaces/IStudents";
import studentGenerator from "../factory/studentGenerator";

const NewStudentsComponents = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [stateStudents, setStudents] = getStudentsContext();

  const fildsStates = {
    studentName: useState(""),
    studentAge: useState(""),
    studentRoom: useState(""),
    studentAvatar: useState(""),
    studentRA: useState(""),
  };

  function changeEventHandler(fieldName, e) {
    const value = e.target.value;

    fildsStates[`${fieldName}`][1](`${value}`);
  }

  function createStudent() {
    // add alert message

    const student = {
      studentName: fildsStates.studentName[0],
      studentAge: fildsStates.studentAge[0] as unknown as number,
      studentRoom: fildsStates.studentRoom[0],
      studentAvatar: fildsStates.studentAvatar[0],
      studentRA: fildsStates.studentRA[0],
    };

    const studentsLocalStorage: IStudents[] =
      JSON.parse(localStorage.getItem("students")) || [];

    const studentGenerated = studentGenerator(student);

    studentsLocalStorage.push(studentGenerated);
    localStorage.setItem("students", JSON.stringify(studentsLocalStorage));
    setStudents(studentsLocalStorage);
  }

  return (
    <div className="main">
      <div className="content_new_students">
        <h1>Novo Aluno</h1>
        <br />
        <br />
        <TextField
          className="input_text_new_students"
          required={true}
          id="outlined-basic"
          label="Nome do Aluno"
          variant="outlined"
          onChange={(e) => changeEventHandler("studentName", e)}
          value={fildsStates.studentName[0]}
        />
        <br />
        <br />
        <TextField
          className="input_text_new_students"
          id="outlined-basic"
          required={true}
          label="Idade do Aluno"
          variant="outlined"
          onChange={(e) => changeEventHandler("studentAge", e)}
          value={fildsStates.studentAge[0]}
          type="number"
        />
        <br />
        <br />
        <TextField
          className="input_text_new_students"
          id="outlined-basic"
          required={true}
          label="RA do Aluno"
          variant="outlined"
          onChange={(e) => changeEventHandler("studentRA", e)}
          value={fildsStates.studentRA[0]}
          type="text"
        />
        <br />
        <br />
        <TextField
          className="input_text_new_students"
          id="outlined-basic"
          required={true}
          label="Sala"
          variant="outlined"
          onChange={(e) => changeEventHandler("studentRoom", e)}
          value={fildsStates.studentRoom[0]}
        />
        <br />
        <br />
        <TextField
          className="input_text_new_students"
          id="outlined-basic"
          required={true}
          label="Foto ou Avatar"
          variant="outlined"
          onChange={(e) => changeEventHandler("studentAvatar", e)}
          value={fildsStates.studentAvatar[0]}
        />
        <br />
        <br />
        <Button variant="contained" onClick={createStudent}>
          Criar
        </Button>
      </div>
      <br />
    </div>
  );
};

export { NewStudentsComponents };

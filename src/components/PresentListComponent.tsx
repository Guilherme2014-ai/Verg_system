import React from "react";
import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { idUniqueV2 } from "id-unique-protocol";

import { getStudentsContext } from "../context/studentsContext";

import "./PresentListComponent.css";
import IStudents from "../interfaces/IStudents";

const PresentListComponent = () => {
  const [stateStudents, setStudents] = getStudentsContext();
  const students =
    stateStudents || JSON.parse(localStorage.getItem("students")) || null;

  const imagesLink = {
    present:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_3RVRNirRIUZXPFC2QrD8S73fZlh71NgXg&usqp=CAU",
    absent:
      "https://madeirasgasometro.vteximg.com.br/arquivos/ids/175522-490-490/PP1238-Vermelho-Ferrari----TX.jpg?v=637412982329300000",
  };

  function studentsActionsHandler(studentId: string) {
    const newStudents = students.map((student) => {
      if (student.id == studentId) student.present = !student.present;
      return student;
    });

    updateTheStudentLocalstorageField(newStudents);
    setStudents(newStudents);
  }

  function updateTheStudentLocalstorageField(newStudents: IStudents[]) {
    localStorage.setItem("students", JSON.stringify(newStudents));
  }

  return (
    <div className="content">
      <br />
      <h1>Lista de Chamada</h1>
      <br />
      <br />
      <section>
        <div className="table_area">
          {students ? (
            <TableContainer component={Paper} className="table">
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow className="table_header">
                    <TableCell>Nome do Aluno</TableCell>
                    <TableCell align="right">Idade</TableCell>
                    <TableCell align="right">Sala</TableCell>
                    <TableCell align="right">Presente</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {students.map((student) => (
                    <TableRow
                      onClick={() => studentsActionsHandler(student.id)}
                      className="table_body"
                      style={{
                        backgroundColor:
                          !student.present && "rgb(27, 129, 231)",
                      }}
                      key={idUniqueV2()}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Avatar alt="Remy Sharp" src={student.avatar} />
                        {student.name}
                      </TableCell>
                      <TableCell align="right">{student.age}</TableCell>
                      <TableCell align="right">{student.room}</TableCell>
                      <TableCell
                        align="right"
                        className="status_column"
                        style={{
                          display: "flex",
                          justifyContent: "end",
                          border: "1px solid rgba(0,127,255, 0.7)",
                          height: "80px",
                        }}
                      >
                        <Avatar
                          style={{
                            width: "60px",
                            height: "60px",
                          }}
                          alt="miranha"
                          src={
                            student.present
                              ? imagesLink.present
                              : imagesLink.absent
                          }
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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

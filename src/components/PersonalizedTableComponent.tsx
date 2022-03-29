/* eslint-disable @typescript-eslint/no-unused-vars */
// Dependencies
import React from "react";
import { useNavigate } from "react-router-dom";
import { idUniqueV2 } from "id-unique-protocol";

// Components
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

// Context
import { getStudentsContext } from "../context/studentsContext";

// Interface
import IStudents from "../interfaces/IStudents";

// CSS
import "./PersonalizedTableComponent.css";

const PersonalizedTableComponent = ({
  students,
  componentFunc,
}: {
  students: IStudents[];
  componentFunc: "show" | "mark-present";
}) => {
  const navigate = useNavigate();
  const [stateStudents, setStudents] = getStudentsContext();

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
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow className="table_header">
            <TableCell>Nome do Aluno</TableCell>
            <TableCell align="right">Idade</TableCell>
            <TableCell align="right">Sala</TableCell>
            {componentFunc == "mark-present" && (
              <TableCell align="right">Presente</TableCell>
            )}
            {componentFunc == "show" && (
              <TableCell align="right">RA do Aluno</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow
              onClick={() =>
                componentFunc != "show"
                  ? studentsActionsHandler(student.id)
                  : navigate(`/alunos/${student.id}`)
              }
              className="table_body"
              style={{
                backgroundColor:
                  componentFunc == "mark-present" &&
                  !student.present &&
                  "rgb(27, 129, 231)",
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
              {componentFunc == "mark-present" && (
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
                    alt="present-status"
                    src={
                      student.present ? imagesLink.present : imagesLink.absent
                    }
                  />
                </TableCell>
              )}
              {componentFunc == "show" && (
                <TableCell align="right">{student.RA}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { PersonalizedTableComponent };

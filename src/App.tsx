// Dependencies
import React, { Dispatch, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Interfaces
import IStudents from "./interfaces/IStudents";

// Contexts
import { studentsProviderContext } from "./context/studentsContext";

// Components
import { NavComponent } from "./components/NavComponent";
import { PresentListComponent } from "./components/PresentListComponent";
import { AllStudentsComponent } from "./components/AllStudentsComponent";
import { NewStudentsComponents } from "./components/NewStudentsComponent";
import { StudentPageComponent } from "./components/StudentPageComponent";

const App: React.FC = () => {
  const studentsState: [IStudents[], Dispatch<IStudents[]>] = useState(null);

  return (
    <studentsProviderContext.Provider value={studentsState}>
      <Router>
        <NavComponent
          list={[
            {
              title: "Lista de Chamada",
              link: "/chamada",
            },
            {
              title: "Alunos",
              link: "/alunos",
            },
          ]}
        />
        <Routes>
          <Route path="/alunos" element={<AllStudentsComponent />} />
          <Route path="/chamada" element={<PresentListComponent />} />
          <Route
            path="/alunos/:student_id"
            element={<StudentPageComponent />}
          />
          <Route path="/alunos/novo" element={<NewStudentsComponents />} />
          <Route
            path="/cronograma_de_aulas"
            element={<h1>Lista de horario</h1>}
          />
        </Routes>
      </Router>
    </studentsProviderContext.Provider>
  );
};

export { App };

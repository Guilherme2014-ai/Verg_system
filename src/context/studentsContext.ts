import React, { Dispatch, useContext } from "react";
import IStudents from "../interfaces/IStudents";

const studentsProviderContext = React.createContext(null);
const getStudentsContext = (): [IStudents[], Dispatch<IStudents[]>] =>
  useContext(studentsProviderContext);

export { studentsProviderContext, getStudentsContext };

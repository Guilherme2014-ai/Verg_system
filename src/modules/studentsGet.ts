import IStudents from "../interfaces/IStudents";

export default (students: IStudents[], studentsLocalStorage: IStudents[]) => {
  return students || studentsLocalStorage || null;
};

import IStudents from "../interfaces/IStudents";

export default (database: IStudents[], id: string | number) => {
  const student = database.find((student) => student.id === id);
  return student;
};

import { idUniqueV2 } from "id-unique-protocol";
import IStudents from "../interfaces/IStudents";

export default ({
  studentName,
  studentAge,
  studentAvatar,
  studentRoom,
}: {
  studentName: string;
  studentAge: number;
  studentAvatar: string;
  studentRoom: string;
}): IStudents => {
  const id = idUniqueV2();
  const present = false;

  const defaultUserImage =
    "https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png";

  return {
    id,
    name: studentName,
    age: studentAge,
    room: studentRoom,
    present,
    avatar: studentAvatar.trim() == "" ? defaultUserImage : studentAvatar,
  };
};

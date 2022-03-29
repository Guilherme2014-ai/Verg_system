import { idUniqueV2 } from "id-unique-protocol";
import IStudents from "../interfaces/IStudents";

import defaultUserImage from "../defaultContent/user/images/profile_picture";

export default ({
  studentName,
  studentAge,
  studentAvatar,
  studentRoom,
  studentRA,
}: {
  studentName: string;
  studentAge: number;
  studentAvatar: string;
  studentRoom: string;
  studentRA: string;
}): IStudents => {
  const id = idUniqueV2();
  const present = false;

  return {
    id,
    name: studentName,
    age: studentAge,
    room: studentRoom,
    present,
    RA: studentRA,
    avatar: studentAvatar.trim() == "" ? defaultUserImage : studentAvatar,
  };
};

import React from "react";
import StudentCard from "./StudentCard.StudentList";

interface StudentData {
  id: number;
  name: string;
  className: string;
  marks: number;
}

//To do
// 1.take student list as props
// 2. use map to ender the list of students
const StudentList: React.FC<{
  studentList: StudentData[];
  onDeleteStudent: (id: number) => void;
  onEditStudent: (id: number) => void;
}> = ({ studentList, onDeleteStudent, onEditStudent }) => {
  return (
    <div>
      {studentList.map((studentData) => {
        return (
          <StudentCard
            {...studentData}
            onDeleteStudent={onDeleteStudent}
            onEditStudent={onEditStudent}
          />
        );
      })}
    </div>
  );
};

export default StudentList;

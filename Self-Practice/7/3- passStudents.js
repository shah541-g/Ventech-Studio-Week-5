
const filterPassStudents = (students) => {

  return students.filter(student => student.marks>=50)
}


const students = [
  {
    id: 1,
    name: "Ali",
    marks: 85
  },
  {
    id: 2,
    name: "Ahmed",
    marks: 42
  },
  {
    id: 3,
    name: "Sara",
    marks: 91
  },
  {
    id: 4,
    name: "Fatima",
    marks: 50
  },
  {
    id: 5,
    name: "Usman",
    marks: 38
  },
  {
    id: 6,
    name: "Ayesha",
    marks: 67
  },
  {
    id: 7,
    name: "Bilal",
    marks: 49
  },
  {
    id: 8,
    name: "Zain",
    marks: 73
  },
  {
    id: 9,
    name: "Hina",
    marks: 95
  },
  {
    id: 10,
    name: "Hamza",
    marks: 50
  }
];

console.log(filterPassStudents(students))
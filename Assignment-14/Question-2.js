// A method to update the student's grade where an object represents the student's information

const studentDetails = {
    name:  "Seema",
    age: 20,
    grade: 'B'
}

function updateGrade(){
    studentDetails.grade = 'A'
    console.log(`After updation of grade:`);
    console.log(studentDetails);
}

updateGrade()


  
  
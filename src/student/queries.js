 const getStudent = "SELECT * FROM students";
 const getStudentId = "SELECT * FROM students WHERE id = $1"
 const checkIfEmailExists = "SELECT * FROM students s WHERE email = $1"
 const addStudentDetails = "INSERT INTO students(name, email, age, dob) VALUES ($1, $2, $3, $4)"
 const checkIfIdExists = "SELECT * FROM students WHERE id = $1"
 const deleteStudent = "DELETE FROM students WHERE id = $1 "
 const updateStudent = "UPDATE students SET name = $1 WHERE id = $2"


 module.exports = {
    getStudent,
    getStudentId,
    checkIfEmailExists,
    addStudentDetails,
    checkIfIdExists,
    deleteStudent,
    updateStudent
 }  
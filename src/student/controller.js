const pool = require('../../db')
const query = require('./queries')

const getStudent = (req, res) => {
    pool.query(query.getStudent,(error, results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getStudentId = (req, res) => {
    const id = req.params.id
    pool.query(query.getStudentId,[id],(error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows)
    });
};

const addStudentDetails = (req, res) => {
    const {name, email, age, dob} = req.body;
    // Check if email exisit
    pool.query(query.checkIfEmailExists, [email], (error, results) =>{
        if(results.rows.length){
            res.send("Email already exisit")
        }
    // Add details to db
    pool.query(query.addStudentDetails, [name, email, age, dob], (error, results) =>{
        if(error) throw error;
        res.status(201).send("Students details added successfully")
    })
})
}

const removeStudent = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(query.checkIfIdExists, [id], (error, results) =>{
        if(!results.rows.length){
            res.send('Student Id doesn\'t exist')
        }
        pool.query(query.deleteStudent, [id], (error, results) =>{
            if(error) throw error;
            res.status(200).send("Student details deleted successfully")
        })
    })
}

const updateStudent = (req, res) => {
    const id = parseInt(req.params.id)
    const { name } = req.body
    pool.query(query.checkIfIdExists, [id], (error, results) =>{
        if(!results.rows.length){
            res.send('Student Id doesn\'t exist')
        }
        pool.query(query.updateStudent, [name, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Student name updated successfully")
        })
    })
}

module.exports = {
    getStudent,
    addStudentDetails,
    getStudentId,
    updateStudent,
    removeStudent
}
const { Router } = require('express')
const controller = require('./controller')

const router = Router();

router.get('/',controller.getStudent)
router.post('/',controller.addStudentDetails)
router.get('/:id',controller.getStudentId)
router.put('/:id', controller.updateStudent)
router.delete('/:id',controller.removeStudent)

module.exports = router
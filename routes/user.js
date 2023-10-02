const userController = require("../controllers/user_company")

const express = require("express")
const router = express.Router()

router.post('/new-user', userController.createUser)

router.get('/', userController.getAllUsers)

router.get('/:id', userController.getUserById)

router.patch('/:id', userController.updateUserById)

router.delete('/:id', userController.deleteUserById)
module.exports = router;
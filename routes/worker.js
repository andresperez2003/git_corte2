const workerController = require("../controllers/worker")

const express = require("express")
const router = express.Router()

router.post('/new-worker', workerController.createWorker)

router.get('/', workerController.getAllWorkers)

router.get('/:id', workerController.getWorkerById)

router.patch('/:id', workerController.updateWorkerById)

router.delete('/:id', workerController.deleteWorkerById)
module.exports = router;
const express = require('express');
const router = express.Router();
const authenticationMiddleware = require('../middlewares/authenticationMiddleware');
const taskController = require('../controllers/taskController');

router.post('/', authenticationMiddleware, taskController.createTask);

router.get('/', taskController.getAllTasks);

router.get('/:taskId', taskController.getTaskById);

router.get('/status/:status', taskController.getTasksByStatus);

router.put('/:taskId', authenticationMiddleware, taskController.updateTask);

router.delete('/:taskId', authenticationMiddleware, taskController.deleteTask);

module.exports = router;

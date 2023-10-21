"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const text = req.body.text;
    const newTodo = {
        id: Date.now(),
        text: text
    };
    todos.push(newTodo);
    res.status(200).send();
});
router.delete('/todo-delete', (req, res, next) => {
    const id = req.body.id;
    console.log(id);
    const todoIndex = todos.findIndex(todo => todo.id == id);
    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1);
        res.status(200).json({ message: 'Todo deleted successfully' });
    }
    else {
        res.status(404).json({ message: 'Todo not found' });
    }
});
router.put('/todo-update', (req, res, next) => {
    const id = req.body.id;
    const newText = req.body.text;
    console.log(id);
    const todoToUpdate = todos.find(todo => todo.id == id);
    if (todoToUpdate) {
        todoToUpdate.text = newText;
        res.status(200).json({ message: 'Todo updated successfully' });
    }
    else {
        res.status(404).json({ message: 'Todo not found' });
    }
});
exports.default = router;

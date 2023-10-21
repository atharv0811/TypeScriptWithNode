import { Router } from 'express';
import { Todo } from '../Models/model';

const todos: Todo[] = [];
const router = Router();

router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});

router.post('/todo', (req, res, next) => {
    const text: string = req.body.text;
    const newTodo: Todo = {
        id: Date.now(),
        text: text
    };
    todos.push(newTodo);
    res.status(200).send();
});

router.delete('/todo-delete', (req, res, next) => {
    const id: number = req.body.id;
    console.log(id)
    const todoIndex: number = todos.findIndex(todo => todo.id == id);
    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1);
        res.status(200).json({ message: 'Todo deleted successfully' });
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

router.put('/todo-update', (req, res, next) => {
    const id: number = req.body.id;
    const newText: string = req.body.text;
    console.log(id)
    const todoToUpdate: Todo | undefined = todos.find(todo => todo.id == id);
    if (todoToUpdate) {
        todoToUpdate.text = newText;
        res.status(200).json({ message: 'Todo updated successfully' });
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

export default router;
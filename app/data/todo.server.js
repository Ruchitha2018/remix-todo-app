import { prisma } from "./database.server";

export async function addTodo(todoData) {
    try {
        return await prisma.todo.create({
            data: {
                name: todoData.name,
                deadline: new Date(todoData.deadline),
                status: todoData.status,
                catId: +todoData.catId,
            }
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function getTodosTodoStatus() {
    try {
        const todos = await prisma.todo.findMany({ where: {status: 'todo'}});
        return todos;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}
export async function getTodosInProgressStatus() {
    try {
        const todos = await prisma.todo.findMany({ where: {status: 'in-progress'}});
        return todos;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}
export async function getTodosCompletedStatus() {
    try {
        const todos = await prisma.todo.findMany({ where: {status: 'completed'}});
        return todos;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}



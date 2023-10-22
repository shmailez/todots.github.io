import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

type Todo = {
    id: string
    title: string
    completed: boolean
}

const todoAdapter = createEntityAdapter<Todo>({
    selectId: (todo) => todo.id
})

const TodoSlice = createSlice({
    name: 'todos', 
    initialState: todoAdapter.getInitialState(), 
    reducers: {
        addTodo: todoAdapter.addOne, 
        removeTodo: todoAdapter.removeOne, 
        updateTodo: todoAdapter.updateOne, 
        removeAll: todoAdapter.removeAll
    }
})

export const todoSelector = todoAdapter.getSelectors<RootState>((state) => state.todos)

export const {addTodo, removeTodo, updateTodo, removeAll} = TodoSlice.actions

export default TodoSlice.reducer
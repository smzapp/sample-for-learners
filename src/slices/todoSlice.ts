import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TodoType{
  id: number;
  title: string;
  completed: boolean;
}

interface TodoState {
  data?: TodoType[];
}

const initialState: TodoState = {
  data: undefined
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodo: (state, action: PayloadAction<TodoType[]>) => {
      state.data = action.payload;
    }
  },
})

export const { setTodo } = todoSlice.actions


export default todoSlice.reducer
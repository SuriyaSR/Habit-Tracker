import { createSlice } from "@reduxjs/toolkit";

export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDated: string[];
  createdAt: string;
}

interface HabitState {
  habits: Habit[];
}

const initialState: HabitState = {
    habits: [],
} 

const habitSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.habits.push(action.payload);
    },
    removeHabit: (state, action) => {
      state.habits = state.habits.filter(habit => habit.id !== action.payload.id);
    },
    updateHabit: (state, action) => {
      const index = state.habits.findIndex(habit => habit.id === action.payload.id);
      if (index !== -1) {
        state.habits[index] = action.payload;
      }
    },
    clearHabits: (state) => {
      state.habits = [];
    }
  }
});

export const { addHabit, removeHabit, updateHabit, clearHabits } = habitSlice.actions;
export default habitSlice.reducer;
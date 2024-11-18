import { create } from "zustand";

export const useTaskStore = create((set) => ({
  tasks: [],
  newTask: "",
  activeFilter: "all",
  dueDate: "",

  setNewTask: (value) => set({ newTask: value }),
  setFilter: (filter) => set({ activeFilter: filter }),
  setDueDate: (date) => set({ dueDate: date }),

  addTask: (taskName, category, dueDate) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: Date.now(),
          name: taskName,
          completed: false,
          timestamp: new Date(),
          category: category,
          dueDate: dueDate,
        },
      ],
    })),
  toggleTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    })),
  deleteTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),
}));